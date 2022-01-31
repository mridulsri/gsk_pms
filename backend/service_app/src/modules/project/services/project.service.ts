import { IService } from "../../../common/interface/service.interface";
import { ProjectDto } from "../dto/project.dto";
import ProjectRepository from "../Repository/project.repository";

class ProjectService implements IService {
  async create(param: ProjectDto) {
    return ProjectRepository.addProject(param);
  }

  async update(param: ProjectDto) {
    return ProjectRepository.updateProject(param);
  }

  async delete(id: number) {
    return ProjectRepository.deleteById(id);
  }

  async list(page: number, size: number) {
    return ProjectRepository.getProjects();
  }

  async getById(id: number) {
    return ProjectRepository.getProjectById(id);
  }
}

export default new ProjectService();
