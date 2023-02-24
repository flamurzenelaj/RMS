<template>
  <div class="msg">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />

    <div class="container">
      <h2>
        <i><b>let a Message !</b></i>
      </h2>
      <div class="msg-info">
        <div class="input">
          <textarea
            placeholder="Enter your message here"
            required
            type="text"
            v-model="form.msg"
          />
        </div>
        <span style="color: red">{{ this.error }}</span>
        <button @click="createMsg" class="button">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "../components/Modal";

export default {
  name: "Create",
  created() {
    () => {
      this.user();
    };
  },
  components: { Modal },
  data() {
    return {
      form: {
        email: this.$store.state.profileEmail,
        name:
          this.$store.state.profileFirstName +
          " " +
          this.$store.state.profileLastName,
        msg: "",
      },
      modalMessage: "Message sent!",
      modalActive: null,
      error: null,
    };
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("updateUserSettings");
      this.modalActive = !this.modalActive;
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.$router.push({ name: "Home" });
    },
    async createMsg() {
      if (this.form.msg !== "") {
        this.error = "";
        await axios.post("http://localhost:3000/users/msg", {
          ...this.form,
        });
        this.modalActive = !this.modalActive;
      } else {
        this.error = "Please fill out the field!";
        return;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.msg {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }

    .msg-info {
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
