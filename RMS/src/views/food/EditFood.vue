<template>
  <div>
    <div class="food">
      <div class="container">
        <h2>
          <i><b>Update Food</b></i>
        </h2>
        <div class="food-info">
          <div class="input">
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="currentFood.name" />
            </div>
            <div>
              <label for="price">Price:</label>
              <input
                type="number"
                id="price"
                v-model.number="currentFood.price"
                required
              />
            </div>
            <div>
              <label for="description">Description:</label>
              <textarea
                placeholder="Enter your description here"
                type="text"
                v-model="currentFood.description"
              />
            </div>
            <label
              >File
              <input
                required
                type="file"
                ref="file"
                @change="handleFileUpload()"
              />
            </label>
          </div>
          <span style="color: red">{{ this.error }}</span>
          <button @click="updateFood" class="button">Update</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiRequest from "../../util/apiRequest";
// import axios from "axios";

export default {
  async mounted() {
    this.routeID = this.$route.params.foodid;
    this.currentFood = await apiRequest.getFood(this.routeID);
    //or
    // await (await axios.get("http://localhost:3000/food/"+this.$route.params.foodid)).data;
  },
  data() {
    return {
      currentFood: "",
      routeID: "",
      error: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.currentFood.file = this.$refs.file.files.item(0);
    },
    async updateFood() {
      if (this.currentFood.name !== "" && this.currentFood.price !== null) {
        this.error = "";
        let formData = new FormData();
        formData.append("_id", this.currentFood._id);
        formData.append("name", this.currentFood.name);
        formData.append("price", this.currentFood.price);
        formData.append("description", this.currentFood.description);
        
        if (this.currentFood.file) {
          formData.append("file", this.currentFood.file);
        }

        const result = await apiRequest.updateFood(formData);

        if (!result.message) {
          this.$router.push({ name: "Foods" });
        } else {
          this.error = result.message;
          setTimeout(() => {
            this.error = "";
          }, 7000);
        }
      } else {
        this.error = "Please fill out all the fields!";
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.food {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .food-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      span {
        font-size: 14px;
      }

      .input {
        justify-content: center;
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 10px;
          height: 50px;
          @media (min-width: 900px) {
          }

          &:focus {
            outline: none;
          }
        }
        textarea {
          width: 100%;
          max-width: 530px;
          height: 90px;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 150px;
          @media (min-width: 900px) {
          }

          &:focus {
            outline: none;
          }
        }
      }

      button {
        align-self: center;
      }
    }
  }
}
</style>
