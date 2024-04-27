<template>
    <Layout>
        <headTitle title="Images" items="Elements" />
        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Images Responsive</h2>
                    <div>
                        <img src="@/assets/images/images-6.jpg" class="object-cover w-full md:h-72" alt="">
                    </div>
                </div>
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Images Rounded</h2>
                    <div>
                        <img src="@/assets/images/images-2.jpg" class="object-cover w-full rounded-md md:h-72" alt="">
                    </div>
                </div>
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Images Circle</h2>
                    <div>
                        <img src="@/assets/images/images-3.jpg" class="mx-auto rounded-full h-44 w-44" alt="">
                    </div>
                </div>
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Images With Ring</h2>
                    <div>
                        <img src="@/assets/images/images-4.jpg" class="object-cover w-full rounded ring-offset-4 ring-2 ring-light dark:ring-darkborder md:h-72" alt="">
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

const title = "Images";

</script>
