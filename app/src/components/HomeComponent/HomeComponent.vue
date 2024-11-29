<template>
  <div :class="!readyToShow ? 'hidden' : ''">
    <div class="background column">
      <img :src="generateLink('background-1.png')" @load="loadedAsset" />
      <img :src="generateLink('background-2.png')" @load="loadedBackground" />
      <img :src="generateLink('background-3.png')" @load="loadedBackground" />
      <img :src="generateLink('background-4.png')" @load="loadedBackground" />
      <img :src="generateLink('background-5.png')" @load="loadedBackground" />
      <img :src="generateLink('background-6.png')" @load="loadedBackground" />
    </div>

    <button
      style="position: absolute; right: 0px; top: 200px"
      @click="step += 1"
    >
      +
    </button>
    <button
      style="position: absolute; right: 0px; top: 250px"
      @click="step -= 1"
    >
      -
    </button>

    <div class="letter s-1" :class="`step${step}`">
      <img class="" :src="generateLink('s-1.svg')" @load="loadedAsset" />
    </div>
    <div class="letter a-1" :class="`step${step}`">
      <img class="" :src="generateLink('a-1.svg')" @load="loadedAsset" />
    </div>
    <div class="letter l" :class="`step${step}`">
      <img class="" :src="generateLink('l.svg')" @load="loadedAsset" />
    </div>
    <div class="letter u" :class="`step${step}`">
      <img class="" :src="generateLink('u.svg')" @load="loadedAsset" />
    </div>
    <div class="letter t" :class="`step${step}`">
      <img class="" :src="generateLink('t.svg')" @load="loadedAsset" />
    </div>
    <div class="letter excl" :class="`step${step}`">
      <img class="" :src="generateLink('excl.svg')" @load="loadedAsset" />
    </div>
    <div class="letter a-2" :class="`step${step}`">
      <img class="" :src="generateLink('a-2.svg')" @load="loadedAsset" />
    </div>
    <div class="letter i" :class="`step${step}`">
      <img class="" :src="generateLink('i.svg')" @load="loadedAsset" />
    </div>
    <div class="letter s-2" :class="`step${step}`">
      <img class="" :src="generateLink('s-2.svg')" @load="loadedAsset" />
    </div>
    <div class="letter e" :class="`step${step}`">
      <img class="" :src="generateLink('e.svg')" @load="loadedAsset" />
    </div>
    <div class="letter a-3" :class="`step${step}`">
      <img class="" :src="generateLink('a-3.svg')" @load="loadedAsset" />
    </div>
    <div class="letter r" :class="`step${step}`">
      <img class="" :src="generateLink('r.svg')" @load="loadedAsset" />
    </div>
    <div class="letter c" :class="`step${step}`">
      <img class="" :src="generateLink('c.svg')" @load="loadedAsset" />
    </div>

    <div class="letter h" :class="`step${step}`">
      <img class="" :src="generateLink('h.svg')" @load="loadedAsset" />
    </div>

    <p class="text chat-title">перейти в чат</p>
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref, onMounted, watch } from 'vue';
import useAssets from '../../composables/useAssets';
import './logoAnimation.scss';
function getRandomItem(arr: Array<string>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const { getAssets } = useAssets();

const s3 = ref({});
// const theme = ref(getRandomItem(['paper', 'chalk', 'modern', 'itam']));
const theme = ref('paper');

const emits = defineEmits(['finish-loading']);
const loading = ref(true);
const readyToShow = ref(false);
const totalLoadedAssets = ref(0);
const totalLoadedBackground = ref(0);

const generateLink = (file) => {
  return s3.value[`${theme.value}/${file}`];
};

const loadedAsset = () => {
  totalLoadedAssets.value += 1;
  areAllAssetsLoaded();
};

const loadedBackground = () => {
  totalLoadedBackground.value += 1;
};

const areAllAssetsLoaded = () => {
  console.log(totalLoadedAssets.value);
  if (totalLoadedAssets.value == 15) {
    loading.value = false;
    emits('finish-loading');
    setTimeout(() => {
      readyToShow.value = true;
    }, 300);
    setTimeout(() => {
      updateAnimation.value = !updateAnimation.value;
    }, 1200);
  }
};

const step = ref(1);
const updateAnimation = ref(false);

watch([step, updateAnimation], () => {
  setTimeout(() => {
    if (step.value > 9) {
    } else if (step.value > 4) {
      // step.value = 1;
    } else {
      step.value = step.value + 1;
    }
  }, 400);
});

onMounted(() => {
  getAssets().then((res) => {
    s3.value = res;
  });
});
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}

.background {
  width: 100%;
  position: absolute;
  img {
    width: 100vw;
  }
}

.text {
  font-family: 'Marker', sans-serif;
}

.chat-title {
  position: absolute;
  bottom: 20vh;
  font-size: 5em;
  width: 40vw;
  text-align: center;
  left: 30vw;
}

.letter {
  position: absolute;
  width: 7vw;
  height: 7vw;

  img {
    width: inherit;
    height: inherit;
  }
}
</style>
