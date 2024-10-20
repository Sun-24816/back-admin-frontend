import { createStore } from "vuex";

export default createStore({
  state: {
    userName: localStorage.getItem("userName"),
  },
  getters: {},
  mutations: {
    SET_USER(state, payload) {
      state.userName = payload.userName;
    },
  },
  actions: {
    login({ commit }, payload) {
      // 执行登录逻辑，比如 API 请求（这里省略）
      // 登录成功后，提交 mutation 来更新状态
      commit("SET_USER", payload); // 提交 mutation
    },
  },
  modules: {},
});
