<template>
  <Layout>
    <headTitle title="Lightbox" items="Components" />

    <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
      <div class="grid grid-cols-1 gap-4">
        <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
          <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
            Example
          </h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div v-for="slide in slides" :key="slide.src">
              <button @click="showMultiple">
                <img :src="slide.src" :alt="slide.alt" class="rounded-xl" />
              </button>
            </div>
          </div>
          <VueEasyLightbox :visible="visible" @hide="onHide" :imgs="imgsRef" :index="indexRef">
            <template #slides>
              <div v-for="slide in slides" :key="slide">
                {{ slide.src }}
                <img :src="slide.src" :alt="slide.alt" class="rounded-xl" @click="openLightbox(slide)" />
              </div>
            </template>
          </VueEasyLightbox>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue';
import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';
import VueEasyLightbox from 'vue-easy-lightbox';

import images1 from '@/assets/images/images-1.jpg';
import images2 from '@/assets/images/images-2.jpg';
import images3 from '@/assets/images/images-3.jpg';
import images4 from '@/assets/images/images-4.jpg';
import images5 from '@/assets/images/images-5.jpg';
import images6 from '@/assets/images/images-6.jpg';

const title = "Lightbox";
const indexRef = ref(0); // default 0
const imgsRef = ref([]);
const slides = ref([
  { src: images1, alt: "img 1 to 6" },
  { src: images2, alt: "img 1 to 6" },
  { src: images3, alt: "img 1 to 6" },
  { src: images4, alt: "img 1 to 6" },
  { src: images5, alt: "img 1 to 6" },
  { src: images6, alt: "img 1 to 6" },
]);

const visible = ref(false); // Assuming you want the lightbox to be initially hidden
const onShow = () => {
  visible.value = true
}
const showMultiple = () => {
  imgsRef.value = [
    images1, images2, images3, images4, images5, images6,
  ];
  indexRef.value = 0 // index of imgList
  onShow()
};

const openLightbox = (slide) => {
  visible.value = true;
  // You can also set the current slide in the lightbox here
};

const onHide = () => (visible.value = false);
</script>
