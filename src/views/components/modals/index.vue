<script setup>
import { ref } from 'vue';
import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';
import Modal from "./modal.vue";

const isModalOpen = ref(false);
const isModalOpen2 = ref(false);
const isModalOpen3 = ref(false);
const isModalOpen4 = ref(false);
const isModalOpen5 = ref(false);
const isModalOpen6 = ref(false);
const isModalOpen7 = ref(false);
const isModalOpen8 = ref(false);
const isModalOpen9 = ref(false);
const isModalOpen10 = ref(false);

const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
};

const toggleModal2 = () => {
    isModalOpen2.value = !isModalOpen2.value;
};
const toggleModal3 = () => {
    isModalOpen3.value = !isModalOpen3.value;
};
const toggleModal4 = () => {
    isModalOpen4.value = !isModalOpen4.value;
};
const toggleModal5 = () => {
    isModalOpen5.value = !isModalOpen5.value;
};
const toggleModal6 = () => {
    isModalOpen6.value = !isModalOpen6.value;
};
const toggleModal7 = () => {
    isModalOpen7.value = !isModalOpen7.value;
};
const toggleModal8 = () => {
    isModalOpen8.value = !isModalOpen8.value;
};
const toggleModal9 = () => {
    isModalOpen9.value = !isModalOpen9.value;
};
const toggleModal10 = () => {
    isModalOpen10.value = !isModalOpen10.value;
};

</script>

<template>
    <Layout>
        <headTitle title="Modals" items="Components" />

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <!-- Basic Modal -->
            <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    Basic Modal
                </h2>
                <div>
                    <div class="flex items-center justify-center">
                        <button class="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]" @click="toggleModal">
                            Launch modal
                        </button>
                        <Modal :isOpen="isModalOpen" :toggleModal="toggleModal" title="Basic Modal" divClass="flex items-start justify-center min-h-screen px-4" content="Lorem Ipsum is simply and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal" sizeClass="relative w-full max-w-lg p-0 my-8 overflow-hidden bg-white border rounded-lg border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                    </div>
                </div>
            </div>
            <!-- Vertically Centered -->
            <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    Vertically Centered
                </h2>
                <div>
                    <div class="flex items-center justify-center">
                        <button class="text-black transition-all duration-300 border rounded-md btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black" @click="toggleModal2">
                            Launch modal
                        </button>
                        <Modal :isOpen="isModalOpen2" :toggleModal="toggleModal2" title="Vertically Centered" divClass="flex items-center justify-center min-h-screen px-4" content="Lorem Ipsum is simply and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal2" sizeClass="relative w-full max-w-lg p-0 my-8 overflow-hidden bg-white border rounded-lg border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                    </div>
                </div>
            </div>
            <!-- Vertically Bottom -->
            <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    Vertically Bottom
                </h2>
                <div>
                    <div class="flex items-center justify-center">
                        <button class="text-black transition-all duration-300 border rounded-md btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black" @click="toggleModal3">
                            Launch modal
                        </button>
                        <Modal :isOpen="isModalOpen3" :toggleModal="toggleModal3" title="Vertically Bottom" divClass="flex items-end justify-center min-h-screen px-4" content="Lorem Ipsum is simply and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal3" sizeClass="relative w-full max-w-lg p-0 my-8 overflow-hidden bg-white border rounded-lg border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                    </div>
                </div>
            </div>
            <!--  Static Modal -->
            <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    Static Modal
                </h2>
                <div>
                    <div class="flex items-center justify-center">
                        <button class="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]" @click="toggleModal4">
                            Launch modal
                        </button>
                        <Modal :isOpen="isModalOpen4" :toggleModal="toggleModal4" title="Static Modal" divClass="flex items-start justify-center min-h-screen px-4" content="Lorem Ipsum is simply and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal4" sizeClass="relative w-full max-w-lg p-0 my-8 overflow-hidden bg-white border rounded-lg border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                    </div>
                </div>
            </div>
            <!-- Removed Animation -->
            <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    Removed Animation
                </h2>
                <div>
                    <div class="flex items-center justify-center">
                        <button class="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]" @click="toggleModal5">
                            Launch modal
                        </button>
                        <Modal :isOpen="isModalOpen5" :toggleModal="toggleModal5" title="Removed Animation" divClass="flex items-start justify-center min-h-screen px-4" content="Lorem Ipsum is simply and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal5" sizeClass="relative w-full max-w-lg p-0 my-8 overflow-hidden bg-white border rounded-lg border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                    </div>
                </div>
            </div>
            <!-- Scorllable Modal -->
            <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    Scorllable Modal
                </h2>
                <div>
                    <div class="flex items-center justify-center">
                        <button class="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]" @click="toggleModal6">
                            Launch modal
                        </button>
                        <Modal :isOpen="isModalOpen6" :toggleModal="toggleModal6" title="Scorllable Modal" divClass="flex items-start justify-center min-h-screen px-4" content='<div class="h-48 min-h-full overflow-y-auto text-black dark:text-muted"><p>Lorem Ipsum is simply dummy text of the industry.</p><br /><br /><br /><br /><br /><br /><br /><br /><p>Lorem Ipsum is simply dummy text of the industry.</p><br /><br /><br /><br /><br /><br /><br /><br /><p>Lorem Ipsum is simply dummy text of the industry.</p></div>' @onDiscard="toggleModal6" sizeClass="relative w-full max-w-lg p-0 my-8 overflow-hidden bg-white border rounded-lg border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                    </div>
                </div>
            </div>
            <!-- Modal Sizes -->
            <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    Modal Sizes
                </h2>
                <div class="flex flex-wrap justify-center gap-4">
                    <!-- Small Modal -->
                    <div>
                        <div class="flex items-center justify-center">
                            <button class="text-black transition-all duration-300 border rounded-md btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black" @click="toggleModal7">
                                Small Modal
                            </button>
                            <Modal :isOpen="isModalOpen7" :toggleModal="toggleModal7" title="Small Modal" divClass="flex items-start justify-center min-h-screen px-4" content="Lorem Ipsum is simply typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal7" sizeClass="relative w-full max-w-sm p-0 my-8 overflow-hidden bg-white border rounded-lg shadow-3xl border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                        </div>
                    </div>
                    <!-- Large Modal -->
                    <div>
                        <div class="flex items-center justify-center">
                            <button class="text-black transition-all duration-300 border rounded-md btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black" @click="toggleModal8">
                                Large Modal
                            </button>
                            <Modal :isOpen="isModalOpen8" :toggleModal="toggleModal8" title="Large Modal" divClass="flex items-start justify-center min-h-screen px-4" content="Lorem Ipsum is simply typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal8" sizeClass="relative w-full max-w-xl p-0 my-8 overflow-hidden bg-white border rounded-lg shadow-3xl border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                        </div>
                    </div>
                    <!-- Extra Large Modal -->
                    <div>
                        <div class="flex items-center justify-center">
                            <button class="text-black transition-all duration-300 border rounded-md btn border-light hover:bg-light hover:text-black dark:text-white dark:hover:text-black" @click="toggleModal9">
                                Extra Large Modal
                            </button>
                            <Modal :isOpen="isModalOpen9" :toggleModal="toggleModal9" title="Extra Large Modal" divClass="flex items-start justify-center min-h-screen px-4" content="Lorem Ipsum is simply typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal9" sizeClass="relative w-full max-w-5xl p-0 my-8 overflow-hidden bg-white border rounded-lg shadow-3xl border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal Fullscreen -->
            <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    Modal Fullscreen
                </h2>
                <div class="flex items-center justify-center">
                    <button class="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]" @click="toggleModal10">
                        Full Screen Modal
                    </button>
                    <Modal :isOpen="isModalOpen10" :toggleModal="toggleModal10" title="Modal Fullscreen" divClass="flex items-start justify-center min-h-screen" content="Lorem Ipsum is simply and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." @onDiscard="toggleModal10" sizeClass="relative w-full p-0 overflow-hidden bg-white border rounded-lg shadow-3xl border-black/10 dark:bg-darklight dark:border-darkborder" spaceClass="p-5 space-y-4 min-h-[calc(100vh-53px)] flex flex-col justify-between" />
                </div>
            </div>
        </div>
    </Layout>
</template>
