<template>
  <div style="overflow-x: hidden">
    <div v-if="showOverlay" class="overlay" />
    <LoadingComponent v-if="showLoadingPage" :loading="loading" />
    <HomeComponent @finish-loading="loading = false" />
  </div>
</template>

<script setup lang="ts">
import HomeComponent from '../components/HomeComponent';
import LoadingComponent from '../components/LoadingComponent';
import { ref, watch } from 'vue';

const loading = ref(true);
const showLoadingPage = ref(true);
const showOverlay = ref(false);

watch(loading, () => {
  showOverlay.value = true;
  setTimeout(() => {
    showLoadingPage.value = false;
  }, 300);
  setTimeout(() => {
    showOverlay.value = false;
  }, 1200);
});
</script>

<style lang="scss" scoped>
@keyframes overlay-animation {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.overlay {
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: absolute;
  animation: forwards overlay-animation 1.2s;
  z-index: 9999;
}
</style>
