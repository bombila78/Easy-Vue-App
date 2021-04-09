<template>
  <div class="site-list-item__container">
    <div
        class="site-list-item__arrow-container"
        v-if="backAvailable"
    >
      <font-awesome-icon
          @click="$emit('back')"
          :icon="['fas', 'chevron-left']"
          size="lg"
      />
    </div>
    <div class="site-list-item__image-container">
      <img :src="site.mainImage" alt="Site image">
    </div>
    <div class="site-list-item__data-container">
      <h4>{{site.title}}</h4>
      <div class="site-list-item__text"><span class="bold">Address: </span>{{site.fullAddress}}</div>
      <div class="site-list-item__text"><span class="bold">Contact: </span>{{site.mainContact}}</div>
    </div>
    <div
        class="site-list-item__arrow-container"
        v-if="forwardAvailable"
    >
      <font-awesome-icon
          @click="$emit('forward', site.id)"
          :icon="['fas', 'chevron-right']"
          size="lg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteListItem',
  props: {
    site: {
      type: Object,
      default: () => ({
        title: String,
        fullAddress: String,
        mainContact: String,
        mainImage: String,
      })
    },
    backAvailable: {
      type: Boolean,
      default: false
    },
    forwardAvailable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.site-list-item__container {
  display: flex;
  padding: 5px 0;
  border-bottom: 1px solid black;
  cursor: pointer;
}

.site-list-item__arrow-container {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5px;
}

.site-list-item__image-container {
  align-self: center;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.site-list-item__data-container {
  flex: 1 1 auto;
}

.site-list-item__text {
  text-align: left;
  font-size: 12px;
}

.bold {
  font-weight: bold;
}

img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
</style>
