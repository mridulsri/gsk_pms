import { IService } from "../../../common/interface/service.interface";
import { EmployeeDto } from "../dto/employee.dto";
import ProjectRepository from "../Repository/employee.repository";

class ProjectService implements IService {
  async create(param: EmployeeDto) {
    return ProjectRepository.addEmployee(param);
  }

  async update(param: EmployeeDto) {
    throw new Error("not Implemented");
  }

  async delete(id: number) {
    throw new Error("not Implemented");
  }

  async list(page: number, size: number) {
    return ProjectRepository.getEmployees();
  }

  async getById(id: number) {
    return ProjectRepository.getEmployeeById(id);
  }
}

export default new ProjectService();
