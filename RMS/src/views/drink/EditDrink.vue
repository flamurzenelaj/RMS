<template>
  <div>
    <div class="drink">
      <div class="container">
        <h2>
          <i><b>Update Drink</b></i>
        </h2>
        <div class="drink-info">
          <div class="input">
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="currentDrink.name" />
            </div>
            <div>
              <label for="price">Price:</label>
              <input
                type="number"
                id="price"
                v-model.number="currentDrink.price"
                required
              />
            </div>
            <div>
              <label for="description">Description:</label>
              <textarea
                placeholder="Enter your description here"
                type="text"
                v-model="currentDrink.description"
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
          <button @click="updateDrink" class="button">Update</button>
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
    this.routeID = this.$route.params.drinkid;
    this.currentDrink = await apiRequest.getDrink(this.routeID);
    //or
    // await (await axios.get("http://localhost:3000/drink/"+this.$route.params.drinkid)).data;
  },
  data() {
    return {
      currentDrink: "",
      routeID: "",
      error: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.currentDrink.file = this.$refs.file.files.item(0);
    },
    async updateDrink() {
      if (this.currentDrink.name !== "" && this.currentDrink.price !== null) {
        this.error = "";
        let formData = new FormData();
        formData.append("_id", this.currentDrink._id);
        formData.append("name", this.currentDrink.name);
        formData.append("price", this.currentDrink.price);
        formData.append("description", this.currentDrink.description);
        
        if (this.currentDrink.file) {
          formData.append("file", this.currentDrink.file);
        }

        const result = await apiRequest.updateDrink(formData);

        if (!result.message) {
          this.$router.push({ name: "Drinks" });
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
.drink {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .drink-info {
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
