import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeesPage } from "./pages/EmployeesPage";
import { DetailsPage } from "./pages/DetailsPage";
import { AddEmployeePage } from "./pages/AddEmployeePage"; // Dodaj import dla AddEmployeePage
import { Employee } from "./modals/Employee";
import { fetchEmployees, createEmployee, updateEmployee } from "./services/API"; // Zmiana ścieżki importu
import { EditEmployeePage } from "./pages/EditEmployeePage";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [sortKey, setSortKey] = useState<keyof Employee>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetchEmployees().then((data) => setEmployees(data));
  }, []);

  const handleAddEmployee = (newEmployee: Employee) => {
    createEmployee(newEmployee)
      .then((createdEmployee) => {
        setEmployees([...employees, createdEmployee]);
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  const handleUpdateEmployee = (updatedEmployee: Employee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  const handleSort = (key: keyof Employee) => {
    let direction: "asc" | "desc" = "asc";
    if (sortKey === key && sortDirection === "asc") {
      direction = "desc";
    }
    setSortKey(key);
    setSortDirection(direction);
    const sortedData = [...employees].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setEmployees(sortedData);
  };

  const filteredData = employees.filter((employee) =>
    `${employee.firstname} ${employee.lastname} ${employee.id} ${employee.phonenumber}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <EmployeesPage
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          data={filteredData}
          onSort={handleSort}
          sortKey={sortKey}
          sortDirection={sortDirection}
        />
      ),
    },
    {
      path: "/details/:id",
      element: <DetailsPage data={employees} />,
    },
    {
      path: "/add",
      element: <AddEmployeePage onAdd={handleAddEmployee} />,
    },
    {
      path: "/edit/:id",
      element: (
        <EditEmployeePage data={employees} onUpdate={handleUpdateEmployee} />
      ),
    },
  ]);

  return (
    <div className="App container mt-5">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
