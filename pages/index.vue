<template>
  <div class="content">
    <Header />
    <Promo />
    <Advantages />
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
  .content {

  }
</style>
