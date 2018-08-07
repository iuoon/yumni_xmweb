/**
 * Created by mwuyz on 2016/10/28.
 */
import 'whatwg-fetch'

const loginhost = 'http://www.iuoon.com:9002/YNLoginServer/'
const host = 'http://www.iuoon.com:9002/YNServer/'
// const host = 'http://localhost:8080/'

var header = {strPlatform: 'web', token: '', userId: ''}
/*
 *获取资讯列表
 */
export let getQuestionList = async (nPageStart, tag) => {
  let response = await fetch(host + `app/getQuestionList?nPageStart=${nPageStart}&nPageSize=50`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}

/*
 *获取资讯详情
 */
export let getHotQuestions = async () => {
  let response = await fetch(host + `app/getHotQuestions`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include'
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 登录
 */
export let doLogin = async (strUserName, strPwd, nIsRememberLogin) => {
  let response = await fetch(loginhost + `app/doLogin`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({param: {strUserName: strUserName, strPwd: strPwd, nIsRemember: nIsRememberLogin}, header: header})
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 邮箱注册
 * @param strEmail
 * @param strPwd
 * @param nCheckCode
 * @returns {Promise.<T>}
 */
export let doRegisterEmail = async (strEmail, strPwd, strCheckCode) => {
  let response = await fetch(host + `app/doRegisterEmail`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({param: {strEmail: strEmail, strPwd: strPwd, strMailCode: strCheckCode}, header: header})
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 手机注册
 * @param strMobile
 * @param strPwd
 * @param nCheckCode
 * @returns {Promise.<T>}
 */
export let doRegisterMobile = async (strMobile, strPwd, strCheckCode) => {
  let response = await fetch(host + `app/doRegisterMobile`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({param: {strMobile: strMobile, strPwd: strPwd, strMobileCode: strCheckCode}, header: header})
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}

export let getUserById = async (strUserId) => {
  let response = await fetch(host + `app/getUserById`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({param: strUserId, header: header})
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 发送手机验证码
 * @param strMobile
 * @returns {Promise.<T>}
 */
export let doSendMobileCode = async (strMobile) => {
  let response = await fetch(host + `sms/doSendMobileCode`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({param: {strMobile: strMobile}, header: header})
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}

/**
 * 发送邮箱验证码
 * @param strEmail
 * @returns {Promise.<T>}
 */
export let doSendMailCode = async (strEmail) => {
  let response = await fetch(host + `sms/doSendMailCode`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({param: {strEmail: strEmail}, header: header})
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}
