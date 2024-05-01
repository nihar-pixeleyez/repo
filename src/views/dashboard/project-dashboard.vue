<script setup>
import { ref, onMounted } from 'vue';
import Layout from '../../layouts/vertical.vue';
import headTitle from '../../components/head-title.vue';
import { projectChartOptions, projectChartOptions2, projectChartOptions3, projectChartOptions4 } from './chart/chart.js';
import Dropdown from "@/views/ui-element/dropdowns/dropdown.vue";
const dropdownItems = ["Weekly", "Monthly", "Yearly"];
</script>

<template>
    <Layout>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-9">
                <headTitle title="Project Dashboard" items="Sliced" />
                <!-- Start All Card -->
                <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)] mt-4">
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        <div class="flex items-center justify-between gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                            <div>
                                <p class="text-base dark:text-white/80">Upcoming Projects</p>
                                <h4 class="flex items-center gap-4 mt-3 text-2xl font-semibold text-black dark:text-white">198
                                    <span class="p-1 text-sm leading-none rounded-md bg-success/20 text-success">14.98%</span>
                                </h4>
                                <p class="mt-3 mb-0 text-muted">Current Month</p>
                            </div>
                            <div>
                                <apexchart type="line" height="60" :options="projectChartOptions" :series="projectChartOptions.series"></apexchart>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                            <div>
                                <p class="text-base dark:text-white/80">Total Projects</p>
                                <h4 class="flex items-center gap-4 mt-3 text-2xl font-semibold text-black dark:text-white">4581
                                    <span class="p-1 text-sm leading-none rounded-md bg-danger/20 text-danger">24%</span>
                                </h4>
                                <p class="mt-3 mb-0 text-muted">Current Month</p>
                            </div>
                            <div>
                                <apexchart type="line" height="60" :options="projectChartOptions2" :series="projectChartOptions2.series"></apexchart>
                            </div>
                        </div>
                        <div class="flex items-center justify-between gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                            <div>
                                <p class="text-base dark:text-white/80">Total Referral</p>
                                <h4 class="flex items-center gap-4 mt-3 text-2xl font-semibold text-black dark:text-white">2140
                                    <span class="p-1 text-sm leading-none rounded-md bg-danger/20 text-danger">10%</span>
                                </h4>
                                <p class="mt-3 mb-0 text-muted">Current Month</p>
                            </div>
                            <div>
                                <apexchart type="line" height="60" :options="projectChartOptions3" :series="projectChartOptions3.series"></apexchart>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                        <div class="gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder md:col-span-2 xl:col-span-3 border-black/10">
                            <div class="flex items-center justify-between gap-4 mb-4">
                                <h2 class="text-base font-semibold text-black dark:text-white/80">Task Activity</h2>
                                <div>
                                    <Dropdown classname="flex items-center justify-center w-6 h-6 text-black transition-all duration-300 rounded sm:w-9 sm:h-9 dark:text-darkmuted dark:hover:text-white dark:hover:bg-white/5 hover:bg-light/50 text-black dark:text-white" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                                </div>
                            </div>
                            <div>
                                <apexchart type="line" class="-ml-4" height="300" :options="projectChartOptions4" :series="projectChartOptions4.series"></apexchart>
                            </div>
                        </div>
                        <div class="bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                            <div class="gap-6 p-5 pb-4">
                                <h2 class="text-base font-semibold text-black capitalize dark:text-white/80">Today's Tasks</h2>
                            </div>
                            <div class="flex flex-col gap-3 h-[320px]  overflow-y-auto px-5">
                                <a href="#!" class="block p-3 border rounded-md dark:border-darkborder border-black/10">
                                    <h6 class="mb-3 text-black truncate dark:text-white/80">Chat Application Design</h6>
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/images/avatar-20.png" alt="" class="rounded-full size-8">
                                        <div class="grow">
                                            <p class="text-xs text-muted">Assigned To</p>
                                            <h6 class="text-sm text-black dark:text-white/80">Natali Craig</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" class="block p-3 border rounded-md dark:border-darkborder border-black/10">
                                    <h6 class="mb-3 text-black truncate dark:text-white/80">HR Management System</h6>
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/images/avatar-23.png" alt="" class="rounded-full size-8">
                                        <div class="grow">
                                            <p class="text-xs text-muted">Assigned To</p>
                                            <h6 class="text-sm text-black dark:text-white/80">Catherine</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" class="block p-3 border rounded-md dark:border-darkborder border-black/10">
                                    <h6 class="mb-3 text-black truncate dark:text-white/80">Responsive Not Working</h6>
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/images/avatar-19.png" alt="" class="rounded-full size-8">
                                        <div class="grow">
                                            <p class="text-xs text-muted">Assigned To</p>
                                            <h6 class="text-sm text-black dark:text-white/80">Kate Morrison</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" class="block p-3 border rounded-md dark:border-darkborder border-black/10">
                                    <h6 class="mb-3 text-black truncate dark:text-white/80">Redesign My Website</h6>
                                    <div class="flex items-center gap-2">
                                        <img src="@/assets/images/avatar-20.png" alt="" class="rounded-full size-8">
                                        <div class="grow">
                                            <p class="text-xs text-muted">Assigned To</p>
                                            <h6 class="text-sm text-black dark:text-white/80">Natali Craig</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <div class="gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                            <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Leads & Client Activity</h2>
                            <div class="overflow-auto">
                                <table class="min-w-[640px] w-full">
                                    <thead>
                                        <tr class="ltr:text-left rtl:text-right">
                                            <th>Project Name</th>
                                            <th>Work Timeline</th>
                                            <th>Project Team</th>
                                            <th>Project Type</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="text-muted">
                                            <td>Chat App Development</td>
                                            <td>05 Feb, 2024 - 06 April, 2024</td>
                                            <td>
                                                <div class="flex items-center -space-x-2 rtl:space-x-reverse">
                                                    <a href="#!"><img src="@/assets/images/avatar-27.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                    <a href="#!"><img src="@/assets/images/avatar-26.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                    <a href="#!"><img src="@/assets/images/avatar-20.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                    <a href="#!">
                                                        <div class="flex items-center justify-center text-xs text-white border-2 border-white rounded-full dark:border-darklight bg-purple size-7">2+</div>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>React + Mongodb</td>
                                            <td><span class="px-2 py-1 text-xs font-bold rounded bg-info/10 text-info">Inprogress</span></td>
                                            <td>
                                                <div class="flex items-center gap-3">
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-muted">
                                            <td>Redesign for Business Website</td>
                                            <td>20 Feb, 2024 - 12 March, 2024</td>
                                            <td>
                                                <div class="flex items-center -space-x-2 rtl:space-x-reverse">
                                                    <a href="#!"><img src="@/assets/images/avatar-10.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                    <a href="#!"><img src="@/assets/images/avatar-16.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                </div>
                                            </td>
                                            <td>VueJs</td>
                                            <td><span class="px-2 py-1 text-xs font-bold text-blue-500 rounded bg-blue-500/10">New</span></td>
                                            <td>
                                                <div class="flex items-center gap-3">
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-muted">
                                            <td>HR Management </td>
                                            <td>13 Aug, 2024 - 19 Oct, 2024</td>
                                            <td>
                                                <div class="flex items-center -space-x-2 rtl:space-x-reverse">
                                                    <a href="#!"><img src="@/assets/images/avatar-2.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                </div>
                                            </td>
                                            <td>PHP</td>
                                            <td><span class="px-2 py-1 text-xs font-bold rounded text-success bg-success/10">Completed</span></td>
                                            <td>
                                                <div class="flex items-center gap-3">
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-muted">
                                            <td>Dental website - Landing page</td>
                                            <td>02 Jan, 2024 - 26 Feb, 2024</td>
                                            <td>
                                                <div class="flex items-center -space-x-2 rtl:space-x-reverse">
                                                    <a href="#!"><img src="@/assets/images/avatar-19.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                    <a href="#!"><img src="@/assets/images/avatar-20.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                    <a href="#!"><img src="@/assets/images/avatar-18.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                </div>
                                            </td>
                                            <td>VueJs + Laravel</td>
                                            <td><span class="px-2 py-1 text-xs font-bold rounded text-info bg-info/10">Inprogress</span></td>
                                            <td>
                                                <div class="flex items-center gap-3">
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-muted">
                                            <td>Hospital Management System</td>
                                            <td>09 June, 2024 - 09 Oct, 2024</td>
                                            <td>
                                                <div class="flex items-center -space-x-2 rtl:space-x-reverse">
                                                    <a href="#!"><img src="@/assets/images/avatar-8.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                    <a href="#!"><img src="@/assets/images/avatar-19.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                    <a href="#!"><img src="@/assets/images/avatar-16.png" alt="" class="border-2 border-white rounded-full dark:border-darklight size-7"></a>
                                                </div>
                                            </td>
                                            <td>Asp.Net Core</td>
                                            <td><span class="px-2 py-1 text-xs font-bold rounded text-warning bg-warning/10">Pending</span></td>
                                            <td>
                                                <div class="flex items-center gap-3">
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                                    <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- End All Card -->
            <div class="h-full col-span-3 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                <div class="p-5 border-b dark:border-darkborder border-black/10">
                    <h6 class="font-semibold text-black dark:text-white/80">Team's Converation</h6>
                </div>
                <div class="p-5">
                    <div class="flex items-center mb-3">
                        <h6 class="text-black grow dark:text-white/80">Team Chat</h6>
                        <a href="#!" class="underline shrink-0 text-purple">See All</a>
                    </div>
                    <div class="flex flex-col gap-3 h-[440px]  overflow-y-auto">
                        <div class="flex gap-2 ltr:mr-10 rtl:ml-10 ltr:[&.right]:mr-0 rtl:[&.right]:ml-0 ltr:[&.right]:ml-10 rtl:[&.right]:mr-10 group">
                            <img src="@/assets/images/avatar-14.png" alt="" class="group-[&.right]:order-2 rounded-full size-8 shrink-0">
                            <div class="group-[&.right]:order-1 p-2 text-sm bg-gray-100 dark:bg-darkborder/50 dark:text-white/80 rounded-md ltr:group-[&.right]:text-right rtl:group-[&.right]:text-left">
                                <p>Hello, welcome to the SRBThemes thank you for visiting our website. How can we assist you?</p>
                            </div>
                        </div>
                        <div class="flex gap-2 ltr:mr-10 rtl:ml-10 ltr:[&.right]:mr-0 rtl:[&.right]:ml-0 ltr:[&.right]:ml-10 rtl:[&.right]:mr-10 group right">
                            <img src="@/assets/images/user.png" alt="" class="group-[&.right]:order-2 rounded-full size-8 shrink-0">
                            <div class="group-[&.right]:order-1 p-2 text-sm bg-gray-100 dark:bg-darkborder/50 dark:text-white/80 rounded-md ltr:group-[&.right]:text-right rtl:group-[&.right]:text-left">
                                <p>Hello, I would like to mention that this chat may be recorded for the internal training process.</p>
                            </div>
                        </div>
                        <div class="flex gap-2 ltr:mr-10 rtl:ml-10 ltr:[&.right]:mr-0 rtl:[&.right]:ml-0 ltr:[&.right]:ml-10 rtl:[&.right]:mr-10 group">
                            <img src="@/assets/images/avatar-14.png" alt="" class="group-[&.right]:order-2 rounded-full size-8 shrink-0">
                            <div class="group-[&.right]:order-1 p-2 text-sm bg-gray-100 dark:bg-darkborder/50 dark:text-white/80 rounded-md ltr:group-[&.right]:text-right rtl:group-[&.right]:text-left">
                                <p>May I request you to share your contact details?</p>
                            </div>
                        </div>
                        <div class="flex gap-2 ltr:mr-10 rtl:ml-10 ltr:[&.right]:mr-0 rtl:[&.right]:ml-0 ltr:[&.right]:ml-10 rtl:[&.right]:mr-10 group">
                            <img src="@/assets/images/avatar-14.png" alt="" class="group-[&.right]:order-2 rounded-full size-8 shrink-0">
                            <div class="group-[&.right]:order-1 p-2 text-sm bg-gray-100 dark:bg-darkborder/50 dark:text-white/80 rounded-md ltr:group-[&.right]:text-right rtl:group-[&.right]:text-left">
                                <p>I can explain to you the installation steps of Sliced. Shall I go ahead?</p>
                            </div>
                        </div>
                        <div class="flex gap-2 ltr:mr-10 rtl:ml-10 ltr:[&.right]:mr-0 rtl:[&.right]:ml-0 ltr:[&.right]:ml-10 rtl:[&.right]:mr-10 group right">
                            <img src="@/assets/images/user.png" alt="" class="group-[&.right]:order-2 rounded-full size-8 shrink-0">
                            <div class="group-[&.right]:order-1 p-2 text-sm bg-gray-100 dark:bg-darkborder/50 dark:text-white/80 rounded-md ltr:group-[&.right]:text-right rtl:group-[&.right]:text-left">
                                <p>What brings you to our website? What are you looking for? It will help us to serve you better.</p>
                            </div>
                        </div>
                        <div class="flex gap-2 ltr:mr-10 rtl:ml-10 ltr:[&.right]:mr-0 rtl:[&.right]:ml-0 ltr:[&.right]:ml-10 rtl:[&.right]:mr-10 group right">
                            <img src="@/assets/images/user.png" alt="" class="group-[&.right]:order-2 rounded-full size-8 shrink-0">
                            <div class="group-[&.right]:order-1 p-2 text-sm bg-gray-100 dark:bg-darkborder/50 dark:text-white/80 rounded-md ltr:group-[&.right]:text-right rtl:group-[&.right]:text-left">
                                <p>It will just take a moment to go through the details – Can I put you on hold?</p>
                            </div>
                        </div>
                        <div class="flex gap-2 ltr:mr-10 rtl:ml-10 ltr:[&.right]:mr-0 rtl:[&.right]:ml-0 ltr:[&.right]:ml-10 rtl:[&.right]:mr-10 group">
                            <img src="@/assets/images/avatar-14.png" alt="" class="group-[&.right]:order-2 rounded-full size-8 shrink-0">
                            <div class="group-[&.right]:order-1 p-2 text-sm bg-gray-100 dark:bg-darkborder/50 dark:text-white/80 rounded-md ltr:group-[&.right]:text-right rtl:group-[&.right]:text-left">
                                <p>I would like to recommend a “solution” that fits your requirements.</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative mt-5">
                        <input type="text" placeholder="Type your message" class="w-full px-4 py-2 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10 focus:outline-none focus:shadow-none focus:ring-0">
                        <a href="#!" class="absolute flex items-center justify-center w-8 h-8 rounded-md ltr:right-1.5 rtl:left-1.5 bg-purple top-[5px] text-white"><i class="ri-send-plane-2-line"></i></a>
                    </div>
                    <div class="flex items-center mt-5 mb-3">
                        <h6 class="text-black grow dark:text-white/80">Team Members</h6>
                        <a href="#!" class="underline shrink-0 text-purple">View All</a>
                    </div>
                    <ul class="flex flex-col gap-3 mb-4">
                        <li>
                            <div class="flex items-center gap-3">
                                <div class="relative rounded-full shrink-0">
                                    <img src="@/assets/images/avatar-2.png" alt="" class="rounded-full size-9">
                                    <span class="inline-block size-2 bg-success rounded-full absolute ltr:right-0.5 rtl:left-0.5 bottom-[1px] border border-white"></span>
                                </div>
                                <div class="grow">
                                    <h6 class="mb-1 text-black dark:text-white/80"><a href="#!">Natali Craig</a></h6>
                                    <p class="text-xs text-muted">Creative Designer</p>
                                </div>
                                <div x-data="{ dropdown: false}" class="shrink-0 dropdown">
                                    <Dropdown classname="flex text-black dark:text-white items-center justify-center w-6 h-6 text-black transition-all duration-300 rounded sm:w-9 sm:h-9 dark:text-darkmuted dark:hover:text-white dark:hover:bg-white/5 hover:bg-light/50" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-3">
                                <div class="relative rounded-full shrink-0">
                                    <img src="@/assets/images/avatar-5.png" alt="" class="rounded-full size-9">
                                    <span class="inline-block size-2 bg-danger rounded-full absolute ltr:right-0.5 rtl:left-0.5 bottom-[1px] border border-white"></span>
                                </div>
                                <div class="grow">
                                    <h6 class="mb-1 text-black dark:text-white/80"><a href="#!">William Johnson</a></h6>
                                    <p class="text-xs text-muted">Asp.Net Developer</p>
                                </div>
                                <div x-data="{ dropdown: false}" class="shrink-0 dropdown">
                                    <Dropdown classname="flex text-black dark:text-white items-center justify-center w-6 h-6 text-black transition-all duration-300 rounded sm:w-9 sm:h-9 dark:text-darkmuted dark:hover:text-white dark:hover:bg-white/5 hover:bg-light/50" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-3">
                                <div class="relative rounded-full shrink-0">
                                    <img src="@/assets/images/avatar-6.png" alt="" class="rounded-full size-9">
                                    <span class="inline-block size-2 bg-success rounded-full absolute ltr:right-0.5 rtl:left-0.5 bottom-[1px] border border-white"></span>
                                </div>
                                <div class="grow">
                                    <h6 class="mb-1 text-black dark:text-white/80"><a href="#!">Michael Brown</a></h6>
                                    <p class="text-xs text-muted">Laravel Developer</p>
                                </div>
                                <div x-data="{ dropdown: false}" class="shrink-0 dropdown">
                                    <Dropdown classname="flex text-black dark:text-white items-center justify-center w-6 h-6 text-black transition-all duration-300 rounded sm:w-9 sm:h-9 dark:text-darkmuted dark:hover:text-white dark:hover:bg-white/5 hover:bg-light/50" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-3">
                                <div class="relative rounded-full shrink-0">
                                    <img src="@/assets/images/avatar-8.png" alt="" class="rounded-full size-9">
                                    <span class="inline-block size-2 bg-success rounded-full absolute ltr:right-0.5 rtl:left-0.5 bottom-[1px] border border-white"></span>
                                </div>
                                <div class="grow">
                                    <h6 class="mb-1 text-black dark:text-white/80"><a href="#!">Kate Morrison</a></h6>
                                    <p class="text-xs text-muted">UI / UX Designer</p>
                                </div>
                                <div x-data="{ dropdown: false}" class="shrink-0 dropdown">
                                    <Dropdown classname="flex text-black dark:text-white items-center justify-center w-6 h-6 text-black transition-all duration-300 rounded sm:w-9 sm:h-9 dark:text-darkmuted dark:hover:text-white dark:hover:bg-white/5 hover:bg-light/50" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-3">
                                <div class="relative rounded-full shrink-0">
                                    <img src="@/assets/images/avatar-9.png" alt="" class="rounded-full size-9">
                                    <span class="inline-block size-2 bg-danger rounded-full absolute ltr:right-0.5 rtl:left-0.5 bottom-[1px] border border-white"></span>
                                </div>
                                <div class="grow">
                                    <h6 class="mb-1 text-black dark:text-white/80"><a href="#!">Catherine</a></h6>
                                    <p class="text-xs text-muted">React Developer</p>
                                </div>
                                <div x-data="{ dropdown: false}" class="shrink-0 dropdown">
                                    <Dropdown classname="flex text-black dark:text-white items-center justify-center w-6 h-6 text-black transition-all duration-300 rounded sm:w-9 sm:h-9 dark:text-darkmuted dark:hover:text-white dark:hover:bg-white/5 hover:bg-light/50" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex items-center gap-3">
                                <div class="relative rounded-full shrink-0">
                                    <div class="relative flex items-center justify-start text-black w-9 h-9">
                                        <img class="absolute top-0 left-0 object-cover w-5 h-5 overflow-hidden rounded-full ring-2 ring-white" src="@/assets/images/avatar-16.png" alt="">
                                        <img class="absolute top-0 right-0 object-cover w-5 h-5 overflow-hidden rounded-full ring-2 ring-white" src="@/assets/images/avatar-14.png" alt="">
                                        <img class="absolute bottom-0 object-cover w-5 h-5 overflow-hidden rounded-full left-1/4 ring-2 ring-white" src="@/assets/images/avatar-7.png" alt="">
                                    </div>
                                </div>
                                <div class="grow">
                                    <h6 class="mb-1 text-black dark:text-white/80"><a href="#!">Jackson, Michael, Lee</a></h6>
                                    <p class="text-xs text-muted">Developer Team</p>
                                </div>
                                <div x-data="{ dropdown: false}" class="shrink-0 dropdown">
                                    <Dropdown classname="flex text-black dark:text-white items-center justify-center w-6 h-6 text-black transition-all duration-300 rounded sm:w-9 sm:h-9 dark:text-darkmuted dark:hover:text-white dark:hover:bg-white/5 hover:bg-light/50" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />
                                </div>
                            </div>
                        </li>
                    </ul>
                    <router-link to="/chat" class="w-full text-center transition-all duration-300 border rounded-md btn text-purple border-purple hover:bg-purple hover:text-white"><i class="align-bottom ltr:mr-1 rtl:ml-1 ri-chat-2-line"></i> View All Chat</router-link>
                </div>
            </div>
        </div>
    </Layout>
</template>