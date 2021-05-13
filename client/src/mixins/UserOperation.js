export default {
  methods: {
    getToken() {
      const cookie = document.cookie
      const res = { token: null, status: 'fail' }
      if(cookie) {
        const tokenStr = cookie.match(/(?=token\=)[\w\W]+/) && cookie.match(/(?=token\=)[\w\W]+/)[0]
        if(tokenStr) {
          res.token = tokenStr.substr(6)
          res.status = 'success'
        }
      } 
      return res
    }
  }
}