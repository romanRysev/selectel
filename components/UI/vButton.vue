<template>
  <a
    class="promo__button-link"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
  >{{ text }}</a>
</template>
<script>
export default {
  props: {
    link: String,
    text: String
  }
}
</script>

<style scoped>
.promo__button-link {
  border: 1px solid var(--data-blue-color);
  box-sizing: border-box;
  border-radius: 6px;
  padding: 16px 32px;
  display: block;
  max-width: 100%;
  color: var(--data-blue-color);
  text-decoration: none;
  background: #fff;
  position: relative;
  text-align: center;
}

.promo__button-link:hover {
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.24), 0px 4px 16px rgba(0, 0, 0, 0.16);
}

</style>
