<template>
  <div class="articles-wrapper">
    <div class="placeholder">
      <span class="articles-type-title">
        {{articleType}}
        <router-link class="article-create" to="/article/create">写文章</router-link>
      </span>
    </div>
    <div class="bottom-line"></div>
    <ul class="articles-list">
      <li class="article-item">
        <h2 class="article-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="article-upload-time">2021-03-03</span>
        </div>
        <div class="article-abstract">
          article-contentLorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea 
          <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li> 
      <li class="article-item">
        <h2 class="article-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="article-upload-time">2021-03-03</span>
        </div>
        <div class="article-abstract">
          article-contentLorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li> 
      <li class="article-item">
        <h2 class="article-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="article-upload-time">2021-03-03</span>
        </div>
        <div class="article-abstract">
          article-contentLorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li>
      <li class="article-item">
        <h2 class="article-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="article-upload-time">2021-03-03</span>
        </div>
        <div class="article-abstract">
          article-contentLorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li>
      <li class="article-item">
        <h2 class="article-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="article-upload-time">2021-03-03</span>
        </div>
        <div class="article-abstract">
          article-contentLorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li>
      <li class="article-item">
        <h2 class="article-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="article-upload-time">2021-03-03</span>
        </div>
        <div class="article-abstract">
          article-contentLorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li> 
    </ul>
  </div>
</template>

<script> 
export default {
  props: {
    articleType: {
      type: String,
      default: "默认分类"
    }
  }
}
</script>

<style scoped> 
</style>