const state = {
  visibleOptionHeader: true,
  visibleOptionBack: false
}

const mutations = {
  SET_VISIBLE_OPTION_HEADER(state, { visible }) {
    state.visibleOptionHeader = visible;
  },
  SET_VISIBLE_OPTION_BACK(state, { visible }) {
    state.visibleOptionBack = visible;
  },
}

const actions = {
  setVisibleOptionHeader({ commit }, { visible }) {
    commit('SET_VISIBLE_OPTION_HEADER', { visible: visible });
  },
  setVisibleOptionBack({ commit }, { visible }) {
    commit('SET_VISIBLE_OPTION_BACK', { visible: visible });
  },
};

const getters = {
  visibleOptionHeader: (state) => {
    return state.visibleOptionHeader;
  },
  visibleOptionBack: (state) => {
    return state.visibleOptionBack;
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
