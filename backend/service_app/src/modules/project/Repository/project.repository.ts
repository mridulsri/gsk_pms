import { ProjectDto } from "./../dto/project.dto";
class ProjectRepository {
  projects: Array<ProjectDto> = [];

  constructor() {
    console.log("initiated project repository");
  }

  // add project in persistence store
  async addProject(project: ProjectDto) {
    project.id = Math.floor(100 + Math.random() * 900);
    this.projects.push(project);
    return project;
  }
  // update project in persistence store
  async updateProject(project: ProjectDto) {
    const index = this.projects.findIndex(
      (project: { id: number }) => project.id === project.id
    );
    if (index < 0) {
      return null;
    }
    this.projects.splice(index, 1, project);
    return this.projects[index];
  }
  // delete project from persistence store
  async deleteById(projectId: number) {
    const index = this.projects.findIndex(
      (project: { id: number }) => project.id === projectId
    );
    if (index < 0) {
      return false;
    }
    return true;
  }

  // get all projects from persistence store
  async getProjects() {
    return this.projects;
  }

  // get project from persistence store
  async getProjectById(projectId: number) {
    return this.projects.find(
      (project: { id: number }) => project.id === projectId
    );
  }

  // get project's employee from persistence store
  async getProjectEmployees(projectId: number) {
    const project = await this.getProjectById(projectId);
    return project && project.employees ? project.employees.split(",") : [];
  }
}

export default new ProjectRepository();
