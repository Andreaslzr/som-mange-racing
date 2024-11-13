<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();


</script>

<template>
  <div class="flex flex-row align-items-center justify-content-evenly">
    <section class="flex flex-column align-items-center">
      <h1>Escolha a categoria que deseja</h1>
    </section>
  </div>
  <br><br><br>
  <div class="flex flex-row align-items-center justify-content-evenly">
    <section @click="router.push('/cross')" class="flex flex-column align-items-center">
      <img src="/public/Group-40.png">
      <h3>Cross Rider 400</h3>

    </section>

    <section @click="router.push('/nimbus')" class="flex flex-column align-items-center">
      <img src="/public/Group-41.png">
      <h3>Nimbus 1000</h3>
    </section>

    <section @click="router.push('/custom')" class="flex flex-column align-items-center">
      <img src="/public/custom.jpg">
      <h3>Custom</h3>
    </section>
  </div>


  

</template>


<style scoped lang="scss">
    img{
        width: 22vw;
    }
    h1{
        font-size: 2.5rem;
    }

    h3{
      font-size: 1.5rem;
    }
    #botao{
        height: 3.2rem;
        width: 20rem;    
        border-radius: 2.5rem;    
        background-color: black;
        color: rgba(255, 255, 255, 0.747);
    }
</style>

