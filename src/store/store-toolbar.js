const state = {
  visibleOptionHeader: true,
  visibleOptionBack: false,
  iconMenuHeader: 'logo_header_white.png',
  iconDetoFooter:'logo_deto_footer_white.png'
}

const mutations = {
  SET_VISIBLE_OPTION_HEADER(state, { visible }) {
    state.visibleOptionHeader = visible;
  },
  SET_VISIBLE_OPTION_BACK(state, { visible }) {
    state.visibleOptionBack = visible;
  },
  SET_ICON_MENU_HEADER(state, { value }) {
    state.iconMenuHeader = value;
  },
  SET_ICON_DETO_FOOTER(state, { value }) {
    state.iconDetoFooter = value;
  },
}

const actions = {
  setVisibleOptionHeader({ commit }, { visible }) {
    commit('SET_VISIBLE_OPTION_HEADER', { visible: visible });
  },
  setVisibleOptionBack({ commit }, { visible }) {
    commit('SET_VISIBLE_OPTION_BACK', { visible: visible });
  },
  setIconMenuHeader({ commit }, { value }) {
    commit('SET_ICON_MENU_HEADER', { value: value });
  },
  setIconDetoFooter({ commit }, { value }) {
    commit('SET_ICON_DETO_FOOTER', { value: value });
  },
};

const getters = {
  visibleOptionHeader: (state) => {
    return state.visibleOptionHeader;
  },
  visibleOptionBack: (state) => {
    return state.visibleOptionBack;
  },
  iconMenuHeader:(state) => {
    return state.iconMenuHeader;
  },
  iconDetoFooter:(state) => {
    return state.iconDetoFooter;
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
