<template>
  <div class="profile__avatar-container">
    <div class="avatar-wrapper">
      <img class="avatar" :src="avatarUrl" alt="avatar">
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    avatarUrl: String
  }
}
</script>

<style scoped>
.profile__avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid black;
}

.avatar-wrapper {
  width: 120px;
  height: 120px;
  border: 1px solid black;
  border-radius: 50%;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
