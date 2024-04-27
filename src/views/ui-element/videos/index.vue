<template>
    <Layout>
        <headTitle title="Video" items="Elements" />

        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4">
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Aspect Auto Videos</h2>
                    <div>
                        <iframe class="w-full md:aspect-video lg:aspect-auto" src="https://www.youtube.com/embed/-GfNEDs3ERw"></iframe>
                    </div>
                </div>
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Aspect Videos</h2>
                    <div>
                        <iframe class="w-full md:aspect-square lg:aspect-video" src="https://www.youtube.com/embed/-GfNEDs3ERw"></iframe>
                    </div>
                </div>
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Aspect Square Videos</h2>
                    <div>
                        <iframe class="w-full aspect-square" src="https://www.youtube.com/embed/-GfNEDs3ERw"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from '@/layouts/vertical.vue'; // Adjust the path as per your project structure
import headTitle from '@/components/head-title.vue'; // Adjust the path as per your project structure
import { ref } from 'vue'; // Import defineProps from Vue 3

const title = "Videos";

</script>
