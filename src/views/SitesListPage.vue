<template>
  <div class="site-list__container">
      <SiteListItem
          v-for="(site, i) in allSites"
          :site="site"
          :key="i"
          :forwardAvailable="true"
          @forward="goToSiteCard"
      />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import SiteListItem from "@/components/sites/SiteListItem/SiteListItem";

export default {
  name: 'SitesListPage',
  components: {
    SiteListItem
  },
  computed: {
    ...mapGetters(['allSites'])
  },
  methods: {
    ...mapActions(['fetchSites']),
    goToSiteCard(siteId) {
      this.$router.push(`sites/${siteId}?ba=true`)
    }
  },
  mounted() {
    this.fetchSites()
  }

}
</script>

<style scoped>
.site-list__container {
  display: flex;
  flex-direction: column;
}
</style>
