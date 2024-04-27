<script setup>
import { ref } from 'vue';
import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';

const inputField1Ref = ref(null);
const inputField2Ref = ref(null);

const textToCopy1 = ref('Hello, world!');
const textToCopy2 = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');
const isCopied1 = ref(false);
const isCopied2 = ref(false);

const setTextToCopy1 = (value) => {
    textToCopy1.value = value;
};

const setTextToCopy2 = (value) => {
    textToCopy2.value = value;
};

const setIsCopied1 = (value) => {
    isCopied1.value = value;
};

const setIsCopied2 = (value) => {
    isCopied2.value = value;
};

const handleCopyClick = async (inputRef, setIsCopied, setTextToCopy) => {
    try {
        const textToCopy = inputRef.value.value;
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        if (setTextToCopy) {
            setTextToCopy('');
        }
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};
</script>

<template>
    <Layout>
        <headTitle title="Clipboard" items="Components" />

        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <!-- Copy from input -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Copy from input
                    </h2>
                    <div class="flex flex-col gap-4">
                        <input type="text" ref="inputField1Ref" class="form-input" :value="textToCopy1" @input="setTextToCopy1($event.target.value)" />
                        <div class="flex flex-wrap gap-4">
                            <button @click="handleCopyClick(inputField1Ref, setIsCopied1)" :class="`btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85] ${isCopied1 ? 'bg-green-500' : ''}`">
                                Copy
                            </button>
                            <button @click="handleCopyClick(inputField1Ref, setIsCopied1, setTextToCopy1)" :class="`btn bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85] ${isCopied1 ? 'bg-green-500' : ''}`">
                                Cut
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Copy from Textarea -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Copy from Textarea
                    </h2>
                    <div class="flex flex-col gap-4">
                        <textarea ref="inputField2Ref" class="h-auto form-textarea" rows="3" :value="textToCopy2" @input="setTextToCopy2($event.target.value)"></textarea>
                        <div class="flex flex-wrap gap-4">
                            <button @click="handleCopyClick(inputField2Ref, setIsCopied2)" :class="`btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85] ${isCopied2 ? 'bg-green-500' : ''}`">
                                Copy
                            </button>
                            <button @click="handleCopyClick(inputField2Ref, setIsCopied2, setTextToCopy2)" :class="`btn bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85] ${isCopied2 ? 'bg-green-500' : ''}`">
                                Cut
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>