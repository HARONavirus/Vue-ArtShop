<script setup>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { ref } from 'vue';

import InfoBlock from "./InfoBlock.vue";

import 'vue3-carousel/dist/carousel.css'

const emit = defineEmits(['closeProductCard']);

const props = defineProps({
	picture: String,
    picture_1: String,
    picture_2: String,
	title: String,
    article: String,
    color_title: String,
    color: String,
    size: String,
    height: String,
    structure: String,
    pattern: String,
    set: String,
    country: String,
	price: Number,
	rent: Number,
    isAdded: Boolean,
    onClickCart: Function
})

const slides = [
    {
        image: props.picture
    },
    {
        image: props.picture_1
    },
    {
        image: props.picture_2
    }
]

const addToCartDone = ref(false);

const doneToCart = () => {
    addToCartDone.value = true;
};

const removeFromCartDone = ref(false);

const doneRemoveFromCart = () => {
    removeFromCartDone.value = true;
};

</script>

<template>
	<div class="shadow"></div>
    <div class="productCard-body">
        <div class="cross-img">
            <a @click="emit('closeProductCard')">
                <img class="cross-icon" src="../assets/icons/cross.svg" alt="Иконка закрытия">
            </a>
        </div>
        <div v-if="addToCartDone && isAdded" class="addToCart-done">
            <InfoBlock
            title="Товар успешно добавлен в корзину" 
            description="Перейдите в корзину для оформления заказа."
            imageUrl="https://i.postimg.cc/vBTKmtqH/done-icon.png"
            imageHeight="120"
            imageWidth="120"
            />
        </div>
        <div v-if="removeFromCartDone && !isAdded" class="removeFromCart-done">
            <InfoBlock
            title="Товар успешно удален из корзины"
            imageUrl="https://i.postimg.cc/vBTKmtqH/done-icon.png"
            imageHeight="120"
            imageWidth="120"
            />
        </div>
        <div v-if="!addToCartDone && !removeFromCartDone" class="container">
            <div class="container-up">
                <div class="photo">
                    <Carousel :wrap-around="true">
                        <Slide v-for="{image} in slides" :key="slide">
                            <div class="carousel__item">
                                <img :src="image" alt="">
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
  			        </Carousel>
                </div>
                <div class="info-block">
                    <div class="info-block-titile">
                        <b><p class="title">{{ title }}</p></b>
                        <span class="article">Артикул - {{ article }}</span>
                    </div>
                    <div class="info-block-color">
                        <span class="color">Цвет: {{ color_title }}</span>
                        <div :style="{ backgroundColor: color }" class="color-box"></div>
                    </div>
                    <div class="info-block-size">
                        <span class="size">Размер: {{ size }}</span>
                        <span class="size">Рост: {{ height }}</span>
                    </div>
                    <div class="info-block-price">
                        <b>Цена покупки: {{ price }} ₽</b>
                        <span>Цена проката: {{ rent }} ₽/сут.</span>
                    </div>
                    <div class="info-block-specifications">
                        <span>Состав: {{ structure }}</span>
                        <span>Узор: {{ pattern }}</span>
                        <span>Комплект: {{ set }}</span>
                        <span>Страна производителя: {{ country }}</span>
                    </div>
                    <div class="button-block">
                        <button v-if="!isAdded" @click="onClickCart(); doneToCart()" class="button">
                            Добавить в корзину
                        </button>
                        <button v-if="isAdded" @click="onClickCart(); doneRemoveFromCart()" class="button">
                            Удалить из корзины
                        </button>
                    </div>
                </div>
            </div>
            <div class="container-down">
                <div class="full_description">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

.productCard-body {
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 30px;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 590px;
    background-color: white;
    z-index: 5;
    padding: 10px;
}

.cross-img {
    display: flex;
    justify-content: end;
}

.cross-icon {
    margin-right: 10px;
    margin-top: 10px;
    width: 40px;
    height: 40px;
    opacity: 0.3;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:hover {
        opacity: 1;
	}

    &:active {
        transform: scale(0.8);
    }
}

.addToCart-done, .removeFromCart-done {
    display: flex;
    height: 80%;
    align-items: center;
}

.container {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 10px;
}

.container-up {
    display: flex;
}

.photo {
    margin-right: 50px;
    max-width: 450px;
}

.carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item img {
    width: 450px;
}

.title {
    font-size: 24px;
}

.article, .color, .size, .info-block-price, .info-block-specifications {
    font-size: 18px;
}

.info-block {
    margin-right: 20px;
}

.info-block, .info-block-size {
    display: flex;
    flex-direction: column;
}

.info-block-price {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}

.button {
    margin-top: 15px;
    transition: transform 0.1s ease-in-out;
    background-color: #333;
    width: 400px;
    height: 100%;
    padding: 1.2rem 0;
    font-size: 18px;
    color: white;
    cursor: pointer;

    &:active {
        transform: scale(0.95);
    }
}

.button:hover {
  background-color: gray;
}

.info-block-color {
    display: flex;
    align-items: center;
}

.info-block-specifications {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}

.color-box {
    height: 18px;
    width: 18px;
    margin-left: 5px;
}

.container-down {
    display: flex;
}

</style>