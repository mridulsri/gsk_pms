import httpClient from "../../utils/httpClient";

const fetchProjects = async function ({ commit }) {
  try {
    const resp = await httpClient.GET("/project");
    if (resp.status === 200) {
      commit("set_projects", resp.data.result);
    }
    return resp;
  } catch (error) {
    console.error("error :>> ", error);
  }
};

const addProject = async function ({ dispatch }, payload) {
  try {
    const resp = await httpClient.POST("/project", payload);
    if (resp.status === 201) {
      dispatch("fetchProjects");
    }
    return resp;
  } catch (error) {
    console.error("error :>> ", error);
  }
};

const fetchProjectById = async function ({ state }, projectId) {
  try {
    const project = state.projects.find((x) => x.id === projectId);
    if (project) return project;
    else {
      const resp = await httpClient.GET("/project/" + projectId);
      if (resp.status === 200) {
        return resp.data.result;
      }
      return null;
    }
  } catch (error) {
    console.error("error :>> ", error);
  }
};

const updateProjectById = async function ({ dispatch }, payload) {
  try {
    const resp = await httpClient.PUT("/project", payload);
    if (resp.status === 200) {
      dispatch("fetchProjects");
    }
    return resp;
  } catch (error) {
    console.error("error :>> ", error);
  }
};

export default {
  fetchProjects,
  addProject,
  fetchProjectById,
  updateProjectById,
};
