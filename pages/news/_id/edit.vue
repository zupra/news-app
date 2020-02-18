<template lang="pug">
.Wrap
  N-link.button.button-outline(
    :to="`/news/${$route.params.id}`"
  ) « Назад к статье

  
  label.my-4 title заголовок
    .flex
      input(
        type="text"
        v-model="article.title" placeholder="title"
      )

  label preview текст
    div
      small оптимально 400 символов / набрано: {{optimalPreviewSize}}
    textarea(
      v-model="article.preview" placeholder="preview"
    )

  button(
    @click="PUT"
  ) Редактировать

  pre {{$data}}
</template>

<script>
export default {
  /*
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  */
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

<style></style>
