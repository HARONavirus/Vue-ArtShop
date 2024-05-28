<script setup>

const emit = defineEmits(['toggleExtensionPricePopup']);

</script>


<template>
	<div class="shadow"></div>
    <div class="extensionPrice-body">
        <div class="cross-img">
            <a @click="emit('toggleExtensionPricePopup', false)">
                <img src="../assets/icons/cross.svg" alt="Иконка закрытия">
            </a>
        </div>
        <h3 class="title">СТОИМОСТЬ ПРОДЛЕНИЯ ЗА ДОПОЛНИТЕЛЬНЫЙ ДЕНЬ</h3>
        <div class="container">
            <div class="table-left">
                <table>
                    <thead>
                        <tr>
                        <th>Цена аренды за костюм</th>
                        <th><b>доплата за 1 сутки</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1900р.</td>
                        <td><b>300р.</b></td>
                        </tr>
                        <tr>
                        <td>2400р.</td>
                        <td><b>400р.</b></td>
                        </tr>
                        <tr>
                        <td>2900р.</td>
                        <td><b>400р.</b></td>
                        </tr>
                        <tr>
                        <td>3400р.</td>
                        <td><b>400р.</b></td>
                        </tr>
                        <tr>
                        <td>3900р.</td>
                        <td><b>600р.</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-right">
                <table>
                    <thead>
                        <tr>
                        <th>Цена аренды за костюм</th>
                        <th><b>доплата за 1 сутки</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>4400р.</td>
                        <td><b>600р.</b></td>
                        </tr>
                        <tr>
                        <td>4900р.</td>
                        <td><b>600р.</b></td>
                        </tr>
                        <tr>
                        <td>5400р.</td>
                        <td><b>800р.</b></td>
                        </tr>
                        <tr>
                        <td>5900р.</td>
                        <td><b>800р.</b></td>
                        </tr>
                        <tr>
                        <td>6400р.</td>
                        <td><b>990р.</b></td>
                        </tr>
                    </tbody>
                </table>
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

.extensionPrice-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 375px;
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

.title {
    font-size: 23px;
    margin-left: 45px;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
}

table {
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
}

td, th {
    font-size: 16px;
    padding: 5px;
}

</style>