<script setup>
import { ref, watch } from 'vue';
// import { useRoute } from 'vue-router';
import { sidebarData } from './SidebarData';
import logolight from "@/assets/images/logo-light.svg";
import logodark from "@/assets/images/logo-dark.svg";
import logoicon from "@/assets/images/logo-icon.svg";

const isSidebarSize = ref(true);
const activeMenu = ref(JSON.parse(localStorage.getItem('activeMenu')) || null);
const isDarkMode = ref(false); // You can replace this with your dark mode logic

const toggleSubMenu = (menu) => {
  localStorage.setItem('activeMenu', JSON.stringify(activeMenu.value === menu ? null : menu));
  activeMenu.value = activeMenu.value === menu ? null : menu;
};

watch(isSidebarSize, (value) => {
  if (!value) {
    activeMenu.value = null;
    localStorage.removeItem('activeMenu');
  }
});

watch(activeMenu, (value) => {
  if (value !== null && !isSidebarSize.value) {
    isSidebarSize.value = true;
  }
});

// const $route = useRoute();
</script>

<template>
  <nav class="sidebar fixed z-[9999] flex-none w-[240px] ltr:border-r rtl:border-l dark:bg-darkborder border-black/10 transition-all duration-300 overflow-hidden">
    <div class="h-full bg-white dark:bg-darklight">
      <div class="p-4">
        <router-link to="/" class="w-full main-logo">
          <img :src='logodark' className="mx-auto dark-logo h-7 logo dark:hidden" alt="logo" />
          <img :src='logolight' className="hidden mx-auto light-logo h-7 logo dark:block" alt="logo" />
          <img :src='logoicon' className="hidden mx-auto logo-icon h-7" alt="" />
        </router-link>
      </div>
      <div class="h-[calc(100vh-60px)]  overflow-y-auto overflow-x-hidden px-5 pb-4 space-y-16 detached-menu">
        <ul class="relative flex flex-col gap-1">
          <template v-for="(item, key) in sidebarData" :key="key">
            <template v-if="item.isTitle">
              <h2 class="my-2 text-sm text-black/50 dark:text-white/30">
                <span>{{ item.label }}</span>
              </h2>
            </template>
            <template v-else-if="item.subItems">
              <li v-if="isSidebarSize" class="menu nav-item">
                <a href="#" @click="toggleSubMenu(key)" :class="{ 'active': activeMenu === key || item.subItems.some(subitem => $route.path === subitem.link) }" class="items-center justify-between text-black nav-link group mb-1">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
                      <path :d="item.icon" fill="currentColor"></path>
                    </svg>
                    <span class="ltr:pl-1.5 rtl:pr-1.5">{{ item.label }}</span>
                  </div>
                  <div :class="{ 'flex items-center justify-center w-4 h-4 dropdown-icon !rotate-180': activeMenu === key, 'flex items-center justify-center w-4 h-4 dropdown-icon': activeMenu !== key }">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                      <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <ul v-if="isSidebarSize && activeMenu === key" class="flex flex-col gap-1 text-black sub-menu dark:text-white/60 -mt-1">
                <li v-for="(subitem, subkey) in item.subItems" :key="subkey">
                  <router-link :to="subitem.link" :class="{ 'active': $route.path === subitem.link }">
                    {{ subitem.label }}
                  </router-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <li class="menu nav-item">
                <router-link :to="item.link" @click="toggleSubMenu(key)" :class="{ 'active': $route.path === item.link }" class="items-center justify-between text-black nav-link group" style="margin-bottom: 0px;">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
                      <path :d="item.icon" fill="currentColor"></path>
                    </svg>
                    <span class="ltr:pl-1.5 rtl:pr-1.5">{{ item.label }}</span>
                  </div>
                </router-link>
              </li>
            </template>
          </template>
        </ul>
        <div class="relative p-4 pt-0 text-center rounded-md bg-purple help-box">
          <div class="relative -top-6">
            <span class="text-black mx-auto border border-black/10 shadow-[0_0.75rem_1.5rem_rgba(18,38,63,.03)]  bg-white flex items-center justify-center h-12 w-12 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z" fill="currentColor"></path>
              </svg>
            </span>
          </div>
          <h4 class="text-xl text-white">Help Center</h4>
          <p class="mt-4 text-white/70">
            Looks like there might be a new theme soon.
          </p>
          <div class="mt-5">
            <router-link to="#" class="btn-white">
              Go to help
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>