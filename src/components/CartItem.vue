<script setup>
const emit = defineEmits(['onClickRemove'])
    defineProps({
        picture: String,
        title: String,
	    price: Number,
        rent: Number,
    })
</script>

<template>
    <div class="card">
        <img class="picture" :src="picture" alt="product">

        <div class="title">
            <p>{{ title }}</p>

            <div class="price-del">
                <div class="price">
                    <b>{{ price }} ₽</b>
                    <span>{{ rent }} ₽/Сут.</span>
                </div>
                <div class="delete-item">
                    <img @click="emit('onClickRemove')" class="close-icon" src="../assets/icons/close.svg" alt="Close">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #e0e0e0;
    padding: 4px;
    border-radius: 0.75rem;
    gap: 20px;
}

.picture {
    width: 110px;
    height: 110px;
    border-radius: 0.75rem;
}

.title {
    display: flex;
    flex-direction: column;
    
}

.price-del {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.price {
    display: flex;
    flex-direction: column;
}

.price span {
    font-size: 15px;
}

.close-icon {
    opacity: 0.4;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;

    &:hover {
        opacity: 1;
	}

    &:active {
        transform: scale(0.95);
    }
}
</style>