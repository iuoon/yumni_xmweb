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
    mode: 'cors'
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
    mode: 'cors'
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
export let doLogin = async (strUserName, strPwd) => {
  let response = await fetch(host + `app/doLogin`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({strUserName: strUserName, strPwd: strPwd, header: header})
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}
