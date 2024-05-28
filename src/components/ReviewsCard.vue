<script setup>

defineProps({
	id: Number,
	fullname: String,
  picture: String,
	description: String,
})
</script>

<template>
		<div class="product">
      <div class="profileInfo-block">
        <img :src="picture" alt="">
        <p class="fullname">{{ fullname }}</p>
      </div>
      <div class="description-block">
        <p class="description">{{ description }}</p>
      </div>
   	</div>
</template>

<style scoped>
.product {
  width: 800px;
  height: 100%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  cursor: pointer;
  padding: 10px 10px 10px 10px;
}

.profileInfo-block {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.profileInfo-block img {
  height: 50px;
  margin-right: 10px;
}

.profileInfo-block p {
  font-size: 19px;
}

.description-block p {
  font-size: 18px;
}

.fullname {
  font-weight: bold;
}

p  {
    margin-bottom: 0;
}
</style>