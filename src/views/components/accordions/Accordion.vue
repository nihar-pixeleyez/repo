<script setup>
import { ref, watch, defineProps } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        default: () => [],
    },
    heading: {
        type: String,
        default: '',
    },
    initialOpenIndex: {
        type: Number,
        default: null,
    },
    borderClass: {
        type: String,
        default: '',
    },
    buttonClass: {
        type: String,
        default: '',
    },
    activeClass: {
        type: String,
        default: '',
    },
    isSpace: {
        type: Boolean,
        default: true,
    },
});

const openIndex = ref(props.initialOpenIndex);

const toggleAccordion = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};

watch(() => props.initialOpenIndex, (newValue) => {
    openIndex.value = newValue;
});
</script>

<template>
    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">{{ heading }}</h2>
        <div :class="{ 'space-y-2': isSpace !== false }">
            <div v-for="(item, index) in items" :key="index" :class="borderClass">
                <button type="button" :class="[buttonClass, openIndex === index ? activeClass : '']" @click="toggleAccordion(index)">
                    <div v-if="item.icon" class="size-5 ltr:mr-2 rtl:ml-2 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
                            <path fill='currentColor' :d="item.icon"></path>
                        </svg>
                        <!-- {{ item.icon }} Render item.icon here -->
                    </div>
                    {{ item.title }}
                    <div class="ltr:ml-auto rtl:mr-auto" :class="{ 'rotate-180': openIndex === index }" style="margin-left: auto">
                        <!-- <span> -->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-if="item.arrow" className="size-5">
                                <path fill='currentColor' :d="item.arrow"></path>
                            </svg>
                            <!-- Render item.arrow here -->
                        <!-- </span> -->
                    </div>
                </button>
                <div v-if="openIndex === index" class="p-4 space-y-2 border-t text-muted border-black/10 dark:border-darkborder dark:text-darkmuted">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


