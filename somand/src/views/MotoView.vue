<script setup lang="ts">
import { ref } from "vue";

const frente = [
    { id: 1, src: '/Frente-1.png' },
    { id: 2, src: '/Frente-2.png' },
    { id: 3, src: '/Frente-3.png' },
    { id: 4, src: '/Frente-4.png' },
    { id: 5, src: '/Frente-5.png' },
    { id: 6, src: '/Frente-6.png' },
    { id: 7, src: '/Frente-7.png' }
];

const motor = [
    { id: 1, src: '/Motor-1.png' },
    { id: 2, src: '/Motor-2.png' },
    { id: 3, src: '/Motor-3.png' },
    { id: 4, src: '/Motor-4.png' },
    { id: 5, src: '/Motor-5.png' },
    { id: 6, src: '/Motor-6.png' },
    { id: 7, src: '/Motor-7.png' }
];

const rodaFrente = [
    { id: 1, src: '/RodaFrente-1.png' },
    { id: 2, src: '/RodaFrente-2.png' },
    { id: 3, src: '/RodaFrente-3.png' },
    { id: 4, src: '/RodaFrente-4.png' },
    { id: 5, src: '/RodaFrente-5.png' },
    { id: 6, src: '/RodaFrente-6.png' },
    { id: 7, src: '/RodaFrente-7.png' }
];

const rodaTras = [
    { id: 1, src: '/RodaTraseira-1.png' },
    { id: 2, src: '/RodaTraseira-2.png' },
    { id: 3, src: '/RodaTraseira-3.png' },
    { id: 4, src: '/RodaTraseira-4.png' },
    { id: 5, src: '/RodaTraseira-5.png' },
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
    <div v-if="frente.length > 0 && motor.length > 0" class="image-grid">
        <div class="image-part top">
            <img class="frente-images"
                 :src="frente[selectedFrenteIndex].src" 
                 :alt="`frente ${frente[selectedFrenteIndex].id}`">        
            <button @click="changePart('frente', false)" class="prev-selector"></button>
            <button @click="changePart('frente', true)" class="next-selector"></button>
        </div>
        
        <div class="image-part center">
            <img class="motor-images"
                 :src="motor[selectedMotorIndex].src" 
                 :alt="`motor ${motor[selectedMotorIndex].id}`">        
            <button @click="changePart('motor', false)" class="prev-selector"></button>
            <button @click="changePart('motor', true)" class="next-selector"></button>
        </div>
        
        <div class="image-part rodafrente">
            <img class="rodafrente-images"
                 :src="rodaFrente[selectedRodaFrenteIndex].src" 
                 :alt="`rodaFrente ${rodaFrente[selectedRodaFrenteIndex].id}`">        
            <button @click="changePart('rodaFrente', false)" class="prev-selector"></button>
            <button @click="changePart('rodaFrente', true)" class="next-selector"></button>
        </div>
        
        <div class="image-part rodatras">
            <img class="rodatras-images"
                 :src="rodaTras[selectedRodaTrasIndex].src" 
                 :alt="`rodaTras ${rodaTras[selectedRodaTrasIndex].id}`">        
            <button @click="changePart('rodaTras', false)" class="prev-selector"></button>
            <button @click="changePart('rodaTras', true)" class="next-selector"></button>
        </div>
    </div>
</template>


<style scoped lang="scss">
.image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    width: 400px;
    height: 400px;
}

.image-part {
    position: relative;
    border: 3px solid gray;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

button {
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    cursor: pointer;
}

.prev-selector {
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
}

.next-selector {
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
}
</style>
