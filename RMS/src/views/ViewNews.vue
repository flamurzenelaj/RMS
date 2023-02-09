<template>
  <div class="post-view" v-if="currentNews">
    <div class="container quillWrapper">
      <h2>{{ this.currentNews[0].newsTitle }}</h2>
      <h4>Posted on: {{ new Date(this.currentNews[0].newsDate).toLocaleString("en-us", { dateStyle: "long" }) }}</h4>
      <img :src="this.currentNews[0].newsCoverPhoto" alt="" style="width:200px"  height="200" />
      <div class="post-content ql-editor" v-html="this.currentNews[0].newsHTML" style="width:700px" height="700"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewNews",
  data() {
    return {
      currentNews: null,
    };
  },
  async mounted() {
    this.currentNews = await this.$store.state.newsPosts.filter((post) => {
      return post.newsID === this.$route.params.newsid;
    });
  },
};
</script>

<style lang="scss">
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}
</style>
