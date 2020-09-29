<template>
  <section class="container promo">

  </section>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.getters['data/getPromoData']
    }
  },
  methods: {
    onclickHandler () {
      this.redirect(this.data.button.link)
    }
  }
}
</script>

<style>

</style>
