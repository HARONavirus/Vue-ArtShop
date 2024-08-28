<script setup>
import axios from "axios"
import { ref, onMounted, watch } from "vue";

import InfoBlock from "./InfoBlock.vue";

const name = ref("");
const email = ref("");
const productName = ref("");
const phoneNumber = ref("");

const isFormValid = ref(false);
const requestDone = ref(false);

const emit = defineEmits(['toggleRequestPopup']);

const doneRequest = () => {
    requestDone.value = true;
};

// Отправляем на сервер данные о заявке
const createRequest = async () => {
	try {
		const { data } = await axios.post(`https://6f242298d88c9154.mokky.dev/requests`, {
			name: document.getElementById("name").value,
            productName: document.getElementById("productName").value,
            email: document.getElementById("email").value,
            phoneNumber: document.getElementById("phoneNumber").value,
		})

		return data
	} catch (err) {
		console.log(err)
	}
}

// Валидация полей на корректный ввод данных
onMounted(() => {
    const input = document.getElementById('phoneNumber')

    const formatPhone = (value) => {
        const x = value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)
        return !x[2] ? x[1] : '+' + x[1] + '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '')
    }

    input.addEventListener('input', (e) => {
    input.value = formatPhone(e.target.value)
    })
})

watch([name, email, productName, phoneNumber], () => {
    isFormValid.value = name.value && email.value && productName.value && phoneNumber.value
    && /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value);
})

</script>

<template>
	<div class="shadow"></div>
    <div class="request-body">
        <div class="cross-img">
            <a @click="emit('toggleRequestPopup', false)">
                <img src="../assets/icons/cross.svg" alt="Иконка закрытия">
            </a>
        </div>

        <div v-if="requestDone" class="request-done">
            <InfoBlock
            title="Заявка на примерку успешно создана" 
            description="В скором времени с Вами свяжется наш консультант."
            imageUrl="src/assets/img/background-icons/done-icon.png"
            imageHeight="120"
            imageWidth="120"
            />
        </div>

        <div v-if="!requestDone" class="content">
            <div class="request-content">
                <div class="request-title">
                    <span>ОБРАТНЫЙ ЗВОНОК</span>
                </div>
                <div class="request-description">
                    <span>Мы перезвоним Вам в ближайшее время</span>
                </div>
                <div class="request-input">
                    <div class="bz-left">
                        <input 
                            class="bz-btmmargin" 
                            type="text" id="name" 
                            placeholder="Ваше имя" 
                            required 
                            v-model="name"
                        />
                        <input
                            class="bz-btmmargin" 
                            type="email" 
                            id="email" 
                            placeholder="example@email.com" 
                            required 
                            v-model="email"
                        />
                    </div>
                    <div class="bz-right">
                        <input 
                            class="bz-btmmargin" 
                            type="text" 
                            id="productName" 
                            placeholder="Название товара"
                            required 
                            v-model="productName"
                        />
                        <input c
                            lass="bz-btmmargin" 
                            type="text" 
                            id="phoneNumber" 
                            placeholder="+7(555) 555-5555" 
                            required 
                            v-model="phoneNumber"
                        />
                    </div>
                    <div class="bz-clear"></div>
                        <input
                            :disabled="!isFormValid" 
                            @click="createRequest(); doneRequest()" 
                            class="bz-topmargin" 
                            type="submit" 
                            value="Оставить заявку"
                        />
                    <div class="bz-clear"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.shadow {
    position: fixed; 
    top: 0; 
    left: 0; 
    height: 100vh; 
    width: 100vw; 
    background-color: black; 
    z-index: 4; 
    opacity: 0.7;
}

.request-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    background-color: white;
    z-index: 5;
    padding: 10px;
}

.cross-img {
    display: flex;
    justify-content: end;
}

img {
    widows: 40px;
    height: 40px;
    opacity: 0.3;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:hover {
        opacity: 1;
	}

    &:active {
        transform: scale(0.8);
    }
}

.request-done {
    display: flex;
    height: 80%;
    align-items: center;
}

.request-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.request-title {
    font-size: 32px;
}

.request-description {
    margin-top: 5px;
    font-size: 20px;
}

.request-input {
    margin-top: 40px;
}

.bz-left {float: left; width: 49%; padding-right: 2%; min-width: 350px;}
.bz-right {float: left; width: 49%; min-width: 350px;}
.bz-clear {clear: both;}

input[type='text'], input[type='email'] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: 0;
  display: block;
  width: 100%;
  padding: 7px;
  border: 0;
  border: 1px solid gray;
  background: transparent;
  margin-bottom: 10px;
  font: 19px Arial,Helvetica,sans-serif;
  height: 80px;
}

input[type='submit'] {
  float: right;
  background-color: gray;
  border: none;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.40);
  padding: 18px 269px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 24px 2px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
}

input[type='submit']:hover {
  background-color: #333;
}

input[type='submit']:disabled {
    background-color: lightgrey;
}

input[type='submit']:active {
    transform: scale(0.95);
}

</style>