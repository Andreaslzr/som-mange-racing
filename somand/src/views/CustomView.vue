<script setup lang="ts">
import { ref } from "vue";

const frente = [
    { id: 1, src: '/Frente-1.png' },
    { id: 3, src: '/Frente-3.png' },
    { id: 7, src: '/Frente-7.png' }
];

const motor = [
    { id: 1, src: '/Motor-1.png' },
    { id: 5, src: '/Motor-5.png' },
    { id: 7, src: '/Motor-7.png' }
];

const rodaFrente = [
    { id: 1, src: '/RodaFrente-1.png' },
    { id: 4, src: '/RodaFrente-4.png' },
    { id: 7, src: '/RodaFrente-7.png' }
];

const rodaTras = [
    { id: 1, src: '/RodaTraseira-1.png' },
    { id: 6, src: '/RodaTraseira-6.png' },
    { id: 7, src: '/RodaTraseira-7.png' }
];

const selectedFrenteIndex = ref(0);
const selectedMotorIndex = ref(0);
const selectedRodaFrenteIndex = ref(0);
const selectedRodaTrasIndex = ref(0);

const changePart = (part, isNext) => {
    const index = part === 'frente' ? selectedFrenteIndex
                : part === 'motor' ? selectedMotorIndex
                : part === 'rodaFrente' ? selectedRodaFrenteIndex
                : selectedRodaTrasIndex;
                
    const items = part === 'frente' ? frente
               : part === 'motor' ? motor
               : part === 'rodaFrente' ? rodaFrente
               : rodaTras;

    const newIndex = isNext ? index.value + 1 : index.value - 1;
    if (newIndex < 0) {
        index.value = items.length - 1;
    } else if (newIndex >= items.length) {
        index.value = 0;
    } else {
        index.value = newIndex;
    }
};
</script>

<template>

    <div v-if="frente.length > 0 && motor.length > 0" class="moto-grid">

        <div class="image-part top">
            <img class="frente-images" :src="frente[selectedFrenteIndex].src" :alt="`frente ${frente[selectedFrenteIndex].id}`">        
            <button @click="changePart('frente', false)" class="prev-selector"></button>
            <button @click="changePart('frente', true)" class="next-selector"></button>
        </div>

        <div class="image-part center">
            <img class="motor-images" :src="motor[selectedMotorIndex].src" :alt="`motor ${motor[selectedMotorIndex].id}`">        
            <button @click="changePart('motor', false)" class="prev-selector"></button>
            <button @click="changePart('motor', true)" class="next-selector"></button>
        </div>

        <div class="image-part left">
            <img class="rodafrente-images" :src="rodaFrente[selectedRodaFrenteIndex].src" :alt="`rodaFrente ${rodaFrente[selectedRodaFrenteIndex].id}`">        
            <button @click="changePart('rodaFrente', false)" class="prev-selector"></button>
            <button @click="changePart('rodaFrente', true)" class="next-selector"></button>
        </div>
        
        <div class="image-part right">
            <img class="rodatras-images" :src="rodaTras[selectedRodaTrasIndex].src" :alt="`rodaTras ${rodaTras[selectedRodaTrasIndex].id}`">        
            <button @click="changePart('rodaTras', false)" class="prev-selector"></button>
            <button @click="changePart('rodaTras', true)" class="next-selector"></button>
        </div>

            <button id="botao" class="mt-4 app-dark-button">Submeter pedido</button>

    </div>
</template>



<style scoped lang="scss">
.moto-grid {
    display: grid;
    grid-template-areas:
        "left top right"
        "left center right"
        "botao botao botao";
    gap: 10px;
    padding: 20px;
    justify-content: center;
    align-items: center;
}

#botao {
    grid-area: botao;
    height: 3.2rem;
    width: 20rem;
    border-radius: 2.5rem;
    background-color: black;
    color: rgba(255, 255, 255, 0.747);
    margin-top: 20px;
    justify-self: center;
}


.image-part {
    position: relative;
    width: 165px;
    height: 165px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid gray;
}

.image-part img {
    width: 100%;
    height: 100%;
}

.image-part.top { grid-area: top; }
.image-part.center { grid-area: center; }
.image-part.left { grid-area: left; }
.image-part.right { grid-area: right; }

.prev-selector, .next-selector {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
}

.image-part.top .prev-selector {
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
}
.image-part.top .next-selector {
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
}

.image-part.center .prev-selector {
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
}
.image-part.center .next-selector {
    right: -30px;
    top: 50%;
    transform: translateY(-50%);
}

.image-part.left .prev-selector {
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
}
.image-part.left .next-selector {
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
}

.image-part.right .prev-selector {
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
}
.image-part.right .next-selector {
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
}

.image-part.left .prev-selector::after,
.image-part.right .prev-selector::after {
    content: "\25B2"; 
}

.image-part.left .next-selector::after,
.image-part.right .next-selector::after {
    content: "\25BC"; 
}

.image-part.top .prev-selector::after,
.image-part.center .prev-selector::after {
    content: "\25C4"; 
}

.image-part.top .next-selector::after,
.image-part.center .next-selector::after {
    content: "\25BA"; 
}
</style>
