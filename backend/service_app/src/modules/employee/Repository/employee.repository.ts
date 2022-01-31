import { EmployeeDto } from "./../dto/employee.dto";
class EmployeeRepository {
  employees: Array<EmployeeDto> = [];

  constructor() {
    console.log("initiated employee repository");
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

  // get all projects from persistence store
  async getEmployeeByIds(employeeIds: string) {
    return this.employees.filter(
      (obj) => employeeIds.indexOf(obj.id.toString()) !== -1
    );
  }
}

export default new EmployeeRepository();
