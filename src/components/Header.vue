<script setup>
import { ref } from 'vue'

defineProps({
  totalPriceBuy: Number,
  totalPriceRent: Number
})

const isActive = ref(true)

const emit = defineEmits(['openCart']);
</script>

<template>
  <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <div class="navbar-main d-flex">
            <a class="navbar-brand" href="#">
              <img class="logo-icon" src="../assets/icons/logo.svg" alt="">
            </a>
              <ul class="navbar-nav">
                <router-link to="/" style="text-decoration: none;">
                  <li class="nav-item">
                    <span class="nav-link">Главная</span>
                  </li>
                </router-link>
                <router-link to="/favorites" style="text-decoration: none;">
                <li class="nav-item">
                  <span class="nav-link">Избранное</span>
                </li>
                </router-link>
                <router-link to="/rent" style="text-decoration: none;">
                <li class="nav-item">
                  <span class="nav-link">Прокат</span>
                </li>
                </router-link>
                <router-link to="/reviews" style="text-decoration: none;">
                <li class="nav-item">
                  <span class="nav-link">Отзывы</span>
                </li>
                </router-link>
                <router-link to="/shops" style="text-decoration: none;">
                <li class="nav-item">
                  <span class="nav-link">Магазины</span>
                </li>
                </router-link>
              </ul>
          </div>
          <div class="menu-right">
            <div class ="toggle-switch">
                <span>Покупка</span>
                <label class="switch">
                    <input type="checkbox" @change="isActive = !isActive">
                    <span class="slider round"></span>
                </label>
                <span>Прокат</span>
            </div>

            <div class="menu-cart">
              <a @click="() => emit('openCart')" class="cart">
                <img class="cart-icon" src="../assets/icons/cart.svg" alt="">
                <span>{{ isActive ? totalPriceBuy : totalPriceRent }} руб.</span>
              </a>
            </div>
            <!--
            <div class="menu-user d-flex">
              <div class="profile">
                <router-link to="/log">
                  <a class="login">
                    <img class="user-icon" src="../assets/icons/user.svg" alt="">
                  </a>
                </router-link>
                <router-link to="/reg">
                  <a class="registration">
                    <img class="reg-icon" src="../assets/icons/reg.svg" alt="">
                  </a>
                </router-link>
              </div>
            </div>
            -->
          </div>
        </div>
      </nav>
  </header>
</template>

<style scoped>
.logo-icon {
	width: 40px;
}

.user-icon {
	width: 35px;
}

.reg-icon {
	width: 35px;
}

.cart-icon {
	width: 35px;
  cursor: pointer;
}

header {
	background-color: #333;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
}

header .navbar-light .navbar-nav .nav-item .nav-link {
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: white;
	padding: 0 22px;
  transition: transform 0.1s ease-in-out;

  &:hover {
		transform: scale(1.1);
	}

  &:active {
        transform: scale(0.95);
  }
}

header nav {
    height: 100px;
}

header .dropdown-toggle::after {
	display: none;
}

.menu-right {
  width: 390px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toggle-switch {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.toggle-switch span {
  font-size: 18px;
  font-weight: 400;
  color: white;
}

/* The switch - the box around the slider */
.switch {
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333333;
  -webkit-transition: .4s;
  transition: .4s;
  box-shadow: 0 0 5px white;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #333333;
}

input:focus + .slider {
  box-shadow: 0 0 10px white;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26x);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.menu-user {
  align-items: center;
}

.navbar-content {
	display: flex;
  justify-content: space-between;
}

.navbar-main {
  align-items: center;
}

header .menu-right .menu-cart a {
	font-weight: 400;
	font-size: 18px;
	line-height: 21px;
	color: white;
	text-decoration: none;
}

header .menu-right .menu-cart img {
	margin-right: 10px;
  transition: transform 0.1s ease-in-out;

  &:hover {
		transform: scale(1.1);
	}

  &:active {
        transform: scale(0.95);
  }
}

header .menu-right .menu-cart span {
  cursor: pointer;
}

header .menu-right .menu-user a, header .menu-right .menu-user a {
	margin-left: 10px;
  margin-right: 10px;
}

header .menu-right .menu-user a {
	background: none;
	border: none;
	padding: 0;
}

@media (max-width: 992px) {

.navbar-content .navbar-nav {
  margin-bottom: 15px;
}

.menu-right {
  margin-bottom: 15px;
}

.menu-cart {
  margin-right: 50px;
  margin-bottom: 15px;
}

.menu-user {
  align-items: center;
}

.menu-user .login, .menu-user .cart {
  margin: 0 10px;
}
}

@media (max-width: 576px) {
.logo-icon, .phone-icon, .user-icon, .cart-icon {
  width: 25px;
}
}
</style>