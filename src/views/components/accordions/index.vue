<script setup>
import Accordion from "./Accordion.vue";
import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';

const accordionItems = [
    { title: "Accordion Item #1", arrow: "M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" },
    { title: "Accordion Item #2", arrow: "M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" },
    { title: "Accordion Item #3", arrow: "M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" },
];
const accordionIconItems = [
    { title: "Accordion Item #1", icon: "M14 18V20L16 21V22H8L7.99639 21.0036L10 20V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H14ZM4 5V14H20V5H4Z" },
    { title: "Accordion Item #2", icon: "M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z" },
    { title: "Accordion Item #3", icon: "M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z" },
];
const accordionArrowItems = [
    { title: "Accordion Item #1" },
    { title: "Accordion Item #2" },
    { title: "Accordion Item #3" },
];
</script>
<template>
    <Layout>
        <headTitle title="Accordions" items="Components" />

        <div>
            <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <!-- Basic -->
                    <Accordion :items="accordionItems" heading="Basic Accordion" :initialOpenIndex="0" activeClass="!text-black dark:!text-white" borderClass="border rounded border-black/10 dark:border-darkborder" buttonClass="flex items-center w-full p-4 text-muted dark:text-darkmuted" />

                    <!-- Without Spacing -->
                    <Accordion :items="accordionItems" heading="Accordion Without Spacing" :initialOpenIndex="0" activeClass="!text-black dark:!text-white" borderClass="border divide-y rounded border-black/10 dark:border-darkborder dark:divide-darkborder divide-black/10" buttonClass="flex items-center w-full p-4 text-muted dark:text-darkmuted" :isSpace="false" />

                    <!-- With Color -->
                    <Accordion :items="accordionItems" heading="Accordion With Color" :initialOpenIndex="0" activeClass="!text-purple !bg-purple/20" borderClass="overflow-hidden border rounded border-black/10 dark:border-darkborder" buttonClass="flex items-center w-full p-4 text-black bg-black/5 dark:bg-white/5 dark:text-darkmuted" />

                    <!-- With Icons -->
                    <Accordion :items="accordionIconItems" heading="Accordion With Icons" :initialOpenIndex="0" activeClass="!text-black dark:!text-white" borderClass="border rounded border-black/10 dark:border-darkborder" buttonClass="flex items-center w-full p-4 text-muted dark:text-darkmuted" />

                    <!-- Without Arrow -->
                    <Accordion :items="accordionArrowItems" heading="Accordion Without Arrow" :initialOpenIndex="0" activeClass="!text-black dark:!text-white" borderClass="border rounded border-black/10 dark:border-darkborder" buttonClass="w-full p-4 text-start text-muted dark:text-darkmuted" />
                </div>
            </div>
        </div>
    </Layout>
</template>


