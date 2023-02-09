<template>
  <div>
    <div class="food">
      <div class="container">
        <h2>
          <i><b>Add Food</b></i>
        </h2>
        <div class="food-info">
          <form class="input">
            <div>
              <label for="name">Name:</label>
              <input type="text" required id="name" v-model="form.name" />
            </div>
            <div>
              <label for="price">Price:</label>
              <input
                type="number"
                id="price"
                v-model.number="form.price"
                required
              />
            </div>
            <div>
              <label for="description">Description:</label>
              <textarea
                placeholder="Enter your description here"
                type="text"
                v-model="form.description"
              />
            </div>
            <label>
              Photo:
              <input
                class="inputfile"
                required
                type="file"
                ref="file"
                @change="handleFileUpload()"
              />
            </label>
          </form>
          <span style="color: red">{{ this.error }}</span>
          <button @click.prevent="createFood" class="button">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiRequest from "../../util/apiRequest";
// import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        price: null,
        description: "",
        file: "",
      },
      error: null,
    };
  },
  methods: {
    handleFileUpload() {
      this.form.file = this.$refs.file.files.item(0);
    },
    async createFood() {
      if (this.name !== "" && this.price !== null && this.file !== "") {
        this.error = "";

        let formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("price", this.form.price);
        formData.append("description", this.form.description);
        formData.append("file", this.form.file);
        const result = await apiRequest.createFood(formData);

        if (result.message) {
          this.error = result.message;
          setTimeout(() => {
            this.error = "";
          }, 7000);
        } else {
          this.$router.push({ name: "Home" });
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

        .inputfile {
          cursor: pointer;
          font-size: 1em;
          font-weight: 600;
        }

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
