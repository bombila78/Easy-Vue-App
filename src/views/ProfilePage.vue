<template>
  <div class="profile__container">
    <UserAvatar :avatarUrl="avatarUrl" />
    <UserData
        :user="user"
        :editMode="editMode"
        @editModeOn="editModeOn"
        @change="onChange"
        @save="saveUser"
    />
    <div
        v-if="error"
        class="error-message"
    >
      {{error}}
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import UserAvatar from "@/components/profile/UserAvatar";
import UserData from "@/components/profile/UserData";

import ERRORS from "@/components/profile/errors";

export default {
  name: 'ProfilePage',
  components: {UserData, UserAvatar},
  data: () => ({
    user: {
      givenName: '',
      username: '',
      email: ''
    },
    editMode: false,
    error: null,
  }),
  computed: {
    ...mapGetters({
      storeUser: 'user'
    }),
    avatarUrl() {
      if (!this.user) {
        return
      }
      return this.user.avatar
    }
  },
  methods: {
    ...mapActions(['fetchUser', 'updateUser']),
    onChange({ key, value }) {
      this.user[key] = value
      this.clearError()
    },
    async saveUser() {
      for (const key of Object.keys(this.user)) {
        if (!this.user[key].trim()) {
          this.error = ERRORS.ALL_FIELDS_ARE_REQUIRED
          return
        }
      }
      try {
        await this.updateUser(this.user)
        this.updateDataUser()
        this.editMode = false
      } catch (e) {
        this.error = ERRORS.SOMETHING_WENT_WRONG
      }
    },
    editModeOn() {
      this.editMode = true
    },
    clearError() {
      this.error = null
    },
    updateDataUser() {
      this.user = Object.assign({}, this.storeUser)
    }
  },
  beforeMount() {
    this.fetchUser()
    .then(() => this.updateDataUser())
  }
}
</script>

<style scoped>
.profile__container {
  display: flex;
  flex-direction: column;
}

.error-message {
  margin-top: 20px;
  color: red;
  font-weight: bold;
  font-size: 18px;
}
</style>
