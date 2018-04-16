/**
 * Created by mwuyz on 2016/10/28.
 */
import 'whatwg-fetch'

const host = 'http://www.iuoon.com:9002/YNServer/'
// const host = 'http://localhost:8080/'
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
