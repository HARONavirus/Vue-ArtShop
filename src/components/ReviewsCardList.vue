<script setup>
import ReviewsCard from '@/components/ReviewsCard.vue';

defineProps({
  reviews: Array,
})

</script>

<template>
  <div class="products-wrapper" v-auto-animate>
        <ReviewsCard 
        v-for="item in reviews"
        :key="item.id"
        :id="item.id"
        :fullname="item.fullname"
        :picture="item.picture" 
        :description="item.description" 
        />
    </div>
</template>

<style scoped>
.products-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}
</style>