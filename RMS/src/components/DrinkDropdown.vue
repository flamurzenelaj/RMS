<template>
  <div class="nav">
    <div class="menu-item" @click="isOpen = !isOpen">
      <a>
        {{ title }}
      </a>
      <transition name="fade">
        <div class="sub-menu" v-if="isOpen">
          <div class="options">
            <div v-if="admin" class="option">
              <router-link class="option" :to="{ name: 'AddDrink' }">
                <p>AddDrink</p>
              </router-link>
            </div>
            <div class="option">
              <router-link class="option" :to="{ name: 'Drinks' }">
                <p>Drinks</p>
              </router-link>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      isOpen: false,
    };
  },
  computed:{
    admin() {
      return this.$store.state.profileAdmin;
    },
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: left;
}
.sub-menu {
  position: absolute;
  top: 50px;
  right: 75px;
  width: 150px;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 16px 16px 160px 16px;

  .options {
    padding: 15px;
    .option {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: left;
      margin-bottom: 12px;

      .icon {
        width: 18px;
        height: auto;
      }
      p {
        font-size: 14px;
        margin-left: 12px;
      }

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.sub-menu {
  cursor: pointer;
}
</style>
