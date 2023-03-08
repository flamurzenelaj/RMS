<template>
  <div class="home">
    <NewsPost v-if="!user" :post="welcomeScreen" />
    <NewsPost :post="post" v-for="(post, index) in newsPostsFeed" :key="index" />

    <div class="home-category">
            <router-link @click="scrollToTop()" to="/foods" class="box">
                <img src="../assets/images/taco-img.png" alt="">
                <h3>Taco</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/foods" class="box">
                <img src="../assets/images/burrito-img.png" alt="">
                <h3>Burrito</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/foods" class="box">
                <img src="../assets/images/nachos-img.png" alt="">
                <h3>Nachos</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/foods" class="box">
                <img src="../assets/images/salad-img.png" alt="">
                <h3>Sides</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/foods" class="box">
                <img src="../assets/images/dessert-img.png" alt="">
                <h3>Dessert</h3>
            </router-link>

            <router-link @click="scrollToTop()" to="/drinks" class="box">
                <img src="../assets/images/coca-img.png" alt="">
                <h3>Drink</h3>
            </router-link>
        </div>

        <div class="home-banner">
            <div class="grid-banner row">
                <div class="grid col-md-4">
                    <img src="../assets/images/dis-1.jpg" alt="">
                    <div class="content">
                        <span>special offer</span>
                        <h3>upto 50% off</h3>
                        <router-link @click="scrollToTop()" to="/menu" class="btn">order now</router-link>
                    </div>
                </div>

                <div class="grid col-md-4">
                    <img src="../assets/images/dis-2.png" alt="">
                    <div class="content center">
                        <span>special offer</span>
                        <h3>upto 25% extra</h3>
                        <router-link @click="scrollToTop()" to="/menu" class="btn">order now</router-link>
                    </div>
                </div>

                <div class="grid col-md-4">
                    <img src="../assets/images/dis-3.jpg" alt="">
                    <div class="content">
                        <span>limited offer</span>
                        <h3>100% cashback</h3>
                        <router-link @click="scrollToTop()" to="/menu" class="btn">order now</router-link>
                    </div>
                </div>

            </div>

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



<style lang="scss" scoped>

* {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: capitalize;
    transition: .2s linear;
}
.home{
  font-size: 90%;
}

.home-about,
.home-banner,
.home-category {
    padding: 2rem 5% !important;
}


/* home category */

.home-category {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 2rem;
    padding: 3rem;
}


.home-category .box {
    padding: 2rem ;
    text-align: center;
    border-radius: .5rem;
    background: #f7f7f7;
    text-decoration: none;
    transition: all .3s ease-in-out ;
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
    font-size: 1.2rem;
    color: #130f40;
}

/* home banner */

.grid-banner row{
  display: flex;
}

.home-banner .row-banner {
    background: url(../assets/images/row-banner.png) no-repeat;
    height: 45rem;
    background-size: cover;
    background-position: center;
    position: relative;
}

.row{
  display:flex;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 1200px) {
      flex-wrap: wrap;
      justify-content: center;
    }
}


.home-banner {
  padding: 2rem;
  padding-top: 0;

  .grid-banner {
    .grid {
      position: relative;
      img {
        display: block;
        width: 100%;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        font-size: 0.4rem;
        text-transform: capitalize;
        span {
          font-size: 2.3rem !important;
          color: #fff;
        }
        h3 {
          font-size: 2rem !important;
          color: #fff;
          margin: 20px 0;
        }
        btn {
          font-size: 15px;
          color: #fff;
          background-color: #000;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
}


.home-banner .row-banner .content {
    position: absolute;
    top: 50%;
    left: 7%;
    transform: translateY(-50%);
}

.home-banner .row-banner .content span {
    font-family: 'Satisfy', cursive;
    font-size: 2rem;
    color: #27ae60;
    color: #130f40;
}

.home-banner .row-banner .content h3 {
    font-size: 4rem;
    color: red;
    text-transform: uppercase;
}

.home-banner .row-banner .content p {
    font-size: 2rem;
    padding-bottom: 1rem;
}


.home-banner .grid-banner .grid {
    border-radius: 1rem;
    overflow: hidden;
    height: 35rem;
}

.home-banner .grid-banner .grid:hover img {
    transform: scale(1.2);
}

.home-banner .grid-banner .grid img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform .5s ease-in-out;

}

.home-banner .grid-banner .grid .content {
    position: absolute;
    top: 2rem;
    padding: 0 2rem;
}

.home-banner .grid-banner .grid .content.center {
    text-align: center;
    width: 100%;
}

.home-banner .grid-banner .grid .content.center span {
    color: #666;
}

.home-banner .grid-banner .grid .content.center h3 {
    color: #130f40;
}

.home-banner .grid-banner .grid .content span {
    font-size: 2.5rem;
    color: #fff;
}

.home-banner .grid-banner .grid .content h3 {
    font-size: 3rem;
    color: #fff;
    padding-top: .5rem;
}

.home-about {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    background: #f7f7f7;
    padding: 3rem;
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
    font-size: 2rem;
    color: #23395d;
    text-transform: capitalize;
}

.home-about .content .title {
    font-size: 1.5rem;
    padding-top: .5rem;
    color: #130f40;
    text-transform: capitalize;

}

.home-about .content p {
    padding: 1rem 0;
    line-height: 2;
    font-size: 1rem;
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
    flex: 1 1 15rem;
    border-radius: .5rem;
    background: #fff;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;
}

.home-about .content .icons-container .icons h3 {
    font-size: 1.2rem;
    color: #130f40;
}

.btn{
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
    background: #303030;
    border-radius: 0.5rem;
    text-decoration: none;
    text-transform: capitalize;
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