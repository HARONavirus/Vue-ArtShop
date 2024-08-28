<script setup>
import axios from "axios"
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import { onMounted, inject, ref, computed } from "vue"

import PageList from "@/components/PageList.vue"
import CardList from "@/components/CardList.vue"
import Mailing from "@/components/Mailing.vue"

import 'vue3-carousel/dist/carousel.css'

const { items } = inject('items')

// Получаем список товаров в зависимости от страницы, на которой мы находимся
const page = ref(1);
const productsOnPage = 15;
const filteredItems = computed(() => {
const startIndex = (page.value - 1) * productsOnPage;
const endIndex = startIndex + productsOnPage;
    return items.value.slice(startIndex, endIndex);
});

const changePage = (newPage) => {
    page.value = newPage;
    document.querySelectorAll('.pagination-block li').forEach((li) => {
        li.classList.remove('active');
        if (li.querySelector('a').innerHTML == newPage) {
        	li.classList.add('active');
        }
    });
};

onMounted(() => {
  changePage(page.value);
});

const slides = ref([])

// Получаем данные для банера "подписка"
onMounted(async () => {
    try {
        const {data} = await axios.get('https://6f242298d88c9154.mokky.dev/slides')
        
        slides.value = data
    } catch (err) {
        console.log(err);
    }
});

const mailingOpen = ref(false);

const toggleMailingPopup = (acc) => {
   mailingOpen.value = acc
}
</script>

<template>
<body>
	<PageList />

	<Mailing v-if="mailingOpen" @toggleMailingPopup="toggleMailingPopup" />

	<section class="home-banner">
		<div class="container">

			<Carousel :autoplay="8000" :wrap-around="true">
    			<Slide v-for="{ title, description, image } in slides" :key="title">
					<div class="swiper-slide block">
						<img :src="image" alt="">
						<h2>{{ title }}</h2>
						<p>{{ description }}</p>
						<a @click="toggleMailingPopup(true)">Подписаться</a>
					</div>
    			</Slide>

    			<template #addons>
     				<Pagination />
    			</template>
  			</Carousel>
      	</div>
    </section>

    <section class="home-product">
      <div class="container">
		<h3 class="all_products">Все товары</h3>

        <CardList :items="filteredItems" />

        <div class="pagination-block">
			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li v-for="i in 2" :key="i">
						<a @click="changePage(i)" :class="{ active: page.value === i }">{{ i }}</a>
					</li>
				</ul>
			</nav>
		</div>
      </div>
    </section> 
</body>
</template>

<style scoped>
body {
    min-height: 65vh; 
    margin: 0; 
    display: grid;
    grid-template-rows: 1fr auto;
}

.home-banner {
	padding-bottom: 25px;
	margin-top: 20px;
}

.home-banner .block {
	background: linear-gradient(180deg, #F1F1FB 0%, #EBEBF5);
	position: relative;
	box-shadow: 0px, 0x, 18.0727px rgba(0, 0, 0, 0.03);
	border-radius: 18.0727px;
	height: 254px;
	width: 100%;
	overflow: hidden;
	padding: 40px;
}

.home-banner .block img {
	position: absolute;
	height: 100%;
	top: 0;
	right: 0;
}

.home-banner .block h2 {
	display: flex;
	font-style: normal;
	font-weight: normal;
	line-height: 31.6273px;
	line-height: 38px;

	color: #333333;
}

.home-banner .block p {
	display: flex;
	font-size: 19.88px;
	line-height: 24px;
	color: #828282;
}

.home-banner .block a {
	font-weight: 500;
	font-size: 25.3018px;
	line-height: 30px;
	color: #FFFFFF;
	width: 218px;
	height: 52px;
	background: #333333;
	border-radius: 5px;
	display: block;
	text-decoration: none;
	text-align: center;
	line-height: 53px;
	margin-top: 34px;
	cursor: pointer;
	transition: transform 0.1s ease-in-out;

	&:hover {
        color: white;
		transform: scale(1.05);
    }

	&:active {
        transform: scale(0.95);
    }
}

.home-product {
	padding-top: 24px;
	padding-bottom: 68px;
}

.home-product h3.all_products {
	margin-bottom: 35px;
}

.home-product .pagination-block {
	display: flex;
	justify-content: center;
	margin-top: 30px
}

.home-product .pagination-block ul li a {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #000;
  width: 41px;
  height: 41px;
  border-radius: 5px;
  text-align: center;
  background-color: none;
  border: 0px solid #dee2e6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.home-product .pagination-block ul li a:active {
  background-color: #333;
  color: white;
  cursor: pointer;
}

.home-product .pagination-block ul li a:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.home-product .pagination-block ul li.active a {
  background-color: #333;
  color: white;
}
</style>