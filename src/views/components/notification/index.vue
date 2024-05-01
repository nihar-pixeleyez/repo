<template>
    <Layout>
        <headTitle title="Notification" items="Components" />

        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <!-- Basic Notification -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Basic Notification
                    </h2>
                    <div class="relative">
                        <div v-if="toastVisible" class="bg-black text-white py-3 px-4 rounded-md max-w-[220px] fixed bottom-5 rtl:left-5 ltr:right-5 z-[99999] opacity-100 transition-all ease-out duration-300">
                            <span>Hello, world! This is a toast message.</span>
                        </div>
                        <button @click="setToastVisible(!toastVisible)" class="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]">
                            Open Notification
                        </button>
                    </div>
                </div>

                <!-- Notification With Close -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Notification With Close
                    </h2>
                    <div>
                        <button @click="toggleToast" class="text-black transition-all duration-300 border rounded-md btn dark:text-white dark:hover:text-black border-light hover:bg-light hover:text-black">
                            Click Me!
                        </button>
                        <div v-if="toastOpen" class="bg-black flex items-start gap-3 text-white py-3 px-4 rounded-md max-w-[250px] fixed bottom-5 ltr:right-5 rtl:left-5 z-[99999]">
                            <span>Hello, world! This is a toast message.</span>
                            <button type="button" @click="toggleToast">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
                                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Position Notification -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Position Notification
                    </h2>
                    <div class="flex flex-wrap items-center gap-4">
                        <div v-if="toast1" class="bg-black text-white py-3 px-4 rounded-md max-w-[220px] fixed top-5 ltr:left-5 rtl:right-5 z-[99999]">
                            <span>Hello, world! This is a toast message.</span>
                        </div>
                        <button class="text-black transition-all duration-300 border rounded-md btn dark:text-white dark:hover:text-black border-light hover:bg-light hover:text-black" @click="setToast1(!toast1)">
                            Top Left
                        </button>
                        <div v-if="toast2" class="bg-black text-white py-3 px-4 rounded-md max-w-[220px] mx-auto fixed top-5 left-0 right-0 z-[99999]">
                            <span>Hello, world! This is a toast message.</span>
                        </div>
                        <button class="text-black transition-all duration-300 border rounded-md btn dark:text-white dark:hover:text-black border-light hover:bg-light hover:text-black" @click="setToast2(!toast2)">
                            Top Center
                        </button>
                        <div v-if="toast3" class="bg-black text-white py-3 px-4 rounded-md max-w-[220px] fixed top-5 ltr:right-5 rtl:left-5 z-[99999]">
                            <span>Hello, world! This is a toast message.</span>
                        </div>
                        <button class="text-black transition-all duration-300 border rounded-md btn dark:text-white dark:hover:text-black border-light hover:bg-light hover:text-black" @click="setToast3(!toast3)">
                            Top Right
                        </button>
                        <div v-if="toast4" class="bg-black text-white py-3 px-4 rounded-md max-w-[220px] fixed bottom-5 ltr:right-5 rtl:left-5 z-[99999]">
                            <span>Hello, world! This is a toast message.</span>
                        </div>
                        <button class="text-black transition-all duration-300 border rounded-md btn dark:text-white dark:hover:text-black border-light hover:bg-light hover:text-black" @click="setToast4(!toast4)">
                            Bottom Right
                        </button>
                        <div v-if="toast5" class="bg-black text-white py-3 px-4 rounded-md max-w-[220px] mx-auto fixed bottom-5 right-0 left-0 z-[99999]">
                            <span>Hello, world! This is a toast message.</span>
                        </div>
                        <button class="text-black transition-all duration-300 border rounded-md btn dark:text-white dark:hover:text-black border-light hover:bg-light hover:text-black" @click="setToast5(!toast5)">
                            Bottom Center
                        </button>
                            <div v-if="toast6" class="bg-black text-white py-3 px-4 rounded-md max-w-[220px] fixed bottom-5 ltr:left-5 rtl:right-5 z-[99999]">
                                <span>Hello, world! This is a toast message.</span>
                            </div>
                        <button class="text-black transition-all duration-300 border rounded-md btn dark:text-white dark:hover:text-black border-light hover:bg-light hover:text-black" @click="setToast6(!toast6)">
                            Bottom Left
                        </button>
                    </div>
                </div>

                <!-- Notification Color -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Notification Color
                    </h2>
                    <div class="flex flex-wrap items-center gap-4">
                        <div v-for="(toast, index) in colorToastStates" :key="index">
                            <div v-if="toast.value" :class="`bg-${['purple', 'info', 'success', 'warning', 'danger', 'black', 'muted', 'light'][index]} text-white py-3 px-4 rounded-md max-w-[220px] fixed bottom-5 ltr:right-5 rtl:left-5 z-[99999]`">
                                <span>Hello, world! This is a toast message.</span>
                            </div>
                            <button :class="`transition-all duration-300 border rounded-md btn text-${['purple', 'info', 'success', 'warning', 'danger', 'black', 'muted', 'light'][index]} border-${['purple', 'info', 'success', 'warning', 'danger', 'black', 'muted', 'light'][index]} hover:bg-${['purple', 'info', 'success', 'warning', 'danger', 'black', 'muted', 'light'][index]} hover:text-white`" @click="toggleColorToastState(index)">
                                {{ ['Primary', 'Info', 'Success', 'Warning', 'Danger', 'Black', 'Muted', 'Light'][index] }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';

const toastVisible = ref(false);
const setToastVisible = (value) => { toastVisible.value = value; };

const toastOpen = ref(false);
const toggleToast = () => { toastOpen.value = !toastOpen.value; };

const toast1 = ref(false);
const toast2 = ref(false);
const toast3 = ref(false);
const toast4 = ref(false);
const toast5 = ref(false);
const toast6 = ref(false);

const setToast1 = (value) => { toast1.value = value; };
const setToast2 = (value) => { toast2.value = value; };
const setToast3 = (value) => { toast3.value = value; };
const setToast4 = (value) => { toast4.value = value; };
const setToast5 = (value) => { toast5.value = value; };
const setToast6 = (value) => { toast6.value = value; };

const createToastState = () => ref(false);
const colorToastStates = Array.from({ length: 8 }, createToastState);

const toggleColorToastState = (index) => {
    colorToastStates[index].value = !colorToastStates[index].value;
    if (colorToastStates[index].value) {
        showColorToast(index);
    }
};

const showColorToast = (index) => {
    const toastTimer = setTimeout(() => {
        console.log("tost " , );
        colorToastStates[index].value = false;
    }, 3000);
    // Clear the timeout when the toast should be hidden
    clearTimeout(toastTimer);
};
</script>
