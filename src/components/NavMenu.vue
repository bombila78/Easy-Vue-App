<template>
  <transition name="bounce">
    <div v-if="show" class="nav-menu__container">
      <div class="nav-menu__menu-list">
        <ul>
          <li
              v-for="({link, alias}, i) in linksMeta"
              :key="i"
              @click="emitClose"
          >
            <router-link :to="link">{{alias}}</router-link>
          </li>
        </ul>
      </div>
      <div
          @click="emitClose"
          class="nav-menu__transparent-part">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    linksMeta: [
      {
        link: '/',
        alias: 'Home'
      },
      {
        link: '/sites',
        alias: 'Sites'
      },
      {
        link: '/clients',
        alias: 'Clients'
      },
      {
        link: '/profile',
        alias: 'Profile'
      }
    ]
  }),
  methods: {
    emitClose() {
      this.$emit('close-menu')
    }
  }
}
</script>

<style scoped>
.nav-menu__container {
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
}

.nav-menu__menu-list {
  background-color: white;
  color: black;
  padding-top: 20px;
  border: 1px solid black;
  flex: 0 0 180px;
}

.nav-menu__transparent-part {
  flex: 1 0 auto;
}

ul li {
  margin-bottom: 20px;
}

a {
  color: black;
  text-decoration: none;
}

.bounce-enter-active {
  animation: bounce-in .8s;
}
.bounce-leave-active {
  animation: bounce-in .8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
