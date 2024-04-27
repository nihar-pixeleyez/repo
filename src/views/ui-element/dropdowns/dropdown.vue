<template>
    <div class="dropdown" ref="dropdownRef">
        <button type="button" :class="classname" @click="toggleOpen" @keydown.escape="setDropdown(false)">
            <template v-if="isIcon">
                <template v-if="isSvg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 mx-auto">
                        <path :d="svgName" fill="currentColor"></path>
                    </svg>
                </template>
                <template v-else>
                    {{ btnName }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 ltr:ml-1 rtl:mr-1">
                        <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="currentColor" />
                    </svg>
                </template>
            </template>
            <template v-else>
                {{ console.log('+++ call ',  ) }}
                <span class="px-2.5 leading-[2.8]">{{ btnName }}</span>
                <p class="w-10 h-10 py-3 align-middle bg-white rounded-r bg-opacity-20" @click="toggleOpen">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 mx-auto">
                        <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="currentColor"></path>
                    </svg>
                </p>
            </template>
        </button>

        <ul v-if="dropdown" class="ltr:right-0 rtl:left-0 whitespace-nowrap" @click="setDropdown(false)">
            <li v-for="(item, index) in dropdownItems" :key="index">
                <router-link to="#" :class="linkClass[index]">
                    <template v-if="linkSvg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4">
                            <path :d="linksvgpath[index]" fill="currentColor"></path>
                        </svg>
                    </template>
                    {{ item }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    classname: String,
    btnName: String,
    isIcon: Boolean,
    isSvg: Boolean,
    svgName: String,
    dropdownItems: Array,
    linkClass: Array,
    linkSvg: Boolean,
    linksvgpath: Array,
});

const dropdown = ref(false);
const dropdownRef = ref(null);

const toggleOpen = () => {
    dropdown.value = !dropdown.value;
};

const setDropdown = (value) => {
    dropdown.value = value;
};

const handleClick = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        if (dropdown.value) {
            toggleOpen();
        }
    }
};

onMounted(() => {
    document.addEventListener("click", handleClick);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClick);
});
</script>
