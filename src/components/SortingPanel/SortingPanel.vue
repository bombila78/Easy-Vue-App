<template>
    <form @submit.prevent="onSearch">
      <div class="sorting-panel__container">
        <div class="sorting-panel__filter">
          <input
              type="text"
              placeholder="Search..."
              v-model="searchParams.filter"
          />
        </div>
        <div class="sorting-panel__sorting-field">
          <select v-model="searchParams.sorting.field">
            <option value="">Sorting field</option>
            <option value="createdAt">Created</option>
            <option value="updatedAt">Updated</option>
            <option value="title">Title</option>
          </select>
        </div>
        <div class="sorting-panel__sorting-order">
          <select v-model="searchParams.sorting.order">
            <option value="asc">Sorting order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div class="sorting-panel__button">
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
</template>

<script>
import {DEFAULT_PARAMS} from "@/constants/defaultParams";

export default {
  name: 'SortingPanel',
  data: () => ({
    searchParams: DEFAULT_PARAMS()
  }),
  methods: {
    onSearch() {
      this.$emit('search', this.searchParams)
    }
  }
}
</script>

<style scoped>
.sorting-panel__container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: gray;
  padding: 10px 0;
}

button {
  background-color: dodgerblue;
  color: white;
  margin-top: 10px;
  padding: 5px;
}
</style>
