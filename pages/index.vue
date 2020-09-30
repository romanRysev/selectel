<template>
  <div class="content">
    <Header />
    <Slider />
    <Promo />
    <Advantages />
    <Products />
    <Faq />
    <Footer />
  </div>
</template>

<script>
export default {
  async fetch ({ store }) {
    await store.dispatch('data/fetchData')
  }
}
</script>

<style>
</style>
