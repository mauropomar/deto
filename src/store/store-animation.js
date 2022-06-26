const state = {
  animationIn: true
}

const mutations = {
  SET_ANIMATION_IN(state, { value }) {
    state.animationIn = value;
  }
}

const actions = {
  setAnimationIn({ commit }, { value }) {
    commit('SET_ANIMATION_IN', { value: value });
  },
};

const getters = {
  animationIn: (state) => {
    return state.animationIn;
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
