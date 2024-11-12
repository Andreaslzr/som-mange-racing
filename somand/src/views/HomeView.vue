<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();


</script>

<template>
  <div class="flex flex-row align-items-center justify-content-evenly">
    <section class="flex flex-column align-items-center">
      <h3>Somos especialistas em fazer sonhos em 2 rodas, venha conferir as maravilhas da Indústria 4.0!</h3>
    </section>
    <section>
      <h3>Estamos desde 1984 inovando conceitos e criando tendências no mercado motociclista.</h3><br>
      <h3>Contando com o nosso arsenal tecnológico, você pode criar a motocicleta que tem a sua cara!</h3>
    </section>
  </div>
  <div class="flex flex-row align-items-center justify-content-evenly">
    <section class="flex flex-column align-items-center">
      <img src="/public/Group-40.png">
      <p>Cross Rider 400</p>

    </section>

    <section class="flex flex-column align-items-center">
      <img src="/public/Group-41.png">
      <p>Nimbus 1000</p>
    </section>

    <section class="flex flex-column align-items-center">
      <img src="/public/Group-42.png">
      <p>Travelar 600</p>
    </section>
  </div>
  <br><br><br>
    <section class="flex flex-column align-items-center">
      <button id="botao" @click="router.push('/login')" class="mt-4 app-dark-button">QUERO A MINHA!</button>
    </section>

  

</template>


<style scoped lang="scss">

    h3{
      font-size: 1rem;
        width: 30rem;
        font-style: oblique;
    }
    #botao{
        height: 3.2rem;
        width: 20rem;    
        border-radius: 2.5rem;    
        background-color: black;
        color: rgba(255, 255, 255, 0.747);
    }
</style>

