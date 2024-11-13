<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const router = useRouter();

onMounted(() => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true';
});

function logout() {
  localStorage.setItem('isLoggedIn', 'false');
  isLoggedIn.value = false;
  router.push('/');
}
</script>

<template>
  <header class="flex flex-row align-items-center justify-content-between">
    <h1>MANGE RACING</h1>
    <button v-if="isLoggedIn" @click="logout" class="logout-button">Logout</button>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 5rem;
  width: 70rem;
  max-width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  h1 {
    font-size: 50px;
    font-weight: bold;
    font-style: oblique;
    color: rgba(255, 255, 255, 0.747);
  }

  .logout-button {
    height: 2.5rem;
    padding: 0 1rem;
    border: none;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
}
</style>
