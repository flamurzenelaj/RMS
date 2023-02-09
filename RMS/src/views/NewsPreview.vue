<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.newsTitle }}</h2>
      <img :src="newsCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="newsHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  computed: {
    newsTitle() {
      return this.$store.state.newsTitle;
    },
    newsHTML() {
      return this.$store.state.newsHTML;
    },
    newsCoverPhoto() {
      return this.$store.state.newsPhotoFileURL;
    },
  },
};
</script>

<style lang="scss">
.post-view {
  min-height: 100%;

  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }

  .ql-editor {
    padding: 0;
  }

  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }

  img {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>
