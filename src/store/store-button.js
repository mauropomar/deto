const state = {
  selectButton: ''
}

const mutations = {
  SET_SELECT_BUTTON(state, { name }) {
    state.selectButton = name;
  }
}

const actions = {
  setSelectName({ commit }, { name }) {
    commit('SET_SELECT_BUTTON', { name: name });
  },
}

const getters = {
  selectButton: (state) => {
    return state.selectButton;
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
