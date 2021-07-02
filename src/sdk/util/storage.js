export default class {
  static set(key, value) {
    if (!value) {
      return
    }
    localStorage.setItem(key, JSON.stringify(value))
  }
  static get(key) {
    let value = localStorage.getItem(key)
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }
  static remove(key) {
    localStorage.removeItem(key)
  }
}
