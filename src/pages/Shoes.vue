<script setup>
import InfoBlock from "@/components/InfoBlock.vue"
import CardList from "@/components/CardList.vue"
import PageList from "@/components/PageList.vue"

import { inject, computed } from 'vue'

const { items } = inject('items')

const filteredItems = computed(() => {
    return items.value.filter(item => item.category.includes('Обувь'));
});

</script>

<template>
    <body>
        <PageList />
        
        <section class="home-product">
            <div class="container">
                <h3>Обувь</h3>
                <div v-if="filteredItems.length === 0" class="empty-shoes">
                    <InfoBlock 
                    title="На данный момент в нашем магазине отсутствуют обувь" 
                    description="Обувь появятся в скором времени."
                    imageUrl="https://i.postimg.cc/kgc96wcx/shoes-icon.png"
                    imageHeight="300"
                    imageWidth="300"
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

.empty-shoes {
    margin-top: 60px;
}

.home-product {
    margin-bottom: 20px;
}

</style>