<template>
  <div class="articles-wrapper">
    <div class="placeholder">
      <span class="articles-type-title">{{articleType}}</span>
    </div>
    <div class="bottom-line"></div>
    <ul class="articles-list">
      <li class="article-item">
        <h2 class="artile-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="time"></span>
          <span>2021-03-03</span>
        </div>
        <div class="artile-abstract">
          <span class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea.</span> 
          <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li> 
      <li class="article-item">
        <h2 class="artile-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="time"></span>
          <span>2021-03-03</span>
        </div>
        <div class="artile-abstract">
          <span class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea.</span> 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li> 
      <li class="article-item">
        <h2 class="artile-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="time"></span>
          <span>2021-03-03</span>
        </div>
        <div class="artile-abstract">
          <span class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea.</span> 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li>
      <li class="article-item">
        <h2 class="artile-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="time"></span>
          <span>2021-03-03</span>
        </div>
        <div class="artile-abstract">
          <span class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea.</span> 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li>
      <li class="article-item">
        <h2 class="artile-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="time"></span>
          <span>2021-03-03</span>
        </div>
        <div class="artile-abstract">
          <span class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea.</span> 
         <router-link class="get-full-article" to="/article/view">阅读全文>></router-link>
        </div>
      </li>
      <li class="article-item">
        <h2 class="artile-title">文章标题</h2>
        <div class="article-update-detailes">
          <span class="time"></span>
          <span>2021-03-03</span>
        </div>
        <div class="artile-abstract">
          <span class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo similique quos tempore dolores, nemo quaerat rem fugit laborum neque dicta reprehenderit laboriosam, porro commodi provident iusto aliquam numquam soluta.Sed, dolorum! Magnam est non provident vel itaque eaque similique nisi sequi sapiente commodi? Nemo eaque eos possimus exercitationem at nobis dignissimos, praesentium ducimus accusantium aperiam ratione rerum sit ea.</span> 
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
  .articles-type-title {
    position: fixed;
    top: 78px;
    font-size: 3rem;
    display: block;
    padding: 10px;
    width: calc(35% - 25px);
    background-color: #fff;
    text-align: left;
    box-shadow: 1px 1px 2px rgba(0,0,0,.5) , -1px -1px 2px rgba(100,100,100,.5);
  }
  .placeholder { 
    display: block;
    width: 100%;
    height: 50px;
  }
  .bottom-line {
    height: 0.5px;
    background-color: #000;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .article-item {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
  } 
  .get-full-article {
    display: block;
    margin-top: 10px; 
    text-align: right;
  }
</style>