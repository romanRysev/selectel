<template>
  <div class="content">
    <Header />
    <Promo />
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
