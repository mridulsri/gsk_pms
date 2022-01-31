import { EmployeeDto } from "./../dto/employee.dto";
class EmployeeRepository {
  employees: Array<EmployeeDto> = [];

  constructor() {
    console.log("initiated project repository");
  }

  // add project in persistence store
  async addEmployee(employee: EmployeeDto) {
    employee.id = Math.floor(10000 + Math.random() * 9000);
    this.employees.push(employee);
    return employee;
  }

  // get all projects from persistence store
  async getEmployees() {
    return this.employees;
  }

  // get project from persistence store
  async getEmployeeById(employeeId: number) {
    return this.employees.find((emp: { id: number }) => emp.id === employeeId);
  }
}

export default new EmployeeRepository();
