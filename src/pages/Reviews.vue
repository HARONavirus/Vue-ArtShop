<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ReviewsCardList from "@/components/ReviewsCardList.vue"
import InfoBlock from "@/components/InfoBlock.vue"

const reviews = ref([])

// Получаем отзывы с сервера
onMounted(async () => {
    try {
        const {data} = await axios.get('https://6f242298d88c9154.mokky.dev/reviews')
        
        reviews.value = data
    } catch (err) {
        console.log(err);
    }
});
</script>

<template>
    <body>
        <section class="home-product">
            <div class="container">
                <h3>Наши отзывы</h3>
                <div v-if="!reviews.length" class="empty-reviews">
                    <InfoBlock 
                    title="У нас пока что-то нет отзывов" 
                    description="Напишите наш первый отзыв."
                    imageUrl="https://i.postimg.cc/kM6n1QJm/reviews-icon.png"
                    imageHeight="180"
                    imageWidth="220"
                    />
                </div>
                <ReviewsCardList :reviews="reviews" />
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
h3 {
    margin-top: 15px;
    margin-bottom: 15px;
}

.empty-reviews {
    margin-top: 80px;
}
</style>