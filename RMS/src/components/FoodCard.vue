<template>
  <div class="news-card">
    <div v-show="profileAdmin" class="icons">
      <div @click="editFood" class="icon">
        <Edit class="edit" />
      </div>
      <div @click="deletePost" class="icon">
        <Delete class="delete" />
      </div>
    </div>
    <img
      :src="require(`../../../express/api/public/foodImages/${food.file}`)"
      alt="Path error or missing image"
      class="card-img-top"
    />
    <div class="info">
      <h4><b>Name:</b> {{ food.name }}</h4>
      <h5>
        Price:
        {{ food.price }}€
      </h5>
      <h6>
        <b>Description:</b> 
        {{ food.description }}
      </h6>
    </div>
  </div>
</template>

<script>
import Edit from "../assets/Icons/edit-regular.svg";
import Delete from "../assets/Icons/trash-regular.svg";
import apiRequest from "../util/apiRequest";



export default {
  props: {
    food: Object,
  },
  components: {
    Edit,
    Delete,
  },
  data() {
    return {
      img: "rms.jpg",
    };
  },
  computed: {
    profileAdmin() {
      return this.$store.state.profileAdmin;
    },
  },
  methods: {
    async deletePost() {
      await apiRequest.deleteFood(this.food._id);
      window.location.reload();
    },
    editFood() {
      this.$router.push({
        name: "EditFood",
        params: { foodid: this.food._id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.news-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;

  &:hover {
    transform: rotateZ(-1.5deg) scale(1.03);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;

      &:hover {
        background-color: #303030;

        .edit,
        .delete {
          path {
            fill: #fff;
          }
        }
      }

      &:nth-child(1) {
        margin-right: 8px;
      }

      .edit,
      .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }

  img {
    border: 1px solid #ddd;
    padding: 5px;
    opacity: 0.7;
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    min-height: 200px;
    object-fit: cover;
    &:hover {
      opacity: 1;
      
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;

    h4 {
      padding-bottom: 8px;
      font-size: 22px;
      font-weight: 200;
      text-align: center;
    }
    h5 {
      padding-bottom: 8px;
      font-size: 18px;
      font-weight: 900;
      text-align: center;
    }

    h6 {
      font-weight: 500;
      font-size: 14px;
      padding-top: 26px;
    }
  }
}
</style>
