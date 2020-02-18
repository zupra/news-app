<template lang="pug">
.Wrap

  .flex.x_sb.y_center
    N-link.button.button-outline(
      to="/news"
    ) « Назад

    N-link.button(
      :to="`/news/${article.id}/edit`"
    ) Редактировать »
  br
  img(
    src="https://dummyimage.com/1077x250/e1e1e1/999999&text=Image+!TODO+"
  )
  h1 {{article.title}}
  b {{article.published_at}}
  div
    i {{article.preview}}
  hr
  VueMarkdownIt(
    :source="article.content"
  )


  //- pre {{$data}}
</template>

<script>
import VueMarkdownIt from 'vue-markdown-it'
export default {
  /*
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  },
  */
  components: {
    VueMarkdownIt
  },
  async asyncData({ app, params }) {
    const data = await app.$axios.$get(`/articles/${params.id}`)
    return { article: data }
  }
}
</script>

<style lang="stylus"></style>
