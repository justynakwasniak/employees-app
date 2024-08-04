import { Employee } from "../modals/Employee";

const apiUrl = "http://localhost:3000/employees";

export const fetchEmployees = () => {
  return fetch(apiUrl).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Cannot fetch employees");
    }
  });
};

export const createEmployee = (newEmployee: Employee) => {
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

export const fetchEmployeeById = (id: string) => {
  return fetch(`${apiUrl}/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Cannot fetch employee");
    }
  });
};

export const updateEmployee = (updatedEmployee: Employee) => {
  return fetch(`${apiUrl}/${updatedEmployee.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedEmployee),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Cannot update employee");
    }
  });
};
export const deleteEmployee = (id: string) => {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Cannot delete employee");
    }
  });
};
