<template>
    <div class="bg-[#f9fbfd] text-black dark:bg-darklight bg-[url('../images/bg-shape.png')] bg-cover bg-no-repeat">
        <header>
            <nav class="px-4 lg:px-7 py-4 max-w-[1440px] mx-auto">
                <div class="flex flex-wrap items-center justify-between">
                    <router-link to="/index" class="flex items-center">
                        <img :src='logodark' className="mx-auto dark-logo h-7 logo dark:hidden" alt="logo" />
                        <img :src='logolight' className="hidden mx-auto light-logo h-7 logo dark:block" alt="logo" />
                    </router-link>
                    <div class="flex items-center lg:order-2">
                        <router-link to="/signup" class="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]">Buy Now</router-link>
                    </div>
                </div>
            </nav>
        </header>
        <!-- End Header -->

        <!-- Start Page Content -->
        <section class="min-h-[calc(100vh-134px)] flex items-center justify-center">
            <div class="max-w-[1440px] mx-auto text-center px-4">
                <div class="space-y-5">
                    <h2 class="text-3xl font-bold md:text-5xl dark:text-white">Site is Under Maintenance</h2>
                    <img src="@/assets/images/maintanance.svg" class="mx-auto sm:max-w-xs" alt="">
                    <p class="text-base text-muted dark:text-darkmuted">Need support?</p>
                    <a href="javaScript:;" class="text-purple">no-reply@domain.com</a>
                </div>
            </div>
        </section>
        <!-- Start Footer -->
        <footer class="py-5 text-center text-black dark:text-white/80 max-w-[1440px] mx-auto">
            <div>
                &copy;
                {{ currentYear }}
                Sliced.
                <span>Crafted with
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 inline-block relative -mt-[2px]">
                        <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z" class="fill-purple"></path>
                    </svg>
                    by SRBThemes
                </span>
            </div>
        </footer>
    </div>
   </template>

<script setup>
import { ref } from 'vue';
import logolight from "@/assets/images/logo-light.svg";
import logodark from "@/assets/images/logo-dark.svg";
const currentYear = ref(new Date().getFullYear());
</script>
