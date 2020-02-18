<template lang="pug">
.Wrap

  pre {{article}}

  N-link.button.button-outline(
    to="/news/"
  ) Назад к статьям

  h2.center Добавить новость

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

  InpDate(
    @setdate="article.published_at = $event"
  )

  //- no-ssr
  //-   Editor(
  //-     v-model="content"
  //-   )

  hr
  button(
    @click="POST"
  ) Добавить


</template>

<script>
// import 'v-markdown-editor/dist/index.css'
// import Editor from 'v-markdown-editor'

import InpDate from '~/components/InpDate.vue'

export default {
  components: {
    InpDate
    // Editor
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
