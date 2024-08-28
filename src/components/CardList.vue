<script setup>
import { inject } from 'vue';

import Card from "./Card.vue"

defineProps({
  items: Array
})

const { onClickAddPlus } = inject('cardActions')
const { onClickAddFav} = inject('cardActions')
</script>

<template>
  <div class="products-wrapper">
    <Card 
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :picture="item.picture"
      :picture_1="item.picture_1"
      :picture_2="item.picture_2"
      :title="item.title"
      :description="item.description"
      :article="item.article"
      :color_title="item.color_title"
      :color="item.color"
      :size="item.size"
      :height="item.height"
      :structure="item.structure"
      :pattern="item.pattern"
      :set="item.set"
      :country="item.country"
      :price="item.price"
      :rent="item.rent"
      @onClickCart="() => onClickAddPlus(item)"
      @onClickFavorite="() => onClickAddFav(item)"
      :isAdded="item.isAdded"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>

<style scoped>
.products-wrapper {
  margin-left: 5px;
	display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
}
</style>