<template>
  <div class="column justify-center" style="height: 100vh">
    <template class="column items-center">
      <h3 style="text-align: center; color: white">Запускаем салют :)</h3>
      <q-spinner color="white" size="7em" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const { loading } = defineProps<{ loading: boolean }>();
const showOverlay = ref(false);
</script>
