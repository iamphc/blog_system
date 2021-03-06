<template>
  <section class="tag-clouds">
    <div class="tag-clouds__header">
      <span class="title">随机标签云</span>
    </div> 
    <ul class="tag-cloud-list">
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
      <li class="tag-list-item"><a class="tag-link" href="#">lorem</a></li>
    </ul> 
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .tag-clouds {
    box-shadow: 1px 1px 2px rgba(0,0,0,.5);
    background-color: #fff;
    padding: 10px;
  }
  .tag-clouds__header {
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
  }
  .tag-clouds__header .title {
    text-align: left;
    font-size: 2.5rem;
  }
  .tag-cloud-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .tag-list-item {
    margin-right: 8px;
    margin-bottom: 8px;
    display: inline-block;
  }
  .tag-link {
    color: lightblue;
    font-size: 2.5rem;
  }
</style>