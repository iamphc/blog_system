import axios from 'axios'

export default {
  // TODO:写文章
  createArticle(articleRaw) {
    return axios.post("/blog/article/create", {
      ...articleRaw
    })
  },
  // TODO:获取文章列表
  getArticlesList() {
    return axios.get("/blog/articles")
  },
  // TODO:浏览文章
  getArticle(id) {
    return axios.get(`/blog/article/${id}`)
  }
}