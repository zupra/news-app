<template lang="pug">
div
  .header.flex.x_sb.y_center
    N-link.bold(
      to="/news/"
    ) Новости

    .button.button-clear(
      @click="logout"
    ) logout
  .content
    <nuxt />
</template>

<script>
export default {
  middleware: ['auth'],
  methods: {
    async logout() {
      await this.$auth.logout()
      // this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus">
.header
  padding 0 1em
  position fixed
  z-index 10
  top 0
  left 0
  width 100%
  height 3em
  background: #f4f5f6;
  border-bottom: .1rem solid #d1d1d1;
  text-align center
.content
  padding-top 4em
</style>
