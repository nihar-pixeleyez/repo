<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black/80 z-[99999] overflow-y-auto dark:bg-dark/90">
        <div :class="divClass" @click="toggleModal">
            <div :class="sizeClass">
                <div class="flex items-center justify-between px-5 py-3 bg-white border-b border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h5 class="text-lg font-semibold dark:text-white">{{ title }}</h5>
                    <button type="button" class="text-muted hover:text-black dark:hover:text-white" @click="toggleModal">
                        Close
                    </button>
                </div>
                <div :class="spaceClass">
                    <div class="text-black dark:text-muted">{{ content }}</div>
                    <div class="flex items-center justify-end gap-4">
                        <button type="button" class="transition-all duration-300 border rounded-md btn text-danger border-danger hover:bg-danger hover:text-white" @click="onDiscard">Discard</button>
                        <button type="button" class="transition-all duration-300 border rounded-md btn text-purple border-purple hover:bg-purple hover:text-white">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { isOpen, toggleModal, title, divClass, content, onDiscard, sizeClass, spaceClass } = defineProps({
    isOpen: Boolean,
    toggleModal: Function,
    title: String,
    divClass: String,
    content: String,
    onDiscard: Function,
    sizeClass: String,
    spaceClass: String,
});
</script>
