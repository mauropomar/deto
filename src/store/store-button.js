const state = {
  selectButtonMenuName: '',
  selectButtonHeader: null
}

const mutations = {
  SET_SELECT_BUTTON_MENU_NAME(state, { name }) {
    state.selectButtonMenuName = name;
  },
  SET_SELECT_BUTTON_HEADER(state, { comp }) {
    state.selectButtonHeader = comp;
  }
}

const actions = {
  setSelectButtonMenuName({ commit }, { name }) {
    commit('SET_SELECT_BUTTON_MENU_NAME', { name: name });
  },
  setSelectButtonHeader({ commit }, { comp }) {
    commit('SET_SELECT_BUTTON_HEADER', { comp: comp });
  },
}

const getters = {
  selectButtonMenuName: (state) => {
    return state.selectButtonMenuName;
  },
  selectButtonHeader: (state) => {
    return state.selectButtonHeader;
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
