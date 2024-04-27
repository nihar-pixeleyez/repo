<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    items: {
        type: Array,
        default: () => []
    }
});
</script>
<template>
    <!-- Start Breadcrumb -->
    <div>
        <nav class="w-full">
            <ul class="space-y-2 detached-breadcrumb">
                <li class="text-xs dark:text-white/80">{{ items }}</li>
                <li class="text-xl font-semibold text-black dark:text-white">{{ title }}</li>
            </ul>
        </nav>
    </div>
    <!-- End Breadcrumb -->
</template>