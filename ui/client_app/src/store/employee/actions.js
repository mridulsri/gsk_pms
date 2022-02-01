import httpClient from "../../utils/httpClient";

const fetchEmployees = async function ({ commit }) {
  try {
    const resp = await httpClient.GET("/employee");
    if (resp.status === 200) {
      commit("set_employees", resp.data.result);
    }
    return resp;
  } catch (error) {
    console.error("error :>> ", error);
  }
};

const addEmployee = async function ({ dispatch }, payload) {
  try {
    const resp = await httpClient.POST("/employee", payload);
    if (resp.status === 201) {
      dispatch("fetchEmployees");
    }
    return resp;
  } catch (error) {
    console.error("error :>> ", error);
  }
};

export default {
  fetchEmployees,
  addEmployee,
};
