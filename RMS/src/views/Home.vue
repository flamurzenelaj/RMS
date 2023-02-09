<template>
  <div class="home">
    <NewsPost v-if="!user" :post="welcomeScreen" />
    <NewsPost :post="post" v-for="(post, index) in newsPostsFeed" :key="index" />
    <div class="news-card-wrap">
      <div class="container">
        <h3>View More Recent News</h3>
        <div class="news-cards">
          <NewsCard :post="post" v-for="(post, index) in newsPostsCards" :key="index" />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#"> Register for RMS <Arrow class="arrow arrow-light" /> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NewsPost from "../components/NewsPost";
import NewsCard from "../components/NewsCard";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { NewsPost, NewsCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        newsPost:
          "Weekly news articles with all foods. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "welcomeScreen",
      },
    };
  },
  computed: {
    newsPostsFeed() {
      return this.$store.getters.newsPostsFeed;
    },
    newsPostsCards() {
      return this.$store.getters.newsPostsCards;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.news-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
