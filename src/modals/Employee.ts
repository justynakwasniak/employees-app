// src/modals/Employee.ts
export interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string; // Data urodzenia
  street: string; // Ulica
  city: string; // Miejscowość
  postalCode: string; // Kod pocztowy
  salary: number;
  status: string;
  phonenumber: number;
}
