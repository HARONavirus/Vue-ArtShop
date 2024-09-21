<script setup>
import InfoBlock from "@/components/InfoBlock.vue"

const coin = true
</script>


<template>
    <body>
        <section class="home-product">
            <div class="container">
                <h3>Наши магазины</h3>
                <div v-if="!coin" class="empty-shops">
                    <InfoBlock 
                    title="Наши магазины пока что не открылись" 
                    description="Будем рады видеть вас на открытии."
                    imageUrl="https://i.postimg.cc/hGtn9xyN/shop-icon.png"
                    imageHeight="130"
                    imageWidth="220"
                    />
                </div>

                <div v-if="coin" class="shopAddresses">
                    <div class="shop-1">
                        <span class="adress-1">Санкт-Петербург, Съезжинская ул., 13Б</span>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1be2d934dd1c3244f46717724faec87ddb6030999c5c7fddbd2d30d8cceebca&amp;source=constructor" width="600" height="450" frameborder="0">
                        </iframe>
                    </div>

                    <div class="shop-2">
                        <span class="adress-2">Санкт-Петербург, Полюстровский просп., 84</span>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad0917dbe59611e5f5f24fa0ce4cf6d2e3b1829ae1bff7449ee983a59776eefbd&amp;source=constructor" width="600" height="450" frameborder="0">
                        </iframe>
                    </div>
                </div>
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

.empty-shops {
    margin-top: 80px;
}

.shopAddresses {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.shop-1, .shop-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}

iframe {
    border: 1px solid black;
}

.shop-1 span, .shop-2 span {
    margin-bottom: 20px;
    font-size: 24px;
}
</style>