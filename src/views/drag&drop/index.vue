<template>
    <Layout>
        <headTitle title="Drag & Drop" items="Sliced" />
        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4">
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Sortable</h2>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div id="sortableone" class="space-y-4">
                            <draggable v-model="items2" class="space-y-4">
                                <template v-slot:item="{ item }">
                                    <div class="p-5 border rounded border-black/10 dark:border-darkborder" v-draggable>
                                        <div class="flex gap-4 mb-4">
                                            <div class="flex-1">
                                                <p class="mb-1 text-sm font-semibold dark:text-white">{{ item.title }}</p>
                                                <p class="text-xs text-muted dark:text-darkmuted">Due Date: {{ item.dueDate }}</p>
                                            </div>
                                            <img class="w-[42px] h-[42px] flex-none rounded-full overflow-hidden object-cover" :src="item.imageUrl" alt="" />
                                        </div>
                                        <div class="flex items-center justify-between gap-2 mb-3 text-xs">
                                            <div class="flex items-center justify-start -space-x-1.5">
                                                <template v-for="avatar in item.userAvatar">
                                                    <img class="object-cover w-6 h-6 overflow-hidden rounded-full ring-2 ring-white dark:ring-darkborder" :src="avatar" alt="" />
                                                </template>
                                                <span class="flex items-center justify-center object-cover w-6 h-6 text-xs text-center rounded-full bg-light ring-2 ring-white dark:ring-darkborder">+{{ item.extraAvatars }}</span>
                                            </div>
                                            <div :class="item.statusClass">
                                                <span class="h-1.5 w-1.5 rounded-full inline-block relative -top-px bg-current ltr:mr-0.5 rtl:ml-0.5"></span>
                                                <span>{{ item.status }}</span>
                                            </div>
                                        </div>
                                        <div class="relative w-full h-1 mt-1 mb-2 overflow-hidden rounded-full">
                                            <div class="absolute w-full h-full bg-light"></div>
                                            <div :class="item.progressClass" :style="{ width: item.progress + '%' }"></div>
                                        </div>
                                        <div class="flex items-center justify-between gap-4 text-xs">
                                            <p>{{ item.completedTasks }} <span class="text-muted dark:text-darkmuted">/</span> {{ item.totalTasks }} <span class="text-muted dark:text-white/80">Total Tasks</span></p>
                                            <p>{{ item.progress }}%</p>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div id="sortabletwo" class="space-y-4">
                            <draggable v-model="items" class="space-y-4">
                                <template v-slot:item="{ item }">
                                    <div class="p-5 border rounded border-black/10 dark:border-darkborder">
                                        <div class="flex gap-4 mb-4">
                                            <div class="flex-1">
                                                <p class="mb-1 text-sm font-semibold dark:text-white">{{ item.title }}</p>
                                                <p class="text-xs text-muted dark:text-darkmuted">Due Date: {{ item.dueDate }}</p>
                                            </div>
                                            <img class="w-[42px] h-[42px] flex-none rounded-full overflow-hidden object-cover" :src="item.imageUrl" alt="" />
                                        </div>
                                        <div class="flex items-center justify-between gap-2 mb-3 text-xs">
                                            <div class="flex items-center justify-start -space-x-1.5">
                                                <template v-for="avatar in item.userAvatar">
                                                    <img class="object-cover w-6 h-6 overflow-hidden rounded-full ring-2 ring-white dark:ring-darkborder" :src="avatar" alt="" />
                                                </template>
                                                <span class="flex items-center justify-center object-cover w-6 h-6 text-xs text-center rounded-full bg-light ring-2 ring-white dark:ring-darkborder">+{{ item.extraAvatars }}</span>
                                            </div>
                                            <div :class="item.statusClass">
                                                <span class="h-1.5 w-1.5 rounded-full inline-block relative -top-px bg-current ltr:mr-0.5 rtl:ml-0.5"></span>
                                                <span>{{ item.status }}</span>
                                            </div>
                                        </div>
                                        <div class="relative w-full h-1 mt-1 mb-2 overflow-hidden rounded-full">
                                            <div class="absolute w-full h-full bg-light"></div>
                                            <div :class="item.progressClass" :style="{ width: item.progress + '%' }"></div>
                                        </div>
                                        <div class="flex items-center justify-between gap-4 text-xs">
                                            <p>{{ item.completedTasks }} <span class="text-muted dark:text-darkmuted">/</span> {{ item.totalTasks }} <span class="text-muted dark:text-white/80">Total Tasks</span></p>
                                            <p>{{ item.progress }}%</p>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div id="sortablethree" class="space-y-4">
                            <draggable v-model="items3" class="space-y-4">
                                <template v-slot:item="{ item }">
                                    <div class="p-5 border rounded border-black/10 dark:border-darkborder">
                                        <div class="flex gap-4 mb-4">
                                            <div class="flex-1">
                                                <p class="mb-1 text-sm font-semibold dark:text-white">{{ item.title }}</p>
                                                <p class="text-xs text-muted dark:text-darkmuted">Due Date: {{ item.dueDate }}</p>
                                            </div>

                                            <img class="w-[42px] h-[42px] flex-none rounded-full overflow-hidden object-cover" :src="item.imageUrl" alt="" />
                                        </div>
                                        <div class="flex items-center justify-between gap-2 mb-3 text-xs">
                                            <div class="flex items-center justify-start -space-x-1.5">
                                                <template v-for="avatar in item.userAvatar">
                                                    <img class="object-cover w-6 h-6 overflow-hidden rounded-full ring-2 ring-white dark:ring-darkborder" :src="avatar" alt="" />
                                                </template>
                                                <span class="flex items-center justify-center object-cover w-6 h-6 text-xs text-center rounded-full bg-light ring-2 ring-white dark:ring-darkborder">+{{ item.extraAvatars }}</span>
                                            </div>
                                            <div class="text-xs" :class="{ 'text-info': item.status === 'In Progress', 'text-purple': item.status === 'Pending', 'text-success': item.status === 'Completed', 'text-danger': item.status === 'Rejected' }">
                                                <span class="h-1.5 w-1.5 rounded-full inline-block relative -top-px bg-current ltr:mr-0.5 rtl:ml-0.5"></span>
                                                <span>{{ item.status }}</span>
                                            </div>
                                        </div>
                                        <div class="relative w-full h-1 mt-1 mb-2 overflow-hidden rounded-full">
                                            <div class="absolute w-full h-full bg-light"></div>
                                            <div class="absolute h-full" :class="{ 'bg-info': item.status === 'In Progress', 'bg-purple': item.status === 'Pending', 'bg-success': item.status === 'Completed', 'bg-danger': item.status === 'Rejected' }" :style="{ width: item.progress + '%' }"></div>
                                        </div>
                                        <div class="flex items-center justify-between gap-4 text-xs">
                                            <p>{{ item.tasks.completed }} <span class="text-muted dark:text-darkmuted">/</span> {{ item.tasks.total }} <span class="text-muted dark:text-white/80">Total Tasks</span></p>
                                            <p>{{ item.progress }}%</p>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                        <div id="sortablefour" class="space-y-4">
                            <draggable v-model="items4" class="space-y-4">
                                <template v-slot:item="{ item }">
                                    <div class="p-5 border rounded border-black/10 dark:border-darkborder">
                                        <div class="flex gap-4 mb-4">
                                            <div class="flex-1">
                                                <p class="mb-1 text-sm font-semibold dark:text-white">{{ item.title }}</p>
                                                <p class="text-xs text-muted dark:text-darkmuted">Due Date: {{ item.dueDate }}</p>
                                            </div>
                                            <img class="w-[42px] h-[42px] flex-none rounded-full overflow-hidden object-cover" :src="item.imageUrl" alt="" />
                                        </div>
                                        <div class="flex items-center justify-between gap-2 mb-3 text-xs">
                                            <div class="flex items-center justify-start -space-x-1.5">
                                                <template v-for="avatar in item.userAvatar">
                                                    <img class="object-cover w-6 h-6 overflow-hidden rounded-full ring-2 ring-white dark:ring-darkborder" :src="avatar" alt="" />
                                                </template>
                                                <span class="flex items-center justify-center object-cover w-6 h-6 text-xs text-center rounded-full bg-light ring-2 ring-white dark:ring-darkborder">+{{ item.extraAvatars }}</span>
                                            </div>
                                            <div class="text-xs" :class="{ 'text-info': item.status === 'In Progress', 'text-purple': item.status === 'Pending', 'text-success': item.status === 'Completed', 'text-danger': item.status === 'Rejected' }">
                                                <span class="h-1.5 w-1.5 rounded-full inline-block relative -top-px bg-current ltr:mr-0.5 rtl:ml-0.5"></span>
                                                <span>{{ item.status }}</span>
                                            </div>
                                        </div>
                                        <div class="relative w-full h-1 mt-1 mb-2 overflow-hidden rounded-full">
                                            <div class="absolute w-full h-full bg-light"></div>
                                            <div class="absolute h-full" :class="{ 'bg-info': item.status === 'In Progress', 'bg-purple': item.status === 'Pending', 'bg-success': item.status === 'Completed', 'bg-danger': item.status === 'Rejected' }" :style="{ width: item.progress + '%' }"></div>
                                        </div>
                                        <div class="flex items-center justify-between gap-4 text-xs">
                                            <p>{{ item.tasks.completed }} <span class="text-muted dark:text-darkmuted">/</span> {{ item.tasks.total }} <span class="text-muted dark:text-white/80">Total Tasks</span></p>
                                            <p>{{ item.progress }}%</p>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                </div>

                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Handler</h2>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div id="handlerone" class="space-y-4">
                            <div group="people" handle=".handle" @end="onDragEnd">
                                <draggable v-model="items5" class="space-y-4">
                                    <template v-slot:item="{ item }">
                                        <div class="space-y-4" v-draggable>
                                            <div class="flex items-start justify-between gap-4 p-5 border rounded cursor-move handle border-black/10 dark:border-darkborder">
                                                <div class="flex items-center gap-3">
                                                    <div class="w-12 h-12">
                                                        <img :src="item.avatar" class="rounded" alt="">
                                                    </div>
                                                    <div>
                                                        <p class="text-base font-semibold dark:text-white">{{ item.name }}</p>
                                                        <p class="text-muted dark:text-darkmuted">{{ item.email }}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="cursor-pointer group">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-muted group-hover:hidden">
                                                            <path fill="currentColor" d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hidden w-5 h-5 text-purple group-hover:block">
                                                            <path fill="currentColor" d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </draggable>
                            </div>
                        </div>
                        <div id="handlertwo" class="space-y-4">
                            <div group="people" handle=".handle" @end="onDragEnd">
                                <draggable v-model="items6" class="space-y-4">
                                    <template v-slot:item="{ item }">
                                        <div class="space-y-4" v-draggable>
                                            <div class="flex items-start justify-between gap-4 p-5 border rounded cursor-move handle border-black/10 dark:border-darkborder">
                                                <div class="flex items-center gap-3">
                                                    <div class="w-12 h-12">
                                                        <img :src="item.avatar" class="rounded" alt="">
                                                    </div>
                                                    <div>
                                                        <p class="text-base font-semibold dark:text-white">{{ item.name }}</p>
                                                        <p class="text-muted dark:text-darkmuted">{{ item.email }}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="cursor-pointer group">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-muted group-hover:hidden">
                                                            <path fill="currentColor" d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hidden w-5 h-5 text-purple group-hover:block">
                                                            <path fill="currentColor" d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </draggable>
                            </div>
                        </div>
                        <div id="handlerthree" class="space-y-4">
                            <div group="people" handle=".handle" @end="onDragEnd">
                                <draggable v-model="items7" class="space-y-4">
                                    <template v-slot:item="{ item }">
                                        <div class="space-y-4" v-draggable>
                                            <div class="flex items-start justify-between gap-4 p-5 border rounded cursor-move handle border-black/10 dark:border-darkborder">
                                                <div class="flex items-center gap-3">
                                                    <div class="w-12 h-12">
                                                        <img :src="item.avatar" class="rounded" alt="">
                                                    </div>
                                                    <div>
                                                        <p class="text-base font-semibold dark:text-white">{{ item.name }}</p>
                                                        <p class="text-muted dark:text-darkmuted">{{ item.email }}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="cursor-pointer group">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-muted group-hover:hidden">
                                                            <path fill="currentColor" d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hidden w-5 h-5 text-purple group-hover:block">
                                                            <path fill="currentColor" d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </draggable>
                            </div>
                        </div>
                        <div id="handlerfour" class="space-y-4">
                            <div group="people" handle=".handle" @end="onDragEnd">
                                <draggable v-model="items8" class="space-y-4">
                                    <template v-slot:item="{ item }">
                                        <div class="space-y-4" v-draggable>
                                            <div class="flex items-start justify-between gap-4 p-5 border rounded cursor-move handle border-black/10 dark:border-darkborder">
                                                <div class="flex items-center gap-3">
                                                    <div class="w-12 h-12">
                                                        <img :src="item.avatar" class="rounded" alt="">
                                                    </div>
                                                    <div>
                                                        <p class="text-base font-semibold dark:text-white">{{ item.name }}</p>
                                                        <p class="text-muted dark:text-darkmuted">{{ item.email }}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span class="cursor-pointer group">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-muted group-hover:hidden">
                                                            <path fill="currentColor" d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hidden w-5 h-5 text-purple group-hover:block">
                                                            <path fill="currentColor" d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </draggable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { ref } from "vue";
import Draggable from "vue3-draggable";

import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';
import avatar1 from '@/assets/images/avatar-1.png';
import avatar2 from '@/assets/images/avatar-2.png';
import avatar3 from '@/assets/images/avatar-3.png';
import avatar4 from '@/assets/images/avatar-4.png';
import avatar5 from "@/assets/images/avatar-5.png";
import avatar6 from "@/assets/images/avatar-6.png";
import avatar7 from "@/assets/images/avatar-7.png";
import avatar9 from "@/assets/images/avatar-9.png";
import avatar10 from "@/assets/images/avatar-10.png";
import avatar11 from "@/assets/images/avatar-11.png";
import avatar12 from "@/assets/images/avatar-12.png";
import avatar13 from "@/assets/images/avatar-13.png";
import avatar16 from "@/assets/images/avatar-16.png";
import avatar17 from "@/assets/images/avatar-17.png";
import avatar20 from "@/assets/images/avatar-20.png";

import dropbox from "@/assets/images/dropbox.png";
import badoo from "@/assets/images/badoo.png";
import invision from "@/assets/images/invision.png";
import bitbucket from "@/assets/images/bitbucket.png";
import dailymotion from "@/assets/images/dailymotion.png";
import blogger from "@/assets/images/blogger.png";
import digg from "@/assets/images/digg.png";
import kickstarter from "@/assets/images/kickstarter.png";
import patreon from "@/assets/images/patreon.png";
import zendesk from "@/assets/images/zendesk.png";
import marvel from "@/assets/images/marvel.png";
import ok from "@/assets/images/ok.png";

const items = ref([
    {
        id: 1,
        title: 'Company logo design',
        dueDate: 'Feb 28, 2023',
        imageUrl: bitbucket,
        userAvatar: [avatar17],
        extraAvatars: 0,
        status: 'Completed',
        statusClass: 'text-xs text-success',
        progressClass: 'absolute h-full bg-success',
        progress: 100,
        tasks: {
            completed: 18,
            total: 18
        }
    },
    {
        id: 2,
        title: 'Poster illustration design',
        dueDate: 'Nov 10, 2024',
        imageUrl: dailymotion,
        userAvatar: [avatar16],
        extraAvatars: 0,
        status: 'Review',
        statusClass: 'text-xs text-warning',
        progressClass: 'absolute h-full bg-warning',
        progress: 15,
        tasks: {
            completed: 1,
            total: 10
        }

    }
]);

const items2 = ref([
    {
        id: 1,
        title: "Poster illustation design",
        dueDate: "Nov 10, 2024",
        imageUrl: dropbox,
        status: "Pending",
        userAvatar: [avatar16],
        extraAvatars: 0,
        progress: 71,
        tasks: {
            completed: 13,
            total: 39
        }
    },
    {
        id: 2,
        title: "Coffee detail page - Main Page",
        dueDate: "Jun 20, 2022",
        imageUrl: badoo,
        userAvatar: [avatar17],
        extraAvatars: 0,
        status: "Compated",
        progress: 100,
        tasks: {
            completed: 74,
            total: 74
        }
    },
    {
        id: 3,
        title: "Drinking bottle graphics",
        dueDate: "Jan 10, 2020",
        imageUrl: invision,
        userAvatar: [avatar17],
        extraAvatars: 0,
        status: "Rejected",
        progress: 40,
        tasks: {
            completed: 19,
            total: 49
        }
    }
]);

const items3 = ref([
    {
        id: 1,
        title: "Drinking bottle graphics",
        dueDate: "Jun 11, 2023",
        imageUrl: blogger,
        userAvatar: [avatar13, avatar10],
        extraAvatars: 3,
        status: "In Progress",
        progress: 64,
        tasks: { completed: 19, total: 29 }
    },
    {
        id: 2,
        title: "Poster illustation design",
        dueDate: "Nov 10, 2024",
        imageUrl: digg,
        userAvatar: [avatar16],
        extraAvatars: 0,
        status: "Pending",
        progress: 71,
        tasks: { completed: 13, total: 39 }
    },
    {
        id: 3,
        title: "Coffee detail page - Main Page",
        dueDate: "Jun 20, 2022",
        imageUrl: kickstarter,
        userAvatar: [avatar20],
        extraAvatars: 0,
        status: "Completed",
        progress: 100,
        tasks: { completed: 74, total: 74 }
    },
    {
        id: 4,
        title: "Drinking bottle graphics",
        dueDate: "Jan 10, 2020",
        imageUrl: patreon,
        userAvatar: [avatar5, avatar7],
        extraAvatars: 2,
        status: "Rejected",
        progress: 40,
        tasks: { completed: 19, total: 49 }
    }
]);

const items4 = ref([
    {
        id: 1,
        title: "Company logo design",
        dueDate: "Feb 28, 2023",
        imageUrl: zendesk,
        userAvatar: [avatar5, avatar7],
        status: "Completed",
        progress: 100,
        tasks: { completed: 18, total: 18 }
    },
    {
        id: 2,
        title: "Drinking bottle graphics",
        dueDate: "Jun 11, 2023",
        imageUrl: marvel,
        userAvatar: [avatar5, avatar7],
        status: "In Progress",
        progress: 64,
        tasks: { completed: 19, total: 29 }
    },
    {
        id: 3,
        title: "Poster illustation design",
        dueDate: "Nov 10, 2024",
        imageUrl: ok,
        userAvatar: [avatar5, avatar7],
        status: "Review",
        progress: 15,
        tasks: { completed: 1, total: 10 }
    }
]);

const items5 = ref([
    { name: 'Lori M. McGee', email: 'LoriMMcGee@jourrapide.com', avatar: avatar1 },
    { name: 'Sally R. Roberts', email: 'SallyRRoberts@teleworm.us', avatar: avatar2 },
    { name: 'Shona G. Ayala', email: 'ShonaGAyala@dayrep.com', avatar: avatar3 },
]);
const items6 = ref([
    { name: 'Dianne M. Moore', email: 'DianneMMoore@armyspy.com', avatar: avatar4 },
    { name: 'Judy M. Beier', email: 'JudyMBeier@rhyta.com', avatar: avatar5 },
    { name: 'Donna R. Leon', email: 'DonnaRLeon@dayrep.com', avatar: avatar6 },
    { name: 'Kevin D. Smith', email: 'KevinDSmith@jourrapide.com', avatar: avatar7 },
]);
const items7 = ref([
    { name: 'Donald C. Ritch', email: 'DonaldCRitch@jourrapide.com', avatar: avatar7 },
    { name: 'Anthony M. Jones', email: 'AnthonyMJones@rhyta.com', avatar: avatar9 },
]);
const items8 = ref([
    { name: 'Ronald H. Bullock', email: 'RonaldHBullock@armyspy.com', avatar: avatar10 },
    { name: 'Valerie E. Cook', email: 'ValerieECook@jourrapide.com', avatar: avatar11 },
    { name: 'Christine J. Muller', email: 'ChristineJMuller@dayrep.com', avatar: avatar12 },
]);
</script>
