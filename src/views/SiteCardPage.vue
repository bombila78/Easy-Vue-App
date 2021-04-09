<template>
  <div class="site-card__container">
    <SiteListItem
        :site="site"
        :backAvailable="backAvailable"
        @back="goBackToList"
    />
    <div class="site-card__data-container">
      <div class="data__wrapper">
        <div class="data__icon-container">
          <font-awesome-icon :icon="['fas', 'user']" size="lg" />
        </div>
        <div class="data__text-container">
          <p>{{site.mainContact}}</p>
          <p class="less-and-grey">{{site.mainContactJobTitle}}</p>
        </div>
      </div>
      <div class="data__wrapper">
        <div class="data__icon-container">
          <font-awesome-icon :icon="['fas', 'phone-alt']" size="lg" />
        </div>
        <div class="data__text-container">
          <p>{{site.mainContactPhone}}</p>
        </div>
      </div>
      <div class="data__wrapper">
        <div class="data__icon-container">
          <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
        </div>
        <div class="data__text-container">
          <p>{{site.mainContactEmail}}</p>
        </div>
      </div>
      <div class="data__wrapper">
        <div class="data__icon-container">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" size="lg" />
        </div>
        <div class="data__text-container">
          <p>{{site.mainContactAddress}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import SiteListItem from "@/components/sites/SiteListItem/SiteListItem";

export default {
  name: 'SiteCardPage',
  components: {
    SiteListItem
  },
  props: {
    backAvailable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      site: 'chosenSite'
    })
  },
  methods: {
    ...mapActions(['fetchSiteById']),
    goBackToList() {
      this.$router.back()
    }
  },
  beforeMount() {
    this.fetchSiteById({ siteId: this.$route.params.id })
  }
}
</script>

<style scoped>
.site-card__container {
  display: flex;
  flex-direction: column;
}

.site-card__data-container {
  display: flex;
  flex-direction: column;
}

.data__wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 80px;
  padding: 10px 0;
  border-bottom: 1px solid black;
}

.data__icon-container {
  margin: 0 15px;
}

.data__text-container {
  flex: 1 1 auto;
  text-align: center;
}

.less-and-grey {
  font-size: 12px;
  color: gray;
}
</style>
