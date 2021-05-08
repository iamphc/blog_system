import axios from 'axios'

export default {
  // TODO:写文章
  createArticle(articleRaw) {
    return axios.post("/api/blog/article/create", {
      ...articleRaw
    })
  },
  // TODO:获取文章列表
  getArticlesList() {
    return axios.get("/api/blog/articles")
  },
  // TODO:浏览文章
  getArticle(id) {
    return axios.get(`/api/blog/article/${id}`)
  },
  // TODO:获取文章所属的所有标签
  getArticleAllTags(id) {
    return axios.get(`/api/blog/article/${id}/tags`)
  }
}