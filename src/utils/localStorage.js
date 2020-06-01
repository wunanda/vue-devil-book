/**
 * create by good devil on 2020/6/1
 */
import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage (key, value) {
  return localStorage.set(key,value)
}

export function getLocalStorage(key){
  return localStorage.get(key)
}

export function removeLocalStorage (key) {
  return localStorage.delete(key)
}

export function clearLocalStorage () {
  return localStorage.clear()
}

/**
 * 保存book配置信息
 * @param fileName
 * @param key
 * @param value
 */
export function setBookObject (fileName, key, value) {
  let book = getLocalStorage(`${fileName}-info`)
  if (!book) {
    book = {}
  }
  book[key] = value
  setLocalStorage(`${fileName}-info`, book)
}

/**
 * 根据value对象中的key获取book配置信息
 * @param fileName
 * @param key
 * @returns {null|*}
 */
export function getBookObject (fileName, key) {
  let book = getLocalStorage(`${fileName}-info`)
  if (book) {
    return book[key]
  } else {
    return null
  }
}

/**
 * 获取字体
 * @param fileName
 * @returns {null}
 */
export function getFontFamily (fileName) {
  return getBookObject(fileName, 'fontFamily')
}

/**
 * 保存book字体
 * @param fileName
 * @param font
 */
export function saveFontFamily (fileName,font) {
  return setBookObject(fileName, 'fontFamily', font)
}

/**
 * 获取字号大小
 * @param fileName
 * @returns {*}
 */
export function getFontSize (fileName) {
  return getBookObject(fileName, 'fontSize')
}

/**
 * 保存字体大小
 * @param fileName
 * @param fontSize
 */
export function saveFontSize (fileName, fontSize) {
  setBookObject(fileName, 'fontSize', fontSize)
}
