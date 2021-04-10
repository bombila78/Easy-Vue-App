<template>
  <div class="page__container">
    <SortingPanel
      @search="onSearch"
    />
    <div class="site-list__container">
      <SiteListItem
          v-for="(site, i) in allSites"
          :site="site"
          :key="i"
          :forwardAvailable="true"
          @forward="goToSiteCard"
      />
    </div>
    <button @click="onLoadMore" class="site-list__button">Load more</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import SiteListItem from "@/components/sites/SiteListItem/SiteListItem";
import SortingPanel from "@/components/SortingPanel/SortingPanel";

export default {
  name: 'SitesListPage',
  components: {
    SortingPanel,
    SiteListItem
  },
  computed: {
    ...mapGetters(['allSites'])
  },
  methods: {
    ...mapActions(['fetchSites', 'loadMoreSites']),
    goToSiteCard(siteId) {
      this.$router.push(`sites/${siteId}?ba=true`)
    },
    onSearch(searchParams) {
      this.fetchSites(searchParams)
    },
    onLoadMore() {
      this.loadMoreSites()
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

.site-list__button {
  background-color: dodgerblue;
  color: white;
  margin: 10px 0;
  padding: 5px;
}
</style>
