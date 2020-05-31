/**
 * create by good devil on 2020/5/31
 */

const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit('SET_MENUVISIBLE', menuVisible)
  }
}

export default actions
