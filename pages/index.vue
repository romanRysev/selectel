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
  created () {
    return this.$store.dispatch('data/fetchData')
  }
}
</script>

<style>
</style>
