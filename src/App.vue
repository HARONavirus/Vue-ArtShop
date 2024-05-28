<script setup>
import axios from "axios"
import { RouterView } from 'vue-router'
import { provide, computed, ref, onMounted } from "vue";

import Header from "@/components/Header.vue"
import Cart from "@/components/Cart.vue"
import Footer from "@/components/Footer.vue"

const items = ref([])
const cartList= ref([])
const favList = ref([])

// Получаем с сервера товары
const fetchItems = async () => {
	try {
		const { data } = await axios.get('https://6f242298d88c9154.mokky.dev/products')

		items.value = data
	} catch (err) {
		console.log(err)
	}
}

// Получаем с сервера товары в корзине
const fetchCart = async () => {
	try {
        const { data } = await axios.get('https://6f242298d88c9154.mokky.dev/cart')
        
        cartList.value = data
    } catch (err) {
        console.log(err);
    }
}

// Получаем с сервера товары из списка избранных
const fetchFavorites = async () => {
    try {
        const { data } = await axios.get('https://6f242298d88c9154.mokky.dev/favorites')
        
        favList.value = data
    } catch (err) {
        console.log(err);
    }
}

// Добавляем новый товар в корзину
const addToCart = async (item) => {
	try {
		// Ставим метки на локальные товары, чтоб не запрашивать список товаров при каждом добавлении
		item.isAdded = true;
		item.productItemId = item.id;

		// Добавляем новый товар на сервер в таблицу "корзина"
		const { data } = await axios.post("https://6f242298d88c9154.mokky.dev/cart", item);

		item.cartItemId = data.id;

		// Обновляем на сервере таблицу "товары", чтоб она хранила данные о товаре в корзине
		await axios.patch(`https://6f242298d88c9154.mokky.dev/products/${item.id}`,
		{ isAdded: true, cartItemId: data.id }
		);

		await fetchCart()
	} catch (err) {
		console.log(err);
	}
};

// Добавляем новый товар в избранное
const addToFavorite = async (item) => {
	try {
		// Ставим метки на локальные товары, чтоб не запрашивать список товаров при каждом добавлении
		item.isFavorite = true;

		// Добавляем новый товар на сервер в таблицу "избранное"
		const { data } = await axios.post(`https://6f242298d88c9154.mokky.dev/favorites`, item);

		item.favItemId = data.id;
			
		// Обновляем на сервере таблицу "избрнное", чтоб она хранила данные о товаре в избранном
		await axios.patch(`https://6f242298d88c9154.mokky.dev/products/${item.id}`,
		{ isFavorite: true, favItemId: data.id }
		);

		await fetchFavorites()
	} catch (err) {
		console.log(err)
	}
}

// Удаляем товар из корзины
const removeFromCart = async (item) => {
	try {
		// Удаляем с сервера из таблицы "корзина" товар
		await axios.delete(`https://6f242298d88c9154.mokky.dev/cart/${item.cartItemId}`)

		// Обновляем на сервере таблицу "товары", потому что мы удалили товар из коризны
		await axios.patch(`https://6f242298d88c9154.mokky.dev/products/${item.id}`,
		{ isAdded: false, cartItemId: null }
		)

		// Обновляем метки на локальные товары, чтоб не запрашивать с сервера список товаров при каждом удалении
		item.isAdded = false
		item.cartItemId = null
		item.productItemId = null

		await fetchCart()
	} catch (err) {
		console.log(err);
	}
};

// Удаляем товар из избранного
const removeFromFavorite = async (item) => {
	try {
		// Удаляем с сервера из таблицы "избранное" товар
		await axios.delete(`https://6f242298d88c9154.mokky.dev/favorites/${item.favItemId}`)

		// Обновляем на сервере таблицу "избранное", потому что мы удалили товар из кизбранного
		await axios.patch(`https://6f242298d88c9154.mokky.dev/products/${item.id}`,
		{ isFavorite: false, favItemId: null }
		)

		// Обновляем метки на локальные товары, чтоб не запрашивать с сервера список товаров при каждом удалении
		item.isFavorite = false
		item.favItemId = null

		await fetchFavorites()
	} catch (err) {
		console.log(err)
	}
}

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
	addToCart(item)
  } else {
	removeFromCart(item)
  }
}

const onClickAddFav = (item) => {
  if (!item.isFavorite) {
	addToFavorite(item)
  } else {
	removeFromFavorite(item)
  }
}

// Создание нового заказа
const createOrder = async () => {
	try {
		// Отправляем данные заказа на сервер
		await axios.post(`https://6f242298d88c9154.mokky.dev/orders`, {
			items: cartList.value,
			totalPriceBuy: totalPriceBuy.value,
			totalPriceRent: totalPriceRent.value
		});

		// Очищаем локальную крзину
		items.value.forEach(item => {
			item.isAdded = false;
			item.cartItemId = null;
		});

		for (const item of cartList.value) {
    		await axios.patch(`https://6f242298d88c9154.mokky.dev/products/${item.productItemId}`, {
				isAdded: false,
				cartItemId: null
			});
		}

		// Очищаем корзину на сервере
		await axios.patch(`https://6f242298d88c9154.mokky.dev/cart`,[])

		await fetchCart()
	} catch (err) {
		console.log(err);
	}
};

onMounted(async () => {

await fetchItems('https://6f242298d88c9154.mokky.dev/products')
await fetchCart()
await fetchFavorites()

})

// Считаем общую сумму заказа для покупки
const totalPriceBuy = computed(() => {
  return cartList.value.reduce((acc, item) => acc + Number(item.price), 0);
})

//Считаем общую сумму заказа для проката
const totalPriceRent = computed(() => {
  return cartList.value.reduce((acc, item) => acc + Number(item.rent), 0)
})

const cartOpen = ref(false);

const closeCart = () => {
	cartOpen.value = false
}

const openCart = () => {
	cartOpen.value = true
}

const filteredItemsCart = computed(() => {
    return items.value.filter(item => cartList.value.some(cartItem => cartItem.id === item.cartItemId));
});

const filteredItemsFav = computed(() => {
    return items.value.filter(item => favList.value.some(favorite => favorite.id === item.favItemId));
});

provide('filter', {
	filteredItemsCart,
	filteredItemsFav
})

provide('cart', { 
	closeCart 
})

provide('items', { 
	items,
	fetchItems
})

provide('cardActions', {
	onClickAddPlus,
	onClickAddFav,
	removeFromCart,
	removeFromFavorite
})
</script>

<template>
    <Header 
        :totalPriceBuy="totalPriceBuy" 
        :total-price-rent="totalPriceRent" 
        @openCart="openCart" 
    />
    <Cart 
        v-if="cartOpen"
        :totalPriceBuy="totalPriceBuy" 
        :total-price-rent="totalPriceRent"
		@createOrder="createOrder"
    />
    <router-view></router-view>
    <Footer />
</template>

<style scoped>
body {
    min-height: 65vh; 
    margin: 0; 
    display: grid;
    grid-template-rows: 1fr auto;
}
</style>