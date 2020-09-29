<template>
  <div>
    <Header />
  </div>
</template>

<script>
export default {
  created () {
    return this.$store.dispatch('data/fetchData')
  }
}
</script>

<style></style>
