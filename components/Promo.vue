<template>
  <section class="container promo">
    <h1 class="h1-desktop promo__title">
      {{ data.title }}
    </h1>
    <div class="promo__right-column">
      <p class="p1-desktop promo__subtitle" v-html="data.subtitle" />
      <a
        class="promo__button-link"
        :href="data.button.link"
        target="_blank"
        rel="noopener noreferrer"
      >{{ data.button.text }}</a>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.getters['data/getPromoData']
    }
  }
}
</script>

<style>
.promo {
  display: flex;
  padding-top: 42px;
  padding-bottom: 42px;
}

.promo__title {
  max-width: 310px;
}

.promo__right-column {
  margin-left: 22px;
  max-width: 646px;
}

.promo__button-link {
  border: 1px solid var(--data-blue-color);
  box-sizing: border-box;
  border-radius: 6px;
  padding: 16px 32px;
  display: block;
  max-width: 218px;
  color: var(--data-blue-color);
  text-decoration: none;
  margin-top: 20px;
}

.promo__button-link:hover {
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.24), 0px 4px 16px rgba(0, 0, 0, 0.16);
}

@media screen and (max-width: 770px) {
  .promo {
    flex-direction: column;
    padding-bottom: 10px;
  }
  .promo__title {
    max-width: 484px;
    padding-bottom: 24px;
  }
  .promo__right-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
  }
  .promo__subtitle {
    max-width: 611px;
  }

  .promo__button-link {
    max-width: 611px;
    text-align: center;
  }
}
</style>
