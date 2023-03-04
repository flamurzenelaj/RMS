<template>
  <div class="home">
    <NewsPost v-if="!user" :post="welcomeScreen" />
    <NewsPost :post="post" v-for="(post, index) in newsPostsFeed" :key="index" />

    <div class="home-category">
            <router-link @click="scrollToTop()" to="/menu" class="box">
                <img src="../assets/images/taco-img.png" alt="">
                <h3>Taco</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/menu" class="box">
                <img src="../assets/images/burrito-img.png" alt="">
                <h3>Burrito</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/menu" class="box">
                <img src="../assets/images/nachos-img.png" alt="">
                <h3>Nachos</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/menu" class="box">
                <img src="../assets/images/salad-img.png" alt="">
                <h3>Sides</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/menu" class="box">
                <img src="../assets/images/dessert-img.png" alt="">
                <h3>Dessert</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/menu" class="box">
                <img src="../assets/images/coca-img.png" alt="">
                <h3>Drink</h3>
            </router-link>
        </div>

<div class="home-about">
            <div class="image">
                <img src="../assets/images/about-img.jpg" alt="">
            </div>
            <div class="content">
                <span>why choose us?</span>
                <h3 class="title">what makes our food delicious!</h3>
                <p>Food to customers is always guaranteed of the best quality. Our dishes are made by chef Quang (a 5
                    Michelin stars chef), promising to bring explosive, delicate, impressive flavors. Our delivery
                    service is very professional, customers can enjoy the same quality at the restaurant</p>
                <router-link @click="scrollToTop()" to="/about" class="btn">read more</router-link>

                <div class="icons-container">
                    <div class="icons">
                        <img src="../assets/images/serv-1.png" alt="">
                        <h3>fast delivery</h3>
                    </div>
                    <div class="icons">
                        <img src="../assets/images/serv-2.png" alt="">
                        <h3>fresh food</h3>
                    </div>
                    <div class="icons">
                        <img src="../assets/images/serv-3.png" alt="">
                        <h3>best quality</h3>
                    </div>
                    <div class="icons">
                        <img src="../assets/images/serv-4.png" alt="">
                        <h3>24/7 support</h3>
                    </div>
                </div>
            </div>
        </div>
    


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


.home{
  padding: 2rem 9%;
}

.news-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }

  .container{
    width: 95%;
  margin: 0 auto;
  }

}

/* home category */

.home-category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    gap: 1.5rem;
    padding-bottom: 5rem;
    padding-top: 2rem;
}

.home-category .box {
    padding: 2rem;
    text-align: center;
    border-radius: .5rem;
    background: #f7f7f7;
    text-decoration: none;
}

.home-category .box:hover {
    background: #27ae60;
}

.home-category .box:hover h3 {
    color: #fff;
}

.home-category .box img {
    height: 7rem;
}

.home-category .box h3 {
    font-size: 1.8rem;
    color: #130f40;
}

.home-about {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    background: #f7f7f7;
}

.home-about .image {
    flex: 1 1 40rem;
}

.home-about .image img {
    width: 100%;
}

.home-about .content {

    flex: 1 1 40rem;
}

.home-about .content span {
    font-family: 'Satisfy', cursive;
    font-size: 2.5rem;
    color: #27ae60;
}

.home-about .content .title {
    font-size: 2rem;
    padding-top: .5rem;
    color: #130f40;
}

.home-about .content p {
    padding: 1rem 0;
    line-height: 2;
    font-size: 1.1rem;
    color: #666;
}

.home-about .content .icons-container {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-bottom: 1rem;
    padding-right: 2rem;
}

.home-about .content .icons-container .icons {
    flex: 1 1 20rem;
    border-radius: .5rem;
    background: #fff;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;
}

.home-about .content .icons-container .icons h3 {
    font-size: 1.7rem;
    color: #130f40;
}

.btn{
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
    background: #27ae60;
    border-radius: 0.5rem;
    text-decoration: none;
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
