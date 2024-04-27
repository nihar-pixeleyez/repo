<template>
    <Layout>
        <headTitle title="Dropdown" items="Elements" />

        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Dropdowns Default
                    </h2>
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="flex flex-wrap gap-4">
                            <Dropdown :classname="`btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85] flex items-center justify-center`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-info border border-info rounded-md text-white transition-all duration-300 hover:bg-info/[0.85] hover:border-info/[0.85] flex items-center justify-center`" :btnName="'Info'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-success border border-success rounded-md text-white transition-all duration-300 hover:bg-success/[0.85] hover:border-success/[0.85] flex items-center justify-center`" :btnName="'Success'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-warning border border-warning rounded-md text-white transition-all duration-300 hover:bg-warning/[0.85] hover:border-warning/[0.85] flex items-center justify-center`" :btnName="'Warning'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-danger border border-danger rounded-md text-white transition-all duration-300 hover:bg-danger/[0.85] hover:border-danger/[0.85] flex items-center justify-center`" :btnName="'Danger'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-black border border-black rounded-md text-white transition-all duration-300 hover:bg-black/[0.85] hover:border-black/[0.85] flex items-center justify-center`" :btnName="'Black'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-muted border border-muted rounded-md text-white transition-all duration-300 hover:bg-muted/[0.85] hover:border-muted/[0.85] flex items-center justify-center dark:bg-darkmuted dark:border-darkmuted dark:hover:bg-darkmuted/90 dark:hover:border-darkmuted/90`" :btnName="'Secondary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85] flex items-center justify-center`" :btnName="'Light'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <!-- Dropdown components here -->
                        </div>
                    </div>
                </div>

                <!-- Dropdowns Rounded -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Dropdowns Rounded
                    </h2>
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="flex flex-wrap gap-4">
                            <Dropdown :classname="`btn bg-purple border border-purple rounded-full text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85] flex items-center justify-center`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-info border border-info rounded-full text-white transition-all duration-300 hover:bg-info/[0.85] hover:border-info/[0.85] flex items-center justify-center`" :btnName="'Info'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-success border border-success rounded-full text-white transition-all duration-300 hover:bg-success/[0.85] hover:border-success/[0.85] flex items-center justify-center`" :btnName="'Success'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-warning border border-warning rounded-full text-white transition-all duration-300 hover:bg-warning/[0.85] hover:border-warning/[0.85] flex items-center justify-center`" :btnName="'Warning'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-danger border border-danger rounded-full text-white transition-all duration-300 hover:bg-danger/[0.85] hover:border-danger/[0.85] flex items-center justify-center`" :btnName="'Danger'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-black border border-black rounded-full text-white transition-all duration-300 hover:bg-black/[0.85] hover:border-black/[0.85] flex items-center justify-center`" :btnName="'Black'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-muted border border-muted rounded-full text-white transition-all duration-300 hover:bg-muted/[0.85] hover:border-muted/[0.85] flex items-center justify-center`" :btnName="'Secondary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-light border border-light rounded-full text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85] flex items-center justify-center`" :btnName="'Light'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <!-- Dropdown components here -->
                        </div>
                    </div>
                </div>
                <!-- Dropdowns Outline Default -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Dropdowns Outline Default
                    </h2>
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="flex flex-wrap gap-4">
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-md btn text-purple border-purple hover:text-white hover:bg-purple`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-md btn text-info border-info hover:text-white hover:bg-info`" :btnName="'Info'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-md btn text-success border-success hover:text-white hover:bg-success`" :btnName="'Success'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-md btn text-warning border-warning hover:text-white hover:bg-warning`" :btnName="'Warning'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-md btn text-danger border-danger hover:text-white hover:bg-danger`" :btnName="'Danger'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center text-black transition-all duration-300 border border-black rounded-md btn hover:text-white hover:bg-black dark:text-white dark:hover:text-white dark:border-darkborder dark:hover:border-black`" :btnName="'Black'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-md btn text-muted border-muted hover:text-white hover:bg-muted dark:text-darkmuted dark:border-darkmuted dark:hover:text-white`" :btnName="'Secondary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center text-black transition-all duration-300 border rounded-md btn border-light hover:text-black hover:bg-light dark:text-white dark:hover:text-black`" :btnName="'Light'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <!-- Dropdown components here -->
                        </div>
                    </div>
                </div>
                <!-- Dropdowns Outline Rounded -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Dropdowns Outline Rounded
                    </h2>
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="flex flex-wrap gap-4">
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-full btn text-purple border-purple hover:text-white hover:bg-purple`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-full btn text-info border-info hover:text-white hover:bg-info`" :btnName="'Info'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-full btn text-success border-success hover:text-white hover:bg-success`" :btnName="'Success'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-full btn text-warning border-warning hover:text-white hover:bg-warning`" :btnName="'Warning'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-full btn text-danger border-danger hover:text-white hover:bg-danger`" :btnName="'Danger'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center text-black transition-all duration-300 border border-black rounded-full btn hover:text-white hover:bg-black dark:text-white dark:hover:text-white dark:border-darkborder dark:hover:border-black`" :btnName="'Black'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center transition-all duration-300 border rounded-full btn text-muted border-muted hover:text-white hover:bg-muted dark:text-darkmuted dark:border-darkmuted dark:hover:text-white`" :btnName="'Secondary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`flex items-center justify-center text-black transition-all duration-300 border rounded-full btn border-light hover:text-black hover:bg-light dark:text-white dark:hover:text-black`" :btnName="'Light'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <!-- Dropdown components here -->
                        </div>
                    </div>
                </div>
                <!-- Dropdowns Outline Rounded -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Dropdowns
                    </h2>
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="flex flex-wrap gap-4">
                            <Dropdown :classname="`btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85] flex items-center justify-center`" :btnName="'Dropdown Menu'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn bg-black border border-black rounded-md text-white transition-all duration-300 hover:bg-black/[0.85] hover:border-black/[0.85] flex items-center justify-center`" :btnName="'Dropdown Menu'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <!-- Dropdown components here -->
                        </div>
                    </div>
                </div>
                <!-- Dropdowns Split Button -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Dropdowns Split Button
                    </h2>
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="flex flex-wrap gap-4">
                            <Dropdown :classname="`inline-flex align-middle bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="false" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`inline-flex align-middle bg-success border border-success rounded-md text-white transition-all duration-300 hover:bg-success/[0.85] hover:border-success/[0.85]`" :btnName="'Success'" :linkClass="'btn'" :isIcon="false" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`inline-flex align-middle bg-black border border-black rounded-md text-white transition-all duration-300 hover:bg-black/[0.85] hover:border-black/[0.85]`" :btnName="'Black'" :linkClass="'btn'" :isIcon="false" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`inline-flex align-middle bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85]`" :btnName="'Light'" :linkClass="'btn'" :isIcon="false" :dropdownItems="dropdownItems" />
                            <!-- Dropdown components here -->
                        </div>
                    </div>
                </div>
                <!-- Dropdown With Icons -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Dropdown With Icons
                    </h2>
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="flex flex-wrap gap-4">
                            <Dropdown classname="p-3 bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                            <Dropdown classname="p-3 bg-success border border-success rounded-md text-white transition-all duration-300 hover:bg-success/[0.85] hover:border-success/[0.85]" :linkClass="'btn'" :isSvg='true' :svgName="'M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                            <Dropdown classname="p-3 bg-black border border-black rounded-md text-white transition-all duration-300 hover:bg-black/[0.85] hover:border-black/[0.85]" :linkClass="'btn'" :isSvg='true' :svgName="'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                            <Dropdown classname="p-3 bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85]" :linkClass="'btn'" :isSvg='true' :svgName="'M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                            <!-- Dropdown components here -->
                        </div>
                    </div>
                </div>

                <!-- Dropdown Sizes -->
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                        Dropdown Sizes
                    </h2>
                    <div class="flex flex-wrap justify-center gap-3">
                        <div class="flex flex-wrap gap-4">
                            <Dropdown :classname="`btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85] flex items-center justify-center`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn py-2 px-5 text-[15px] bg-success border border-success rounded-md text-white transition-all duration-300 hover:bg-success/[0.85] hover:border-success/[0.85] flex items-center justify-center`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn py-1.5 px-4 text-sm bg-black border border-black rounded-md text-white transition-all duration-300 hover:bg-black/[0.85] hover:border-black/[0.85] flex items-center justify-center`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <Dropdown :classname="`btn py-1 px-3.5 text-[13px] bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85] flex items-center justify-center`" :btnName="'Primary'" :linkClass="'btn'" :isIcon="true" :dropdownItems="dropdownItems" />
                            <!-- Dropdown components here -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Layout>
</template>
<script setup>
import Layout from '@/layouts/vertical.vue'; // Adjust the path as per your project structure
import headTitle from '@/components/head-title.vue'; // Adjust the path as per your project structure
import { ref } from 'vue'; // Import defineProps from Vue 3
import Dropdown from "./dropdown.vue";

const title = "Dropdown";
const dropdownItems = ["Action", "Another action", "Something else here"];
</script>
