<template>
  <section class="advantages container">
    <h2 class="advantages__title h2-desktop" v-html="data.title" />
    <p class="advantages__subtitle p2-desktop" v-html="data.subtitle" />
    <div v-for="item in data.items" :key="item.id" class="advantage-item">
      <h3 class="advantage-item__title h3-desktop" v-html="item.title" />
      <div class="advantage-item__content-container">
        <img :src="item.image" alt="" class="advantage-item__image">
        <div class="advantage-item__content p2-desktop" v-html="item.content" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.getters['data/getAdvantagesData']
    }
  },
  methods: {}
}
</script>

<style>
.advantages {
  max-width: 740px;
  position: relative;
  left: -22px;
}

.advantages__title {
  margin-bottom: 16px;
}

.advantages__subtitle {
  margin-bottom: 32px;
}

.advantage-item {
  border-top: 1px solid #d9d9d6;
  padding: 23px 0 32px;
}

.advantage-item__title {
  margin-bottom: 24px;
}

.advantage-item__content-container {
  display: flex;
}

.advantage-item__content ul {
  list-style: none;
  padding-left: 106px;
}

.advantage-item__content li:before {
  content: "—";
  position: absolute;
  margin-left: -25px;
}

.advantage-item__image {
  height: 48px;
}

@media screen and (max-width: 1439px) {
.advantages {
  margin-left: 350px;
}
}

@media screen and (max-width: 1105px) {
.advantages {
  margin-left: 30%;
}
}

</style>
