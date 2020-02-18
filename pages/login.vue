<template lang="pug">
.h_100vh.flex
  .intro
    .center
      h1 Welcome
      p Login for Use the navigation above.
    div
      label email
        input(type='text', placeholder='identifier', v-model='User.identifier', required='')
      label password
        input(type='password', placeholder='password', v-model='User.password', required='')

      .center
        button.mt-4(@click='login') login
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      User: {
        identifier: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: { ...this.User }
        })
        // this.$router.push('/')
      } catch (err) {
        console.error(err.response)
      }
    }
  }
}
</script>
