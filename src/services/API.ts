import { config } from "../config";
import { Employee } from "../modals/Employee";

export const fetchEmployees = async (baseApiUrl = config.baseApiUrl) => {
  try {
    const response = await fetch(`${baseApiUrl}employees`);
    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

export const createEmployee = async (
  employee: Employee,
  baseApiUrl = config.baseApiUrl
) => {
  try {
    const response = await fetch(`${baseApiUrl}employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      throw new Error("Failed to create employee");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

export const fetchEmployeeById = async (
  id: string,
  baseApiUrl = config.baseApiUrl
) => {
  try {
    const response = await fetch(`${baseApiUrl}employees/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch employee");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching employee by ID:", error);
    throw error;
  }
};

export const updateEmployee = async (
  updatedEmployee: Employee,
  baseApiUrl = config.baseApiUrl
) => {
  try {
    const response = await fetch(
      `${baseApiUrl}employees/${updatedEmployee.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to update employee");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating employee:", error);
    throw error;
  }
};

export const deleteEmployee = async (
  id: string,
  baseApiUrl = config.baseApiUrl
) => {
  try {
    const response = await fetch(`${baseApiUrl}employees/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete employee");
    }
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};
