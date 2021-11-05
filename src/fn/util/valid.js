import { store } from '@/store'
export default {
  async checkKey(k, value, callback, pass) {
    if (pass) {
      callback()
      return
    }
    let valid = await store.dispatch(`${k}/checkKey`, { name: value })
    if (!valid) {
      callback(new Error('相同信息已存在'))
      return
    }
    callback()
  },
  async checkName(k, value, callback, pass) {
    if (pass) {
      callback()
      return
    }
    let valid = await store.dispatch(`${k}/checkName`, { name: value })
    if (!valid) {
      callback(new Error('名字已存在'))
      return
    }
    callback()
  },
  async checkCard(k, value, callback, pass) {
    if (pass) {
      callback()
      return
    }
    let valid = await store.dispatch(`${k}/checkCard`, { card: value })
    if (!valid) {
      callback(new Error('卡号已被使用'))
      return
    }
    callback()
  },
  async checkUsername(k, value, callback, pass) {
    if (pass) {
      callback()
      return
    }
    let valid = await store.dispatch(`${k}/checkUsername`, { username: value })
    if (!valid) {
      callback(new Error('用户名已被使用'))
      return
    }
    callback()
  },
  async checkRepassword(k, value, callback, pass) {
    if (pass) {
      callback()
      return
    }
    let valid = k === value
    if (!valid) {
      callback(new Error('2次密码不一致'))
      return
    }
    callback()
  },
}
