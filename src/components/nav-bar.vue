<template>
  <div class="bg-white dark:bg-darklight dark:border-darkborder flex gap-4 lg:z-10 items-center justify-between px-4 h-[60px] border-b border-black/10 detached-topbar relative">
    <div class="flex items-center flex-1 gap-2 sm:gap-4">
      <button type="button" class="text-black dark:text-white/80" @click="toggleSidebarCollapse('toggle-sidebar')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
          <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z" fill="currentColor"></path>
        </svg>
      </button>
      <form class="flex-1 hidden min-[420px]:block">
        <div class="relative max-w-[180px] md:max-w-[350px]">
          <input type="text" id="search" class="border-black/10 dark:text-white/80 dark:placeholder:text-white/30 dark:border-darkborder dark:bg-dark dark:focus:border-white/30 focus:border-black/30 placeholder:text-black/50 border text-black text-sm rounded block w-full ltr:pl-3 rtl:pr-3 ltr:pr-7 rtl:pl-7 h-10 bg-[#f9fbfd] focus:ring-0 focus:outline-0" placeholder="Search..." required />
          <button type="button" class="absolute inset-y-0 flex items-center text-black ltr:right-0 rtl:left-0 ltr:pr-2 rtl:pl-2 dark:text-white/80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4">
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
    <div class="flex items-center gap-4">
      <!-- FullScreen -->
      <Fullscreen />

      <!-- Light & Dark -->
      <div>
        <a href="#" class="text-black" v-if="mode === 'light'" @click="toggleMode('dark')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
            <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z" fill="currentColor"></path>
          </svg>
        </a>
        <a href="#" class="text-black dark:text-white/80" v-else @click="toggleMode('light')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5">
            <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
      <!-- Notification Dropdown -->
      <NotificationDropdown />

      <!-- Profile Dropdown -->
      <ProfileDropdown />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Fullscreen from './Fullscreen.vue'
import NotificationDropdown from './NotificationDropdown.vue'
import ProfileDropdown from './ProfileDropdown.vue'

const isDarkMode = ref(false);


const mode = ref('dark');

function toggleMode(newMode) {
  mode.value = newMode;
  document.body.classList.toggle('dark', newMode === 'dark');
}

function toggleSidebarCollapse(newSize) {
  document.body.classList.toggle(newSize);
}
</script>

