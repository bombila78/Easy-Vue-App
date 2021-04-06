<template>
  <div class="header__container">
    <div class="header__navbar">
      <div class="header__menu-button-container">
        <font-awesome-icon
            @click="toggleMenu"
            :icon="['fas', 'bars']"
            size="lg"
        />
      </div>
      <h2>
        Scheduling
      </h2>
      <div class="header__avatar-container">
        <router-link to="/profile">
          <font-awesome-icon :icon="['fas', 'user']" size="lg" />
        </router-link>
      </div>
    </div>
    <div class="header__title">
      <h3>{{subTitle}}</h3>
    </div>
    <NavMenu
      :show="showMenu"
      @close-menu="closeMenu"
    />
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import {getSubtitleFormUrl} from "@/utils/commonUtils";

export default {
  name: 'Header',
  components: {
    NavMenu
  },
  data: () => ({
    showMenu: false
  }),
  computed: {
    subTitle() {
      return getSubtitleFormUrl(this.$route.path)
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      this.showMenu = false
    }
  }
}
</script>

<style scoped>
/* 0 to 768 px */
.header__container {
  display: flex;
  flex-direction: column;
  background-color: #2c3e50;
  color: white;
}

.header__navbar {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 0.3px solid black;
}

.header__title {
  display: flex;
  justify-content: center;
  padding: 5px 0px;
}

.header__menu-button-container, .header__avatar-container {
  padding: 8px;
}

a {
  color: white;
}
</style>
