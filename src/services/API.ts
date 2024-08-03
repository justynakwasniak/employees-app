import { Employee } from "./modals/Employee";

export const createEmployee = (newEmployee: Employee) => {
  const apiUrl = "http://localhost:3000/employees";
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployee),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Cannot create new employee");
    }
  });
};

export const fetchEmployees = () => {
  const apiUrl = "http://localhost:3000/employees";
  return fetch(apiUrl).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Cannot fetch employees");
    }
  });
};
