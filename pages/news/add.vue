<template lang="pug">
.Wrap

  //- pre {{article}}

  N-link.button.button-outline(
    to="/news/"
  ) Назад к статьям

  h2.center Добавить новость

  label.my-4 title заголовок
    .flex
      input(
        type="text"
        v-model="article.title"
      )

  label
    div
      | preview текст
      small &emsp; оптимально 400 символов / набрано: {{optimalPreviewSize}}
    textarea(
      v-model="article.preview"
    )

  b дата публикации
  .flex
    InpDate.mb-3(
      @setdate="article.published_at = $event"
    )

  client-only
    vue-simplemde(
      v-model="article.content"
    )


  button.mt-4(
    @click="POST"
  ) Добавить/Создать

  hr

</template>

<script>
import InpDate from '~/components/InpDate.vue'

export default {
  components: {
    InpDate
  },
  data() {
    return {
      article: {
        title: '',
        preview: '',
        content: '',
        published_at: ''
      }
    }
  },
  methods: {
    async POST() {
      try {
        // const { data }
        await this.$axios.post('/articles/', {
          ...this.article
        })
        // console.log(data)
      } catch ({ response }) {
        console.error(response)
      }
    }
  },
  computed: {
    optimalPreviewSize() {
      return this.article.preview.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.vue-simplemde
  position relative
  z-index 11
</style>
