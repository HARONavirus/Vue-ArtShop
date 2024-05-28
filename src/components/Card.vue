<script setup>
import { ref } from 'vue';

import ProductCard from "@/components/ProductCard.vue"

const props = defineProps({
	id: Number,
	picture: String,
    picture_1: String,
    picture_2: String,
	title: String,
	description: String,
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
	isFavorite: Boolean
})

const emit = defineEmits(['onClickCart', 'onClickFavorite'])

const productCardOpen = ref(false);

const openProductCard = () => {
   productCardOpen.value = true
}

const closeProductCard = () => {
   productCardOpen.value = false
}
</script>

<template>
		<ProductCard 
			v-if="productCardOpen"
			:picture="props.picture"
			:picture_1="props.picture_1"
			:picture_2="props.picture_2"
			:title="props.title"
			:article="props.article"
			:color_title="props.color_title"
			:color="props.color"
			:size="props.size"
			:height="props.height"
			:structure="props.structure"
			:pattern="props.pattern"
			:set="props.set"
			:country="props.country"
			:price="props.price"
			:rent="props.rent"
			:isAdded="props.isAdded"
			:onClickCart="() => emit('onClickCart')"
			@closeProductCard="closeProductCard"
		/>
		<div class="product">
            <div @click="openProductCard()" class="img">
                <img
					class="picture" 
					:src="picture" 
					alt=""
				>
            </div>
				<div class="title-block">
					<p class="title">{{ title }}</p>
				</div>
				<div class="description-block">
					<p class="description">{{ description }}</p>
				</div>
			<div class="price-block">
				<div class="price">
               		<b>{{ price }} ₽</b><span>{{ rent }} ₽/сут.</span>
             	</div>
				<div class="buttons">
					<div class="addToCart-button">
						<img class="addToCart" @click="emit('onClickCart')" v-if="!isAdded" src="../assets/icons/plus.svg"/>
						<img class="addToCart" @click="emit('onClickCart')" v-else src="../assets/icons/checked.svg"/>
					</div>
					<div class="addToFavorites-button">
						<img class="addToFavorite" @click="emit('onClickFavorite')" v-if="!isFavorite" src="../assets/icons/like-1.svg"/>
						<img class="addToFavorite" @click="emit('onClickFavorite')" v-else src="../assets/icons/like-2.svg"/>
					</div>
				</div>
			</div>
   		 </div>
</template>

<style scoped>
.home-product .products-wrapper .product {
  width: 250px;
  height: 460px;
  margin-bottom: 10px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  text-align: center;
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
}

.product:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}

.price-block {
	position: absolute;
  	bottom: 0;
	left: 0;
	right: 0;
}

.price {
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

.buttons {
	display: flex;
	justify-content: center;
	padding-top: 10px;
	padding-bottom: 10px;
}

.home-product .products-wrapper .product .picture {
	background-color: #E6E6E6;
	border-radius: 10.52641px;
	height: 230px;
	width: 230px;
	overflow: hidden;
	margin-top: 10px;
}

.home-product .products-wrapper .product .picture img {
	width: 100%;
	height: 100%;
}

.title-block {
	margin: 10px 10px 10px 10px;
	height: 40px;
	width: 230px;
}

.home-product .products-wrapper .product .title {
	display: block;
	font-weight: 500;
	font-size: 14.4845;
	line-height: 22px;
	color: #000;
}

.description-block {
	margin: 10px 10px 0px 10px;
	height: 60px;
	width: 230px;
}

.home-product .products-wrapper .product .description {
	display: block;
	font-size: 12.764px;
	line-height: 19px;
	color: #000;
	margin-right: 5px;
	margin-left: 5px;
}

.home-product .products-wrapper .product .price b {
	font-weight: 500;
	font-size: 18.1056px;
	line-height: 23px;
	color: #000;
	margin-right: 10px;
}

.home-product .products-wrapper .product .price b span {
	font-size: 12.674px;
	line-height: 23px;
	color: #828282;
}

.addToCart {
	width: 50px;
	height: 50px;
	margin-right: 30px;
	opacity: 0.3;
    cursor: pointer;
	transition: transform 0.1s ease-in-out;

    &:hover {
        opacity: 1;
	}

	&:active {
        transform: scale(0.95);
    }
}

.addToFavorite {
	width: 50px;
	height: 50px;
	opacity: 0.3;
    cursor: pointer;
	transition: transform 0.1s ease-in-out;

    &:hover {
        opacity: 1;
	}

	&:active {
        transform: scale(0.95);
    }
}

.home-product .products-wrapper .product a.to-cart {
	margin-top: 13px;
	width: 140px;
	height: 38px;
	left: 223px;
	top: 846.44px;
	background: #333333;
	border-radius: 4.52641px;
	line-height: 38px;
	text-align: center;
	font-size: 18.1056px;
	display: inline-block;
	color: #FFFFFF;
	text-decoration: none;
}
</style>