<template>
  <div class="relative inline-block h-5 notification">
    <button type="button" class="relative text-black dark:text-white/80" @click="toggleDropdown">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 mx-auto">
        <path v-if="isDropdownOpen" d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z" fill="currentColor"></path>
        <path v-else d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z" fill="currentColor"></path>
      </svg>
      <span class="absolute w-2 h-2 border border-white rounded-full -top-px ltr:right-px rtl:left-px bg-purple"></span>
    </button>
    <div v-show="isDropdownOpen" class="noti-area">
      <h4 class="text-black dark:text-white/80 px-2 py-2.5 border-b border-black/10 flex items-center gap-2">
        Notification
        <span class="inline-block bg-purple/10 text-purple text-[10px] p-1 leading-none rounded">
          32
        </span>
      </h4>
      <ul class="overflow-y-auto max-h-56">
        <li v-for="(item, index) in jsonData" :key="index">
          <div class="flex gap-2 cursor-pointer group" @click="toggleVisibility(index)">
            <div class="flex-none overflow-hidden rounded-full h-9 w-9">
              <img :src="item.avatar" class="object-cover" alt="avatar" />
            </div>
            <div class="relative flex-1">
              <p class="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white ltr:pr-4 rtl:pl-4">
                {{ item.action }}
              </p>
              <p class="text-xs text-black/40 dark:text-darkmuted">{{ item.time }}</p>
              <button type="button" class="absolute hidden transition-all duration-300 rotate-0 ltr:right-0 rtl:left-0 top-1 dark:text-white/80 group-hover:block hover:opacity-80 hover:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-3.5 h-3.5">
                  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="currentColor"></path>
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="px-2 py-2.5 border-t border-black/10 dark:border-darkborder">
        <router-link to="#" class="text-black duration-300 dark:text-white dark:hover:text-purple hover:text-purple">
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-3.5 h-3.5 inline-block relative -top-[1px] rtl:rotate-180">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="currentColor"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import avatar1 from "@/assets/images/avatar-1.png";
import avatar4 from "@/assets/images/avatar-4.png";
import avatar13 from "@/assets/images/avatar-13.png";
import avatar19 from "@/assets/images/avatar-19.png";
import avatar24 from "@/assets/images/avatar-24.png";

const jsonData = [
  { avatar: avatar1, action: "Edited the details of Project", time: "5m ago" },
  { avatar: avatar4, action: "Released a new version", time: "5m ago" },
  { avatar: avatar13, action: "Submitted a bug", time: "5m ago" },
  { avatar: avatar19, action: "Modified A data in Page", time: "5m ago" },
  { avatar: avatar24, action: "Modified A data in Page", time: "5m ago" },
  { avatar: avatar1, action: "Edited the details of Project", time: "5m ago" },
  { avatar: avatar4, action: "Released a new version", time: "5m ago" },
  { avatar: avatar13, action: "Submitted a bug", time: "5m ago" },
];

const isDropdownOpen = ref(false);
const showElement = ref(Array(jsonData.length).fill(true));

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleVisibility = (index) => {
  const updatedVisibility = [...showElement.value];
  updatedVisibility[index] = !updatedVisibility[index];
  showElement.value = updatedVisibility;
};
</script>
