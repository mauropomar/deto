const state = {
    visible: true
}

const mutations = {
  SET_VISIBLE(state, { visible }) {
    state.visible = visible;
  },
}

const actions = {
  setVisible({ commit }, { visible }) {
    commit('SET_VISIBLE', { visible: visible });
  },
};

const getters = {
   visible: (state) =>{
     return state.visible;
   }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
