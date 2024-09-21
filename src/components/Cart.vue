<script setup>
import { inject, ref } from "vue";

import CartItemList from './CartItemList.vue';
import InfoBlock from "./InfoBlock.vue";

defineProps({
  totalPriceBuy: Number,
  totalPriceRent: Number
})

const { filteredItemsCart } = inject('filter');

const { closeCart } = inject('cart');

const isActive = ref(true)
const orderDone = ref(false);

const doneOrder = () => {
    orderDone.value = true;
};

const emit = defineEmits(['createOrder'])

</script>

<template>
    <div class="shadow"></div> 
    <div class="cart-box">
        <div class="cart-titile">
            <svg 
                @click="closeCart"
                class="previous-arrow"
                width="16" 
                height="14" 
                viewBox="0 0 16 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                d="M1 7H14.7143" 
                stroke="black" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                />
                <path 
                d="M8.71436 1L14.7144 7L8.71436 13" 
                stroke="black" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round"
                />
            </svg>
            <h2>Корзина</h2>
        </div>

        <div v-if="filteredItemsCart.length === 0  && !orderDone" class="empty-cart">
            <InfoBlock
            title="Корзина пустая" 
            description="Добавьте хотя бы один костюм, чтобы сделать заказ."
            imageUrl="https://i.postimg.cc/QM0Psyqy/package-icon.png"
            imageHeight="90"
            imageWidth="90"
            />
        </div>

        <div v-if="orderDone" class="order-done">
            <InfoBlock
            title="Заказ успешно выполнен" 
            description="Ждём вас в нашем магазине для примерки."
            imageUrl="https://i.postimg.cc/vBTKmtqH/done-icon.png"
            imageHeight="120"
            imageWidth="120"
            />
        </div>

        <CartItemList v-if="!orderDone" :items="filteredItemsCart" />

        <div v-if="!(filteredItemsCart.length === 0) && !orderDone">
            <div class ="toggle-switch">
                <span>Покупка</span>
                <label class="switch">
                    <input type="checkbox" @change="isActive = !isActive">
                    <span class="slider round"></span>
                </label>
                <span>Прокат</span>
            </div>

            <div class="result">
                <span>Итого:</span>
                <div class="border"></div>
                <b>{{ isActive ? totalPriceBuy : totalPriceRent }} ₽</b>
            </div>

            <button 
                :disabled="totalPriceBuy ? false : true" 
                @click="() => { emit('createOrder'); doneOrder(); }"
                class="button"
                >Оформить заказ
            </button>
        </div>
    </div>
</template>

<style scoped>
.cart-titile {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
}

.previous-arrow{
    opacity: 0.3;
    cursor: pointer;
    transform: rotate(180deg);
    &:hover {
        opacity: 1;
    }
}

.shadow {
    position: fixed; 
    top: 0; 
    left: 0; 
    height: 100vh; 
    width: 100vw; 
    background-color: black; 
    z-index: 4; 
    opacity: 0.7;
}

.cart-box {
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100vh;
    background-color: white;
    z-index: 5;
    padding: 20px;
}

.empty-cart, .order-done {
    display: flex;
    height: 80%;
    align-items: center;
}

.toggle-switch {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.toggle-switch span {
  font-size: 18px;
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
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
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
  background-color: #ccc;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ccc;
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

.result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.border {
    border-bottom: 1px dashed;
    width: 60%;
    margin-top: 10px;
}

.button {
    margin-top: 20px;
    transition: transform 0.1s ease-in-out;
    background-color: #333;
    width: 100%;
    border-radius: 1rem;
    padding: 1.2rem 0;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: gray;
    }

    &:disabled {
        background-color: lightgrey;
    }

    &:active {
        transform: scale(0.95);
    }

}
</style>