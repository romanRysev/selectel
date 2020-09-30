<template>
  <header class="header">
    <div class="container header__container">
      <img src="/logo.svg" alt="Логотип" class="header__logo">
      <div class="header__contacts-container">
        <a
          class="header__contacts-link"
          href="tel:88005550675"
        ><p class="header__number">
           8&nbsp;800&nbsp;555&nbsp;06&nbsp;75
         </p>
          <img
            class="header__number-icon"
            src="/tel.svg"
            alt="Позвоните нам"
          ></a>

        <a
          class="header__contacts-link"
          href="mailto:sales@selectel.ru"
        ><p class="header__email">
           sales@selectel.ru
         </p>
          <img
            class="header__email-icon"
            src="mail.svg"
            alt="Напишите нам"
          ></a>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  background: #f2f2f2;
}

.header__container {
  display: flex;
  height: 88px;
  justify-content: space-between;
  align-items: center;
}
.header__contacts-link {
  text-decoration: none;
  color: var(
    --data-blue-color
  ); /*Мне кажется, что черный цвет в макете - ошибка*/
}

.header__contacts-link:hover {
  cursor: pointer;
}

.header__email-icon {
  display: none;
}

.header__number-icon {
  display: none;
}
.header__contacts-container {
  display: flex;
  font-weight: var(--header-font-weight);
  font-size: var(--header-font-size);
  line-height: var(--header-line-height);
}

.header__email {
  padding-left: 34px;
}
@media screen and (max-width: 770px) {
  .header__container {
    height: 64px;
  }
  .header__email-icon {
    display: block;
    margin-right: 26px;
  }

  .header__email {
    display: none;
  }

  .header__number-icon {
    display: block;
    margin-right: 36px;
  }

  .header__number {
    display: none;
  }
}
</style>
