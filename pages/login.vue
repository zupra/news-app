<template lang="pug">
.h_100vh.flex
  .HERE_tabs
    .tabLabels
      .tabLabels_Item(
        v-for="(tab,idx) in ['Войти', 'Регистрация']",
        :class="{curr:idx==TAB}",
        @click="TAB = idx"
      ) {{tab}}

    transition-group(
      class="TAB_content" name="tab"
    )
      .TAB(:key="0" v-show="TAB == 0")

        .center
          h2 Welcome
        div
          label email
            input(type='text', placeholder='email', v-model='User.identifier', required='')
          label password
            input(type='password', placeholder='password', v-model='User.password', required='')

        .center
          button.mt-4(@click='login') login



      .TAB(:key="1" v-show="TAB == 1")
        hr
        .center
          h3 УПС)
          p новая регистрация пока невозможна



</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      TAB: 0,
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

<style lang="stylus">
$color= #9b4dca

.HERE_tabs
  margin auto
  width 300px
  height 330px
//================
.tab-enter-active
  transition all .4s ease
.tab-enter
  opacity 0
  transform translateY(10px)
.tab-enter-to
  opacity 1
.tab-leave-active
  display none


.tabLabels
  display flex
  justify-content space-between
  cursor pointer
  margin 1em 0
  &_Item
    flex 1
    border-bottom 2px solid #CCC
    text-align center
    padding-bottom .5em
    position relative
    &.curr
      &:before
        content ''
        position absolute
        width 100%
        left 0
        bottom -3px
        border-bottom 4px solid $color
</style>
