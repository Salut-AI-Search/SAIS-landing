<template>
  <img class="background" :src="s3 + 'paper/background.png'" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useAssets from '../composables/useAssets';
function getRandomItem(arr: Array<string>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const { getAssets } = useAssets();

const s3 = ref(process.env.VUE_APP_S3);
// const theme = ref(getRandomItem(['paper', 'chalk', 'modern', 'itam']));
const theme = ref('paper');

onMounted(() => {
  console.log(getAssets());
});
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
}
</style>
