<script setup>
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const slides = [
    {
        image: "https://i.postimg.cc/bwXfFW60/price-slider-1.png"
    },
    {
        image: "https://i.postimg.cc/ZKvhH4LK/price-slider-2.png"
    },
    {
        image: "https://i.postimg.cc/g2vb9s5C/price-slider-3.png"
    }
]

const emit = defineEmits(['toggleAtelierPricePopup']);
</script>


<template>
	<div class="shadow"></div>
    <div class="atelierPrice-body">
        <div class="cross-img">
            <a @click="emit('toggleAtelierPricePopup', false)">
                <img src="../assets/icons/cross.svg" alt="Иконка закрытия">
            </a>
        </div>
        <div class="container">
            <div class="title-table-block">
                <h1>ПРАЙС АТЕЛЬЕ</h1>
                <table>
                    <tbody>
                        <tr>
                        <td>УКОРОТИТЬ НИЗ БРЮК</td>
                        <td><b>250р.</b></td>
                        </tr>
                        <tr>
                        <td>ПЕРЕНОС ПУГОВИЦ</td>
                        <td><b>250р.</b></td>
                        </tr>
                        <tr>
                        <td>ПРИТАЛИТЬ ЖИЛЕТ</td>
                        <td><b>500р.</b></td>
                        </tr>
                        <tr>
                        <td>ЗУЗИТЬ СРЕДНИЙ ШОВ БРЮК</td>
                        <td><b>500р.</b></td>
                        </tr>
                        <tr>
                        <td>УКОРОТИТЬ ДЛИНУ РУКАВА</td>
                        <td><b>500р.</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="carousel">
                <Carousel :autoplay="4000" :wrap-around="true">
                    <Slide v-for="{image} in slides" :key="slide">
                        <div class="carousel__item">
                            <img :src="image" alt="">
                        </div>
                    </Slide>
  			    </Carousel>
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

.atelierPrice-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 500px;
    background-color: white;
    z-index: 5;
    padding: 20px;
}

.cross-img {
    display: flex;
    justify-content: end;
}

.cross-img img {
    widows: 40px;
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

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.title-table-block {
  max-width: 500px;
}

.carousel {
    max-width: 500px;
}

.carousel__item {
    padding-top: 50px;
}

h1 {
    margin-bottom: 70px;
}

table {
    border-collapse: collapse;
    margin-bottom: 60px;
}

table, td {
    border: 1px solid black;
}

td {
    font-size: 20px;
    padding: 5px;
}

.carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item img {
    width: 500px;
}
</style>