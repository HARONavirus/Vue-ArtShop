<script setup>
import axios from "axios"
import { ref, watch } from 'vue'

import InfoBlock from "./InfoBlock.vue";

const mailingDone = ref(false);
const isFormValid = ref(false);

const email = ref("");

const emit = defineEmits(['toggleMailingPopup']);

const doneMail = () => {
    mailingDone.value = true;
};

const saveEmail = async () => {
	try {
		const { data } = await axios.post(`https://6f242298d88c9154.mokky.dev/mailing`, {
            email: document.getElementById("email").value,
		})

		return data
	} catch (err) {
		console.log(err)
	}
}

watch([email], () => {
    isFormValid.value = email.value 
    && /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value);
})
</script>

<template>
	<div class="shadow"></div>
    <div class="mailing-body">
        <div class="cross-img">
            <a @click="emit('toggleMailingPopup', false)">
                <img src="../assets/icons/cross.svg" alt="Иконка закрытия">
            </a>
        </div>

        <div v-if="mailingDone" class="mailing-done">
            <InfoBlock
            title="Подписка на рассылку прошла успешно" 
            description="Промокод со скидкой в 500р. был отправлен на адрес вашей электронной почты."
            imageUrl="src/assets/img/background-icons/done-icon.png"
            imageHeight="120"
            imageWidth="120"
            />
        </div>
        <div v-if="!mailingDone" class="container">
            <body>
                <section class="wrapper">
                    <div class="content">
                        <header>
                        <h1>Подпишитесь на нашу рассылку</h1>
                        </header>
                        <section>
                        <p>
                            Мы будем уведомлять вас о еженедельных акциях и скидках
                        </p>
                        </section>
                        <footer>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Enter your email"
                            required 
                            v-model="email"
                        />
                        <button 
                            :disabled="!isFormValid" 
                            @click="saveEmail(); doneMail()"
                            class="button"
                            >Let's go
                        </button>
                        </footer>
                    </div>
                </section>
            </body>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito');

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

.mailing-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    background-color: white;
    z-index: 5;
    padding: 20px;
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

.mailing-done {
    display: flex;
    height: 80%;
    align-items: center;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .content {
  background: #fff;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  min-width: 200px;
  border-radius: 10px;
  text-align: center;
}

.wrapper .content header h1 {
  font-size: 230%;
  margin-top: 0;
}
.wrapper .content section {
  color: var(--p-color);
  font-size: 20px;
}
.wrapper .content footer {
  padding: var(--padding-15);
}
.wrapper .content footer input {
  border: unset;
  background-color: var(--input-background);
  padding: var(--padding-15);
  font-size: 15px;
  border-radius: var(--radius-50);
  width: 300px;
}
.wrapper .content footer button {
  background-color: var(--button-background);
  color: #fff;
  border: unset;
  width: 120px;
  border-radius: var(--radius-50);
  padding: var(--padding-15);
  margin-left: 10px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    background-color: #333;
  };

  &:disabled {
    background-color: #E5E4E2;
    color: var(--p-color);
  }

  &:active {
    transform: scale(0.95);
  }
}

@media screen and (max-width: 720px) {
  .wrapper .content {
    margin-right: 20px !important;
    margin-left: 20px !important;
    padding: var(--padding-15);
  }
  .wrapper .content footer input {
    width: 200px;
    margin-bottom: 10px;
  }
}

</style>