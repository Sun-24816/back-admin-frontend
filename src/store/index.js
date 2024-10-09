import { createStore } from "vuex";

export default createStore({
  state: {
    activeMenuPath: "",
  },
  getters: {},
  mutations: {
    setActiveMenuPath(state, path) {
      state.activeMenuPath = path;
    },
  },
  actions: {},
  modules: {},
});
