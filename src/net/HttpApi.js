/**
 * Created by mwuyz on 2016/10/28.
 */
import 'whatwg-fetch'

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
 *
 * @returns {Promise.<Promise.<T>|*>}
 */
export let doLogin = async (strUserName, strPwd, nIsRememberLogin) => {
  let response = await fetch(host + `app/doLogin`, {
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
