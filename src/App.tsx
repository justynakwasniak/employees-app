import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeesPage } from "./pages/EmployeesPage";
import { DetailsPage } from "./pages/DetailsPage";
import { AddEmployeePage } from "./pages/AddEmployeePage"; // Dodaj import dla AddEmployeePage
import { Employee } from "./modals/Employee";
import { fetchEmployees, createEmployee } from "./services/API"; // Zmiana ścieżki importu

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);

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
  ]);

  return (
    <div className="App container mt-5">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
