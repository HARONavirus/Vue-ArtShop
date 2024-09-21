<script setup>
import CardList from "@/components/CardList.vue"
import InfoBlock from "@/components/InfoBlock.vue"

import { inject } from 'vue'

const { filteredItemsFav } = inject('filter');

</script>

<template>
    <body>
        <section class="home-product">
            <div class="container">
                <h3>Мои закладки</h3>
                <div v-if="filteredItemsFav.length === 0" class="empty-favorites">
                    <InfoBlock 
                    title="У вас пока что-то нет закладок" 
                    description="Добавьте хотя бы один костюм в закладки."
                    imageUrl="https://i.postimg.cc/3rs3PkND/sad-smile-icon.png"
                    imageHeight="100"
                    imageWidth="100"
                    />
                </div>
                <CardList :items="filteredItemsFav"/>
            </div>
        </section> 
    </body>
</template>

<style scoped>
body {
    height: 100%;
}

h3 {
    margin-top: 15px;
    margin-bottom: 15px;
}

.empty-favorites {
margin-top: 120px;
}
</style>