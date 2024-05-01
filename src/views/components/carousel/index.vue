<script setup>
import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import img1 from "../../../assets/images/images-1.jpg";
import img2 from "../../../assets/images/images-2.jpg";
import img3 from "../../../assets/images/images-3.jpg";
import img4 from "../../../assets/images/images-4.jpg";
import img5 from "../../../assets/images/images-5.jpg";
import img6 from "../../../assets/images/images-6.jpg";
import img7 from "../../../assets/images/images-7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const scaleValue = ref(0.2);

const handleSlideChange = (swiper) => {
    scaleValue.value += 0.2;
    if (scaleValue.value > 1) {
        scaleValue.value = 0.2;
    }
    swiper.update();
};
</script>
<style>
.swiper-button-prev ,.swiper-button-next {
    color : #fff;
}
</style>
<template>
    <Layout>
        <headTitle title="Carousel" items="Components" />

        <div>
            <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <!-- swiper -->
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Basic Carousel
                        </h2>
                        <Swiper class="swiper SwiperDefault" dir="ltr" :slides-per-view="1" :autoplay="{ delay: 3000 }">
                            <SwiperSlide>
                                <img :src="img1" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img2" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img3" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img4" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img5" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <!--  slider controls -->
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Basic Carousel With Arrow
                        </h2>
                        <Swiper class="swiper SwiperwithArrows" dir="ltr" :slides-per-view="1" :modules="[Navigation]" :navigation="{
    nextEl: '.text-white .swiper-button-next',
    prevEl: '.text-white .swiper-button-prev '
                        }">
                            <SwiperSlide>
                                <img :src="img6" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img7" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img2" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img4" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img5" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <div class="swiper-button-next text-white" :style="navigationStyles"></div>
                            <div class="swiper-button-prev text-white" :style="navigationStyles"></div>
                        </Swiper>
                    </div>
                    <!--  end of col -->
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Basic Carousel With pagination
                        </h2>
                        <Swiper class="swiper SwiperwithArrows" dir="ltr" :slides-per-view="1" :modules="[Pagination]"  :pagination="{ clickable: true }">
                            <SwiperSlide>
                                <img :src="img5" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img4" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img2" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img6" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img7" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <!--  end of carousel container -->
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Basic Carousel With Progress
                        </h2>
                        <Swiper class="swiper SwiperwithProgress" dir="ltr" :slides-per-view="1" :modules="[Navigation]" :navigation="true" :pagination="{ clickable: true }" @slideChange="handleSlideChange">
                            <div class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal">
                                <span class="swiper-pagination-progressbar-fill" :style="{
                                    transform: 'translate3d(0px, 0px, 0px) scaleX(' + scaleValue + ') scaleY(1)',
                                    transitionDuration: '300ms'
                                }"></span>
                            </div>
                            <SwiperSlide>
                                <img :src="img4" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img3" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img2" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img6" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img7" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                        </Swiper>
                        <div class="swiper-pagination"></div>
                    </div>
                    <!--  -->
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Basic Carousel With Multiple Slides
                        </h2>
                        <Swiper class="swiper SwiperMultiple" dir="ltr" :modules="[ Pagination]" :slides-per-view="2" :space-between="30" :pagination="{ clickable: true }">
                            <SwiperSlide>
                                <img :src="img7" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img6" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img2" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img4" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="img3" alt="slider" class="object-cover w-full max-h-96" />
                            </SwiperSlide>
                        </Swiper>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
