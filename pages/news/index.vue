<template lang="pug">
#articles.Wrap

  .flex.x_end

    N-link.button.mb-5(
      to="/news/add"
    ) Добавить Новость

  article.article.y_start(
    v-for="article in articles"
    :key="article.id"
  )
    .article_picture
      img(
        src="https://dummyimage.com/524x270/e1e1e1/9b4dca&text=Images+!TODO+"
      )
    .article_text
      h1.title {{article.title}}
      b {{article.published_at}}
      .preview {{article.preview}}

      N-link.button.button-outline.mt-3(
        :to="`/news/${article.id}`"
      ) more »

  //- pre {{ articles }}
</template>

<script>
export default {
  async asyncData({ app }) {
    const { data } = await app.$axios.get('/articles/')
    return { articles: data }
  }
}
</script>

<style lang="stylus" scoped>
#articles
  display flex
  flex-direction column
  counter-reset section

.article_text
  margin 1em
.title
  line-height 1
  position relative
  &:before
    counter-increment section
    content: counter(section, decimal-leading-zero)

    position absolute
    top 0
    z-index -1
    font-size 3em
    font-weight 700
    color #E3E3E3

.article
  margin-bottom 3em
  display flex
  flex-wrap wrap


@media (min-width: 760px)
  .article
    flex-wrap: nowrap;
    &:nth-of-type(even)
      flex-direction row-reverse
  .article_picture,
  .article_text
    flex 1
  .article_picture
    img
      width 100%
</style>
