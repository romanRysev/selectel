<template>
  <header class="header container">
    <img src="/logo.svg" alt="Логотип" class="header__logo">
    <div class="header__contacts-container">
      <p class="header__number">
        8 800 555 06 75
      </p>
      <p class="header__email">
        sales@selectel.ru
      </p>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  height: 88px;
  justify-content: space-between;
  align-items: center;
  background: #F2F2F2;
}

.header__contacts-container {
  display: flex;
  font-weight:var(--header-font-weight);
  font-size: var(--header-font-size);
  line-height: var(--header-line-height);
}

.header__email {
  padding-left: 34px;
}
</style>
