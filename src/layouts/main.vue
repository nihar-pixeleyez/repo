<template>
    <div>
        <Vertical v-if="layoutType === 'vertical'">
            <slot />
        </Vertical>
    </div>
</template>

<script setup>
import { layoutComputed } from "@/state/helpers";
import Vertical from "./vertical.vue";

// No need to define data, computed, or mounted with <script setup>
// They are automatically handled

// Export the necessary components and computed properties
const components = {
    Vertical,
};

// Export the computed properties using the spread operator
// This assumes layoutComputed is an object with computed properties
const { ...layoutComputed } = layoutComputed;
</script>
