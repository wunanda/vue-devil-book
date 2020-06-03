const book = {
  fileName: state => state.book.fileName, // 文件名称
  menuVisible: state => state.book.menuVisible, // 菜单栏是否显示
  settingVisible: state => state.book.settingVisible, // -1表示不显，0表示显示字号，1：主题，2进度条，3目录
  defaultFontSize: state => state.book.defaultFontSize, // 默认字体大小
  currentBook: state => state.book.currentBook, // 当前解析的book
  defaultFontFamily: state => state.book.defaultFontFamily, // 当前选中的字体
  fontFamilyVisible: state => state.book.fontFamilyVisible // 是否显示字体选中栏
}

export default book
