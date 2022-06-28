const state = {
  activeButtonMenuName: '',
  activeButtonHeader: null
}

const mutations = {
  SET_ACTIVE_BUTTON_MENU_NAME(state, { name }) {
    state.activeButtonMenuName = name;
  },
  SET_ACTIVE_BUTTON_HEADER(state, { comp }) {
    state.activeButtonHeader = comp;
  }
}

const actions = {
  setActiveButtonMenuName({ commit }, { name }) {
    commit('SET_ACTIVE_BUTTON_MENU_NAME', { name: name });
  },
  setActiveButtonHeader({ commit }, { comp }) {
    commit('SET_ACTIVE_BUTTON_HEADER', { comp: comp });
  },
}

const getters = {
  activeButtonMenuName: (state) => {
    return state.activeButtonMenuName;
  },
  activeButtonHeader: (state) => {
    return state.activeButtonHeader;
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
