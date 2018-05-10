/**
 * 设置cookie
 * @param name
 * @param value
 * @returns {Promise.<void>}
 */
export let setCookie = async (name, value) => {
  if (value) {
    var Days = 365
    var exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
  }
}

/**
 * 获取cookie
 * @param name
 * @returns {Promise.<null>}
 */
export let getCookie = async (name) => {
  if (document.cookie.length > 0) {
    var begin = document.cookie.indexOf(name + '=')
    if (begin !== -1) {
      begin += name.length + 1 // cookie值的初始位置
      var end = document.cookie.indexOf(';', begin) // 结束位置
      if (end === -1) {
        end = document.cookie.length // 没有;则end为字符串结束位置
      }
      return unescape(document.cookie.substring(begin, end))
    }
  }
  return null
}

export let getCookie2 = async (cookieName) => {
  var start = 0
  var end = 0
  if (document.cookie.length > 0) {
    start = document.cookie.indexOf(cookieName + '=')
    if (start !== -1) {
      start = start + cookieName.length + 1
      end = document.cookie.indexOf(';', start)
      if (end === -1) end = document.cookie.length
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}

/**
 * 删除cookie
 * @param name
 * @returns {Promise.<void>}
 */
export let delCookie = async (name) => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = setCookie(name)
  if (cval && cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}
