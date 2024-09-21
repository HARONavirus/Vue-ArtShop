<script setup>
import InfoBlock from "@/components/InfoBlock.vue"
import CardList from "@/components/CardList.vue"
import PageList from "@/components/PageList.vue"

import { inject, computed } from 'vue'

const { items } = inject('items')

const filteredItems = computed(() => {
    return items.value.filter(item => item.category.includes('Пиджаки'));
});

</script>

<template>
    <body>
        <PageList />
        
        <section class="home-product">
            <div class="container">
                <h3>Пиджаки</h3>
                <div v-if="filteredItems.length === 0" class="empty-jackets">
                    <InfoBlock 
                    title="На данный момент в нашем магазине отсутствуют пиджаки" 
                    description="Пиджаки появятся в скором времени."
                    imageUrl="https://i.postimg.cc/RFYDJJy1/jacket-icon.png"
                    imageHeight="220"
                    imageWidth="220"
                    />
                </div>

                <CardList :items="filteredItems" />
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

.empty-jackets {
    margin-top: 120px;
}

.home-product {
    margin-bottom: 20px;
}

</style>