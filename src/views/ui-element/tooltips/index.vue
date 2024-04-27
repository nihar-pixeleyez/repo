<script setup>
import Layout from '@/layouts/vertical.vue'; // Adjust the path as per your project structure
import headTitle from '@/components/head-title.vue'; // Adjust the path as per your project structure
import { ref, onMounted, defineProps } from 'vue'; // Import ref, onMounted, and defineProps from Vue 3
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const props = defineProps({
    title: String,
});

onMounted(() => {
    const buttonRefs = document.querySelectorAll('.tippy-tooltip');
    buttonRefs.forEach((buttonRef) => {
        tippy(buttonRef, {
            content: buttonRef.dataset.tippyContent,
            arrow: true,
            placement: buttonRef.dataset.tippyPlacement,
            animation: buttonRef.dataset.tippyAnimation,
            trigger: 'mouseenter',
            duration: 300,
        });
    });
});
</script>

<template>
    <Layout>
        <headTitle title="Tooltip" items="Elements" />
        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4">
                <!-- Tooltip Basic -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Tooltip Basic</h2>
                    <div class="flex flex-wrap gap-4">
                        <button ref="buttonRefs" type="button" data-tippy-content="Tooltip on top" data-tippy-arrow="true" data-tippy-placement="top" class="transition-all duration-300 border rounded-md tippy-tooltip btn text-purple border-purple hover:bg-purple hover:text-white">Tooltip on top</button>
                        <button ref="buttonRefs" type="button" data-tippy-content="Tooltip on right" data-tippy-arrow="true" data-tippy-placement="right" class="transition-all duration-300 border rounded-md tippy-tooltip btn text-purple border-purple hover:bg-purple hover:text-white">Tooltip on right</button>
                        <button ref="buttonRefs" type="button" data-tippy-content="Tooltip on bottom" data-tippy-arrow="true" data-tippy-placement="bottom" class="transition-all duration-300 border rounded-md tippy-tooltip btn text-purple border-purple hover:bg-purple hover:text-white">Tooltip on bottom</button>
                        <button ref="buttonRefs" type="button" data-tippy-content="Tooltip on left" data-tippy-arrow="true" data-tippy-placement="left" class="transition-all duration-300 border rounded-md tippy-tooltip btn text-purple border-purple hover:bg-purple hover:text-white">Tooltip on left</button>
                    </div>
                </div>
                <!-- Tooltip Animation -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Tooltip Animation</h2>
                    <div class="flex flex-wrap gap-4">
                        <button type="button" data-tippy-content="Tooltip animation" data-tippy-arrow="true" data-tippy-animation="scale" class="text-black transition-all duration-300 border rounded-md tippy-tooltip btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black">Scale</button>
                        <button type="button" data-tippy-content="Tooltip animation" data-tippy-arrow="true" data-tippy-animation="shift-toward" class="text-black transition-all duration-300 border rounded-md tippy-tooltip btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black">Shift Toward</button>
                        <button type="button" data-tippy-content="Tooltip animation" data-tippy-arrow="true" data-tippy-animation="perspective" class="text-black transition-all duration-300 border rounded-md tippy-tooltip btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black">Perspective</button>
                        <button type="button" data-tippy-content="Tooltip animation" data-tippy-arrow="true" data-tippy-animation="shift-away" class="text-black transition-all duration-300 border rounded-md tippy-tooltip btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black">Shift Away</button>
                    </div>
                </div>
                <!-- Tooltip on Click -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Tooltip on Click</h2>
                    <div class="flex flex-wrap gap-4">
                        <button ref="buttonRefs" type="button" data-tippy-content="Tooltip on top" data-tippy-arrow="true" data-tippy-placement="top" data-tippy-trigger="click" class="transition-all duration-300 border rounded-md tippy-tooltip btn text-purple border-purple hover:bg-purple hover:text-white">Tooltip on top</button>
                        <button ref="buttonRefs" type="button" data-tippy-content="Tooltip on right" data-tippy-arrow="true" data-tippy-placement="right" data-tippy-trigger="click" class="transition-all duration-300 border rounded-md tippy-tooltip btn text-purple border-purple hover:bg-purple hover:text-white">Tooltip on right</button>
                        <button ref="buttonRefs" type="button" data-tippy-content="Tooltip on bottom" data-tippy-arrow="true" data-tippy-placement="bottom" data-tippy-trigger="click" class="transition-all duration-300 border rounded-md tippy-tooltip btn text-purple border-purple hover:bg-purple hover:text-white">Tooltip on bottom</button>
                        <button ref="buttonRefs" type="button" data-tippy-content="Tooltip on left" data-tippy-arrow="true" data-tippy-placement="left" data-tippy-trigger="click" class="transition-all duration-300 border rounded-md tippy-tooltip btn text-purple border-purple hover:bg-purple hover:text-white">Tooltip on left</button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

