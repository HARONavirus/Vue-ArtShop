<script setup>
import InfoBlock from "@/components/InfoBlock.vue"
import CardList from "@/components/CardList.vue"
import PageList from "@/components/PageList.vue"

import { inject, computed } from 'vue'

const { items } = inject('items')

const filteredItems = computed(() => {
    return items.value.filter(item => item.category.includes('Брюки'));
});

</script>

<template>
    <body>
        <PageList />
        
        <section class="home-product">
            <div class="container">
                <h3>Брюки</h3>
                <div v-if="filteredItems.length === 0" class="empty-pants">
                    <InfoBlock 
                    title="На данный момент в нашем магазине отсутствуют брюки" 
                    description="Брюки появятся в скором времени."
                    imageUrl="src/assets/img/background-icons/pants-icon.png"
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

.empty-pants {
    margin-top: 110px;
}

.home-product {
    margin-bottom: 20px;
}

</style>