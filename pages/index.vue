<template lang="pug">
.h_100vh.flex
  .intro.INFO
    h3 Тестовое приложение "Редактор новостей"
    div
      p Бесплатный heroku Иногда может "уснуть" секунд 10 - и бывает надо подождать сервер.
      p Старайтесь плиз не редактировать а создавать новые новости. Те что есть мне нужны такими.
      p Не сделано: управление загрузкой картинок и удобный редактор текста. Скоро)
    center
      N-link.button.button-outline(
        to="/news/"
      ) Новости
</template>

<style lang="stylus" scoped>
.INFO
  max-width 500px
</style>
