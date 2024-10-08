import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeesPage } from "./pages/EmployeesPage";
import { DetailsPage } from "./pages/DetailsPage";
import { AddEmployeePage } from "./pages/AddEmployeePage";
import { Employee } from "./modals/Employee";
import { fetchEmployees, createEmployee, deleteEmployee } from "./services/API";
import { EditEmployeePage } from "./pages/EditEmployeePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { LanguageSelector } from "./components/LanguageSelector";
import "./i18n";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [sortKey, setSortKey] = useState<keyof Employee>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    fetchEmployees()
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
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

  const handleDeleteEmployee = (id: string) => {
    deleteEmployee(id)
      .then(() => {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((emp) => emp.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
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
          onDelete={handleDeleteEmployee}
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
      <LanguageSelector />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
