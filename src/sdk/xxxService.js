import fetchUtil from './util/fetchUtil'
import site from './config/site'
import paramUtil from './util/paramUtil'

export default class {
  static save(e) {
    let url = `${site.milkyway}/xxx`
    let formData = new FormData()
    formData.append('name', e.name)
    let options = {
      method: 'POST',
      body: formData,
    }
    return fetchUtil.run(url, options)
  }
  static update(e) {
    let url = `${site.milkyway}/xxx/${e.id}`
    let options = {
      method: 'PUT',
      body: e,
    }
    return fetchUtil.run(url, options)
  }
  static findById(e) {
    let url = `${site.milkyway}/xxx/${e.id}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static count(filter) {
    let url = `${site.milkyway}/xxx/count?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
  static find(filter) {
    let url = `${site.milkyway}/xxx?${paramUtil.createUrlEncode(filter)}`
    let options = {
      method: 'GET',
    }
    return fetchUtil.run(url, options)
  }
}
