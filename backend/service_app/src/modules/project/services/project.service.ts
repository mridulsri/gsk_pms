import { IService } from "../../../common/interface/service.interface";
import { ProjectDto } from "../dto/project.dto";
import projectRepository from "../Repository/project.repository";
class ProjectService implements IService {
  async create(param: ProjectDto) {
    return projectRepository.addProject(param);
  }

  async update(param: ProjectDto) {
    return projectRepository.updateProject(param);
  }

  async delete(id: number) {
    return projectRepository.deleteById(id);
  }

  async list(page: number, size: number) {
    return projectRepository.getProjects();
  }

  async getById(id: number) {
    return projectRepository.getProjectById(id);
  }
}

export default new ProjectService();
