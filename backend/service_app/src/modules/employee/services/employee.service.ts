import { IService } from "../../../common/interface/service.interface";
import { EmployeeDto } from "../dto/employee.dto";
import employeeRepository from "../Repository/employee.repository";

class ProjectService implements IService {
  async create(param: EmployeeDto) {
    return employeeRepository.addEmployee(param);
  }

  async update(param: EmployeeDto) {
    throw new Error("not Implemented");
  }

  async delete(id: number) {
    throw new Error("not Implemented");
  }

  async list(page: number, size: number) {
    return employeeRepository.getEmployees();
  }

  async getById(id: number) {
    return employeeRepository.getEmployeeById(id);
  }
}

export default new ProjectService();
