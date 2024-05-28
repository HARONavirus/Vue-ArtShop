<script setup>

</script>

<template> 
	<section class="page-list">
		<div class="container">
			<ul class="pages">
				<router-link to="/suits" style="text-decoration: none;">
				<li>
					<span>Костюмы</span>
				</li>
				</router-link>
				<router-link to="/jackets" style="text-decoration: none;">
				<li>
					<span>Пиджаки</span>
				</li>
				</router-link>
				<router-link to="/shirts" style="text-decoration: none;">
				<li>
					<span>Рубашки</span>
				</li>
				</router-link>
				<router-link to="/pants" style="text-decoration: none;">
				<li>
					<span>Брюки</span>
				</li>
				</router-link>
				<router-link to="/shoes" style="text-decoration: none;">
				<li>
					<span>Обувь</span>
				</li>
				</router-link>
				<router-link to="/accessories" style="text-decoration: none;">
				<li>
					<span>Аксессуары</span>
				</li>
				</router-link>
			</ul>
		</div>
	</section>
</template>

<style scoped>
.page-list .container {
	padding-top: 20px;
	padding-bottom: 10px;
}

.page-list ul {
	background: #333;
	position: relative;
	box-shadow: 0px, 0x, 18.0727px rgba(0, 0, 0, 0.03);
	border-radius: 18.0727px;
	height: 30px;
	width: 100%;
	overflow: hidden;
	margin: 0px;
	padding: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	list-style-type: none;
}

.page-list li {
	font-weight: 300;
	font-size: 20px;
	color: white;
	cursor: pointer;
	transition: transform 0.1s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.95);
	}
}
</style>