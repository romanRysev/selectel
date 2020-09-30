<template>
  <footer class="footer">
    <div class="container footer__container">
      <img src="/footer-logo.svg" alt="Логотип" class="footer__logo">
      <nav>
        <ul class="footer__menu">
          <li><a class="footer__menu-link p1-desktop" href="#">Серверы</a></li>
          <li>
            <a class="footer__menu-link p1-desktop" href="#">Оборудование</a>
          </li>
          <li>
            <a class="footer__menu-link p1-desktop" href="#">Дата-центры</a>
          </li>
          <li><a class="footer__menu-link p1-desktop" href="#">Блог</a></li>
          <li><a class="footer__menu-link p1-desktop" href="#">Облако</a></li>
          <li><a class="footer__menu-link p1-desktop" href="#">Решения</a></li>
          <li>
            <a class="footer__menu-link p1-desktop" href="#">О Компании</a>
          </li>
          <li><a class="footer__menu-link p1-desktop" href="#">Офисы</a></li>
        </ul>
      </nav>
      <div class="footer__license-container">
        <p class="footer__license">
          ©&nbsp;ООО&nbsp;«Селектел», 2008—2020
        </p>
        <p class="footer__license">
          Лицензия на телематические услуги №&nbsp;176266 и №&nbsp;176267
        </p>
      </div>
      <div class="footer__social">
        <a href="https://t.me/SelectelNews" target="_blank">
          <img
            class="footer__social-icon"
            src="/telegram.svg"
            alt="Telegram"
          ></a><a
          href="https://www.facebook.com/selectel/"
          target="_blank"
        ><img
          class="footer__social-icon"
          src="/FB.svg"
          alt="Facebook"
        ></a>
        <a
          href="https://vk.com/selectel"
          target="_blank"
        ><img class="footer__social-icon" src="/VK.svg" alt="Vkontakte"></a><a
          href="https://twitter.com/selectel"
          target="_blank"
        ><img
          class="footer__social-icon"
          src="/twitter.svg"
          alt="Twitter"
        ></a><a
          href="https://habr.com/ru/company/selectel/"
          target="_blank"
        ><img
          class="footer__social-icon"
          src="/habr.svg"
          alt="Habr"
        ></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.footer {
  background: var(--data-blue-color);
  color: #fff;
}

.footer__container {
  padding: 80px 64px;
  display: grid;
  grid-template-columns: 0.73fr 1fr;
  grid-row-gap: 32px;
  align-items: end;
}

.footer__menu {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-row-gap: 17px;
  grid-column-gap: 96px;
  list-style: none;
  padding: 0;
}

.footer__menu-link {
  color: #fff;
  text-decoration: none;
}

.footer__license-container {
  max-width: 220px;
}

.footer__license {
  font-size: 14px;
  line-height: 20px;
  opacity: 0.5;
  margin-bottom: 5px;
}

.footer__social {
  margin-bottom: 11px;
}

.footer__social-icon {
  margin-right: 18px;
}

@media screen and (max-width: 1259px) {
  .footer__menu {
    grid-column-gap: 74px;
  }
}

@media screen and (max-width: 1147px) {
  .footer__container {
    grid-template-columns: 1fr;
  }
  .footer__social {
    grid-row: 2;
  }
}
@media screen and (max-width: 770px) {
  .footer__container {
    padding: 40px 16px;
  }
  .footer__logo {
    padding-bottom: 8px;
  }
  .footer__social {
    margin-bottom: 28px;
  }
  .footer__menu {
    padding-bottom: 48px;
  }
}

@media screen and (max-width: 640px) {
  .footer__menu {
    grid-column-gap: 44px;
  }
}

@media screen and (max-width: 520px) {
  .footer__menu {
    grid-template-columns: repeat(2, max-content);
  }
}
</style>
