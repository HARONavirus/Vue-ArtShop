<script setup>
import InfoBlock from "@/components/InfoBlock.vue"
import CardList from "@/components/CardList.vue"
import PageList from "@/components/PageList.vue"

import { inject, computed } from 'vue'

const { items } = inject('items')

const filteredItems = computed(() => {
    return items.value.filter(item => item.category.includes('Костюмы'));
});

</script>

<template>
    <body>
        <PageList />
        
        <section class="home-product">
            <div class="container">
                <h3>Костюмы</h3>
                <div v-if="filteredItems.length === 0" class="empty-suits">
                    <InfoBlock 
                    title="На данный момент в нашем магазине отсутствуют костюмы" 
                    description="Костюмы появятся в скором времени."
                    imageUrl="src/assets/img/background-icons/suit-icon.png"
                    imageHeight="220"
                    imageWidth="140"
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

.empty-suits {
    margin-top: 120px;
}

.home-product {
    margin-bottom: 20px;
}

</style>