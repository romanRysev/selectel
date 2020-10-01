<template>
  <section class="container promo">
    <h1 class="h1-desktop promo__title">
      {{ data.title }}
    </h1>
    <div class="promo__right-column">
      <p class="p1-desktop promo__subtitle" v-html="data.subtitle" />
      <div class="promo__button-container">
        <vButton :link="data.button.link" :text="data.button.text" />
      </div>
    </div>
  </section>
</template>

<script>
import vButton from '@/components/UI/vButton'
export default {
  components: {
    vButton
  },
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
.promo__subtitle {
    margin-bottom: 20px;
  }

.promo__right-column {
  margin-left: 22px;
  max-width: 646px;
}

.promo__button-container {
  max-width: 218px;
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
    padding-left: 35px;
  }
  .promo__subtitle {
    max-width: 611px;
  }

  .promo__button-container {
  max-width: 611px;
}
}
</style>
