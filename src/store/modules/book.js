const book = {
  state: {
    fileName: '', // 文件名称
    menuVisible: false, // 菜单栏是否显示
    settingVisible: -1, // -1表示不显，0表示显示字号，1：主题，2进度条，3目录
    defaultFontSize: 16, // 默认字体大小
    currentBook: null, // 当前 epub解析的book
    defaultFontFamily: 'Default', // 当前选中的字体
    fontFamilyVisible: false // 是否显示字体选中栏
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENUVISIBLE': (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    'SET_SETTINGVISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_DEFAULTFONTSIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    },
    'SET_CURRENT_BOOK': (state, currentBook) => {
      state.currentBook = currentBook
    },
    'SET_DEFAULTFONTFAMILY': (state, defaultFontFamily) => {
      state.defaultFontFamily = defaultFontFamily
    },
    'SET_FONT_FAMILY_VISIBLE': (state, fontFamilyVisible) => {
      state.fontFamilyVisible = fontFamilyVisible
    }
  }
}

export default book
