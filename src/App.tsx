import "./App.css";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeesPage } from "./pages/EmployeesPage";
import { DetailsPage } from "./pages/DetailsPage";
import { Employee } from "./modals/Employee";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockData: Employee[] = [
    {
      id: "1",
      firstname: "john",
      lastname: "doe",
      birthdate: "1985-01-15",
      street: "123 Elm St",
      city: "Springfield",
      postalCode: "62701",
      salary: 5000,
      status: "na urlopie",
      phonenumber: 123456789,
    },
    {
      id: "2",
      firstname: "ella",
      lastname: "adams",
      birthdate: "1990-02-25",
      street: "456 Oak St",
      city: "Metropolis",
      postalCode: "10001",
      salary: 6000,
      status: "na urlopie",
      phonenumber: 987654321,
    },
    {
      id: "3",
      firstname: "ann",
      lastname: "owen",
      birthdate: "1988-03-10",
      street: "789 Pine St",
      city: "Gotham",
      postalCode: "20001",
      salary: 7000,
      status: "na urlopie",
      phonenumber: 198123456,
    },
    {
      id: "4",
      firstname: "lily",
      lastname: "colins",
      birthdate: "1975-04-05",
      street: "321 Maple St",
      city: "Star City",
      postalCode: "30001",
      salary: 20000,
      status: "na urlopie",
      phonenumber: 6728373,
    },
    {
      id: "5",
      firstname: "nick",
      lastname: "werty",
      birthdate: "1980-05-20",
      street: "654 Birch St",
      city: "Central City",
      postalCode: "40001",
      salary: 1000000,
      status: "na urlopie",
      phonenumber: 63828373,
    },
  ];

  const filteredData = mockData.filter((employee) =>
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
      element: <DetailsPage data={mockData} />,
    },
  ]);

  return (
    <div className="App container mt-5">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
