<script setup>
import { ref } from 'vue'

import InfoBlock from "@/components/InfoBlock.vue"
import Request from "@/components/Request.vue"
import AtelierPrice from "@/components/AtelierPrice.vue"
import ExtensionPrice from "@/components/ExtensionPrice.vue"

const coin = true

const requestOpen = ref(false);
const atelierPriceOpen = ref(false)
const extensionPriceOpen = ref(false)

const toggleRequestPopup = (acc) => {
   requestOpen.value = acc
}

const toggleAtelierPricePopup = (acc) => {
    atelierPriceOpen.value = acc
}

const toggleExtensionPricePopup = (acc) => {
    extensionPriceOpen.value = acc
}
</script>


<template>
    <Request v-if="requestOpen" @toggleRequestPopup="toggleRequestPopup"/>
    <AtelierPrice v-if="atelierPriceOpen" @toggleAtelierPricePopup="toggleAtelierPricePopup" />
    <ExtensionPrice v-if="extensionPriceOpen" @toggleExtensionPricePopup="toggleExtensionPricePopup" />

    <body>
        <section class="home-product">
            <div class="container">
                <h3>Прокат костюмов и аксессуаров</h3>
                <div v-if="!coin"  class="empty-rent">
                    <InfoBlock 
                    title="На данный момент услуга проката не работает" 
                    description="Мы уведомим Вас о начале работы проката."
                    imageUrl="src/assets/img/background-icons/rental-icon.png"
                    imageHeight="120"
                    imageWidth="120"
                    />
                </div>
                <div v-if="coin" class="rent-block">
                    <div class="howToRent">
                        <div class="howToRent-title">
                            <span>Как взять на прокат в ArtShop?</span>
                        </div>
                        <div class="howToRent-body">
                            <div class="appointment">
                                <div class="img-block">
                                    <img class="phone" src="../assets/img/phone.png" alt="Изображение телефона">
                                </div>
                                <div class="appointment-title">
                                    <b>1. Записаться на примерку</b>
                                </div>
                                <div class="appointment-description">
                                    <span>
                                        Выберете дату и время для примерки. Сформируйте заказ в корзине или оставьте заявку и мы свяжется с Вами
                                    </span>
                                    <div class="button-block">
                                        <button @click="toggleRequestPopup(true)" class="button">
                                            Оставить заявку
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="documents">
                                <div class="img-block">
                                    <img class="idcard" src="../assets/img/idcard.png" alt="Изображение паспорта">
                                </div>
                                <div class="documents-title">
                                    <b>2. Не забыть взять с собой</b>
                                </div>
                                <div class="documents-description">
                                    <span>
                                        Для оформления договора необходимо взять с собой
                                    </span>
                                    <span>паспорт РФ.</span>
                                    <span>
                                        Если паспорта нет, Вы можете попросить друга с паспортом РФ оформить аренду или оставить в залог 10.000 рублей.
                                    </span>
                                </div>
                            </div>
                            <div class="fitting">
                                <div class="img-block">
                                    <img class="loca" src="../assets/img/loca.png" alt="Изображение метки локации">
                                </div>
                                <div class="fitting-title">
                                    <b>3. Приехать на примерку</b>
                                </div>
                                <div class="fitting-description">
                                    <span>
                                        В выбранные дату и время, Вас встретит стилист и поможет с выбором, далее портной отрегулирует длину брюк.
                                    </span>
                                    <span>
                                        К Вашим услугам предоставлена примерочная с зоной ожидания
                                    </span>
                                    <span>для Ваших спутников.</span>
                                </div>
                            </div>
                            <div class="contract">
                                <div class="img-block">
                                    <img class="docs"src="../assets/img/docs.png" alt="Изображение договора">
                                </div>
                                <div class="contract-title">
                                    <b>4. Оформить договор</b>
                                </div>
                                <div class="contract-description">
                                    <span>
                                        Выбранный образ можно забронировать на будущее мероприятие или забрать сразу после примерки.
                                    </span>
                                    <div class="linkDown-block">
                                        <b>Подробнее о всех вариантах аренды смотрите ниже</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rentalOptions">
                        <div class="rentalOptions-title">
                            <span>Варианты проката костюмов в ArtShop?</span>
                        </div>
                        <div class="rentalOptions-body">
                            <div class="takeItNow">
                                <div class="takeItNow-title">
                                    <b>ЗАБРАТЬ СРАЗУ ПОСЛЕ ПРИМЕРКИ</b>
                                </div>
                                <div class="takeItNow-description">
                                    <ul>
                                        <li>
                                            Запишитесь на примерку путём заполнения формы или оформления заказа через корзину
                                        </li>
                                        <li>
                                            Выберете костюм - наши стилисты помогут Вам определить размер и подобрать образ на любое мероприятие
                                        </li>
                                        <li>
                                            <span>
                                                В салоне работает ателье, мы сможем выполнить подгон по фигуре
                                            </span>
                                            <a @click="toggleAtelierPricePopup(true)" class="link">
                                                <b>Смотреть прайс ателье</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <span class="small-title">
                                        На подготовку костюма уйдет от 30 минут до 2 часов в зависимости от сложности подгонки
                                    </span>
                                    <b class="small-title">Условия бронирования:</b>
                                    <ul>
                                        <li>
                                            <span>
                                                После подбора образа, мы оформим договор проката. Цена за прокат фиксированная, на срок 1 сутки
                                            </span>
                                            <a @click="toggleExtensionPricePopup(true)" class="link">
                                                <b>Смотреть условия продления</b>
                                            </a>
                                        </li>
                                        <li>
                                            Оплатите 100% стоимость проката
                                        </li>
                                        <li>
                                            Ожидайте костюм в уютной лаунж зоне, мы угостим Вас ароматным кофе или чаем
                                        </li>
                                    </ul>
                                    <b class="small-title">Что входит в стоимость проката:</b>
                                    <ul>
                                        <li>
                                            Отпаривание костюма и рубашки - входит в стоимость
                                        </li>
                                        <li>
                                            Бабочка или галстук - прокат в подарок при сумме чека 5.000руб
                                        </li>
                                        <li>
                                            Удобная транспортировка: вы получаете фирменные плечики и чехол
                                        </li>
                                        <li>
                                            Химчистка костюма и всех аксессуаров, после завершения аренды Вы просто сдаете комплект нам
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="takeItLater">
                                <div class="takeItLater-titile">
                                    <b>ЗАБРОНИРОВАТЬ НА БУДУЩЕЕ МЕРОПРИЯТИЕ</b>
                                </div>
                                <div class="takeItLater-description">
                                    <ul>
                                        <li>
                                            Запишитесь на примерку путём заполнения формы или оформления заказа через корзину
                                        </li>
                                        <li>
                                            Выберете костюм - наши стилисты помогут Вам определить размер и подобрать образ на любое мероприятие
                                        </li>
                                        <li>
                                            <span>
                                                В салоне работает ателье, мы сможем выполнить подгон по фигуре
                                            </span>
                                            <a @click="toggleAtelierPricePopup(true)" class="link">
                                                <b>Смотреть прайс ателье</b>
                                            </a>
                                        </li>
                                    </ul>
                                    <b class="small-title">Условия бронирования:</b>
                                    <ul>
                                        <li>
                                            <span>
                                                После подбора образа, мы оформим договор проката. Цена за прокат фиксированная, на срок 1 сутки
                                            </span>
                                            <a @click="toggleExtensionPricePopup(true)" class="link">
                                                <b>Смотреть условия продления</b>
                                            </a>
                                        </li>
                                        <li>
                                            Срок хранения брони не больше 1 месяца. Если Вы хотите забронировать костюм больше чем 1 месяц - то стоимость: доп. неделя 500р.,доп. месяц 2000р
                                        </li>
                                        <li>
                                            Для бронирования на вашу дату события, потребуется предоплата от 30% цены аренды костюма
                                        </li>
                                        <li>
                                            В день взятия костюма по договору, Вам нужно будет доплатить оставшуюся сумму аренды
                                        </li>
                                    </ul>
                                    <b class="small-title">Что входит в стоимость проката:</b>
                                    <ul>
                                        <li>
                                            Отпаривание костюма и рубашки - входит в стоимость
                                        </li>
                                        <li>
                                            Подгонка низа брюк под вашем рост
                                        </li>
                                        <li>
                                            Бабочка или галстук - прокат в подарок при сумме чека 5.000руб
                                        </li>
                                        <li>
                                            Удобная транспортировка: вы получаете фирменные плечики и чехол
                                        </li>
                                        <li>
                                            Химчистка костюма и всех аксессуаров, после завершения аренды Вы просто сдаете комплект нам
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="fines">
                                <b>Штрафы: </b>
                                <span>За утерю пуговиц, порчу или утерю костюма штрафы очень лояльны и подробно прописаны в договоре.</span>
                            </div>
                        </div>
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

a {
    text-decoration: none;
    color: gray;
    cursor: pointer;
}

h3 {
    margin-top: 15px;
}

ul {
    margin-bottom: 0;
}

.img-block {
    display: flex;
    justify-content: center;
    margin-right: 35px;
}

.phone {
    width: 70px;
    height: 70px;
    margin-top: 12px;
    margin-bottom: 16px;
}

.docs {
    height: 80px;
    margin-top: 10px;
    margin-bottom: 11px;
}

.loca {
    width: 50px;
    height: 70px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.idcard {
    width: 100px;
    height: 100px;
}

.empty-rent {
    margin-top: 120px;
}

.rent-block {
    margin-top: 30px;
    margin-bottom: 50px;
}

.howToRent {
    margin-bottom: 50px;
}

.howToRent-title, .rentalOptions-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin-bottom: 40px;
}

.howToRent-body {
    display: flex;
    justify-content: space-around;
}

.appointment, .documents, .fitting {
    margin-right: 20px;
}

.appointment, .documents, .fitting, .contract {
    position: relative;
    width: 300px;
    height: 324px;
}

.appointment-title, .documents-title, .fitting-title, .contract-title {
    font-size: 20px;
    margin-bottom: 10px;
}

.appointment-description, .documents-description, .fitting-description, .contract-description {
    display: flex;
    flex-direction: column;
    font-size: 18px;
}

.button-block {
    position: absolute;
    margin: 20px 20px 0px 0px;
  	bottom: 0;
    left: 0;
    right: 0;
}

.button {
    margin-top: 20px;
    transition: transform 0.1s ease-in-out;
    background-color: #333;
    width: 100%;
    height: 100%;
    padding: 1.2rem 0;
    color: white;
    cursor: pointer;

    &:hover {
    background-color: gray;
    }

    &:active {
        transform: scale(0.95);
    }
}

.linkDown-block {
    position: absolute;
  	bottom: 0;
}

.rentalOptions-body {
    font-size: 18px;
}

.small-title {
    margin-bottom: 10px;
}

.takeItNow-title, .takeItLater-titile {
    font-size: 20px;
    margin-bottom: 10px
}

.takeItNow-description {
    display: flex;
    flex-direction: column;
}

.takeItLater-description {
    display: flex;
    flex-direction: column;
}

.takeItNow, .takeItLater {
    margin-bottom: 20px;
}

li {
    margin-bottom: 10px;
}

</style>