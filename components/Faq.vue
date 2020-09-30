<template>
  <section class="faq">
    <h2 class="faq__title h2-desktop">
      {{ data.title }}
    </h2>
    <div class="faq__item-container">
      <div v-for="item in data.items" :key="item.id" class="faq__item">
        <div class="faq__item-header-container">
          <div class="faq__item-question h3-desktop" v-html="item.question" />
          <img class="faq__item-open-icon" src="plus.svg" alt="Развернуть">
          <img class="faq__item-close-icon" src="minus.svg" alt="Свернуть">
        </div>
        <div class="faq__item-answer p2-desktop" v-html="item.answer" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.getters['data/getFaqData']
    }
  }
}
</script>

<style>
.faq {
  max-width: 740px;
  padding-left: 46px;
  padding-top: 96px;
  box-sizing: content-box;
  padding-bottom: 72px;
  margin: auto;
}

.faq__title {
  margin-bottom: 32px;
}

.faq__item {
  padding: 23px 0 28px;
  border-top: 1px solid #d9d9d6;
}

.faq__item-header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.faq__item-open-icon {
  display: none;
}

.faq__item-answer {
  margin-left: 250px;
}

@media screen and (max-width: 770px) {
  .faq {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .faq__item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .faq__item {
    max-width: 355px;
    margin-left: 75px;
  }
  .faq__item-answer {
    margin-left: 60px;
  }
}

@media screen and (max-width: 640px) {
  .faq__item {
    margin-left: 25px;
  }
}
</style>
