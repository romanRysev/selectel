<template>
  <section class="products">
    <div class="container products__container">
      <h2 class="products__title h2-desktop" v-html="data.title" />
      <p class="products__subtitle p2-desktop" v-html="data.subtitle" />
      <div class="products__items-container">
        <a
          v-for="item in data.items"
          :key="item.id"
          class="products-item"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 class="products-item__title h3-desktop" v-html="item.title" />
          <div
            class="products-item__description p2-desktop"
            v-html="item.description"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.getters['data/getProductsData']
    }
  }
}
</script>

<style>
.products {
  background: rgba(217, 217, 214, 0.3);
}

.products__container {
  max-width: 952px;
  text-align: center;
  padding-top: 48px;
  padding-bottom: 80px;
}

.products__title {
  padding-bottom: 16px;
}

.products__subtitle {
  padding-bottom: 32px;
}

.products__items-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 16px;
  text-align: left;
}

.products-item {
  padding: 24px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background: #fff;
  max-width: 404px;
  min-height: 192px;
  text-decoration: none;
  color: var(--data-blue-color);
}

.products-item:hover {
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.24), 0px 4px 16px rgba(0, 0, 0, 0.16);
}

.products-item__title {
  padding-bottom: 12px;
}

</style>
