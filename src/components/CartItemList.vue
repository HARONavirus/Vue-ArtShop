<script setup>
import { inject } from 'vue';

import CartItem from './CartItem.vue';

defineProps({
  items: Array
})

const { removeFromCart } = inject('cardActions')

</script>

<template>
    <div class="item-block" v-auto-animate>
        <CartItem 
        v-for="item in items" 
        :key="item.id"
        :picture="item.picture"
        :title="item.title"
        :price="item.price"
        :rent="item.rent"
        @onClickRemove="() => removeFromCart(item)"
        />
    </div>
</template>

<style scoped>
.item-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>