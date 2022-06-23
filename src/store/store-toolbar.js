const state = {
  visibleOptionHeader: true,
  visibleOptionBack: false,
  iconMenuHeader:'logo_header_white.png',
  iconDetoFooter:'logo_deto_footer_white.png',
  imageDetoIndexPage:'deto_white.png'
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
  SET_IMAGE_DETO_INDEX_PAGE(state, { value }) {
    state.imageDetoIndexPage = value;
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
  setIconDetoFooter({ commit }, { value }) {
    commit('SET_ICON_DETO_FOOTER', { value: value });
  },
  setImageDetoIndexPage({ commit }, { value }) {
    commit('SET_IMAGE_DETO_INDEX_PAGE', { value: value });
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
  },
  imageDetoIndexPage:(state) => {
    return state.imageDetoIndexPage;
  },
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
