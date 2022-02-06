import { EmployeeDto } from "./../dto/employee.dto";
class EmployeeRepository {
  employees: Array<EmployeeDto> = [];

  constructor() {
    console.log("initiated employee repository");
  }

  // add employee in persistence store
  async addEmployee(employee: EmployeeDto) {
    employee.id = employee.id;
    this.employees.push(employee);
    return employee;
  }

  // get all employee from persistence store
  async getEmployees() {
    return this.employees;
  }

  // get project from persistence store
  async getEmployeeById(employeeId: string) {
    const employee = this.employees.find(
      (emp: { id: string }) => emp.id == employeeId
    );
    return employee;
    // return this.employees.find((emp: { id: number }) => emp.id === employeeId);
  }

  // get all employee from persistence store
  async getEmployeeByIds(employeeIds: string) {
    return this.employees.filter(
      (obj) => employeeIds.indexOf(obj.id.toString()) !== -1
    );
  }
}

export default new EmployeeRepository();
