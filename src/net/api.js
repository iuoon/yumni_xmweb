/**
 * Created by mwuyz on 2016/10/28.
 */
import 'whatwg-fetch'

const host = 'http://www.iuoon.com:9002/YNServer/'
/*
 *获取资讯列表
 */
export let getArticleList = async (nPageStart, tag) => {
  let response = await fetch(host + `app/getArticleList?nPageStart=${nPageStart}&nPageSize=50`, {
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
export let getNewsDetail = async (id) => {
  let response = await fetch(host + `news_detail?id=${id}`, {
    method: 'GET',
    mode: 'cors'
  }).catch((error) => {
    console.log(error)
  })
  return response.json().catch((error) => {
    console.log(error)
  })
}
