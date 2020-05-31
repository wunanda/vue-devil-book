/**
 * create by good devil on 2020/5/31
 */

const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit('SET_MENUVISIBLE', menuVisible)
  },
  setSettingVisible: ({ commit }, settingVisible) => {
    return commit('SET_SETTINGVISIBLE', settingVisible)
  },
  setDefaultFontSize: ({ commit }, defaultFontSize) => {
    return commit('SET_DEFAULTFONTSIZE', defaultFontSize)
  },
  setCurrentBook: ({ commit }, currentBook) => {
    return commit('SET_CURRENT_BOOK', currentBook)
  },
  setDefaultFontFamily: ({ commit }, defaultFontFamily) => {
    return commit('SET_DEFAULTFONTFAMILY', defaultFontFamily)
  },
  setFontFamilyVisible: ({ commit }, defaultFontFamily) => {
    return commit('SET_FONT_FAMILY_VISIBLE', defaultFontFamily)
  }
}

export default actions
