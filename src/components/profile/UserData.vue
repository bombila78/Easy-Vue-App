<template>
  <div class="data-container">
    <transition>
      <font-awesome-icon
          v-if="!editMode"
          class="data__edit-icon"
          :icon="['fas', 'edit']"
          @click="editModeOn"
          size="lg"
      />
      <font-awesome-icon
          v-else
          class="data__edit-icon"
          :icon="['fas', 'save']"
          @click="editModeOff"
          size="lg"
      />
    </transition>
    <div class="data__wrapper">
      <div class="data__icon-container">
        <font-awesome-icon :icon="['fas', 'user']" size="lg" />
        <h4>Personal info</h4>
      </div>
      <div class="data__text-container">
        <div>
          <span class="bold">Given name: </span>
          <input
              id="givenName"
              type="text"
              :disabled="!editMode"
              :value="user.givenName"
              @input="onChange"
          />
        </div>
        <div>
          <span class="bold">Username: </span>
          <input
              id="username"
              type="text"
              :disabled="!editMode"
              :value="user.username"
              @change="onChange"/>
        </div>
      </div>
    </div>
    <div class="data__wrapper">
      <div class="data__icon-container">
        <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
        <h4>Contact info</h4>
      </div>
      <div class="data__text-container">
        <div>
          <span class="bold">Email: </span>
          <input
              id="email"
              type="email"
              :disabled="!editMode"
              :value="user.email"
              @change="onChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserData',
  props: {
    user: Object,
    default: () => ({
      givenName: '',
      username: '',
      email: ''
    }),
    editMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    editModeOn() {
      this.$emit('editModeOn')
    },
    editModeOff() {
      this.$emit('save')
    },
    onChange(e) {
      const { id: key, value } = e.target
      this.$emit('change', { key, value })
    }
  }
}
</script>

<style scoped>
.data-container {
  position: relative;
}
.data__edit-icon {
  position: absolute;
  top: 10px;
  right: 10px;
}

.data__icon-container {
  margin: 10px 0;
}

input {
  color: black;
  font-size: 16px;
  padding-left: 10px;
  min-width: 200px;
  border: 1px solid burlywood;
  border-radius: 5px;
}

.bold {
  font-weight: bold;
}
</style>
