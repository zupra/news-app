<template lang="pug">
.Wrap
  N-link.button.button-outline(
    :to="`/news/${$route.params.id}`"
  ) « Назад к статье

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
      :propSetDateFrom="new Date(article.published_at)"
      @setdate="article.published_at = $event"
    )

  client-only
    // TODO: редактор текста типа https://github.com/scrumpy/tiptap
    div
      i !TODO пока что markdown-редактор, синтаксис: 
      a.bold(
        target="_blank"
        href="https://markdown-it.github.io/"
      ) Пример 1
      | 
      a.bold(
        target="_blank"
        href="https://commonmark.org/help/"
      ) Пример 2
    vue-simplemde(
      v-model="article.content"
    )

  button(
    @click="PUT"
  ) Редактировать

  hr
  //- pre {{$data}}
</template>

<script>
import InpDate from '~/components/InpDate.vue'

export default {
  /*
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  */
  components: {
    InpDate
  },
  async asyncData({ app, params }) {
    const data = await app.$axios.$get(`/articles/${params.id}`)
    return { article: data }
  },
  methods: {
    async PUT() {
      try {
        const { data } = await this.$axios.put(
          `/articles/${this.$route.params.id}`,
          {
            ...this.article
          }
        )
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
