<script setup>
import { ref, onMounted } from 'vue';
import Layout from '../../layouts/vertical.vue';
import headTitle from '../../components/head-title.vue';
import { ecommerceChartOptions1, ecommerceChartOptions2, ecommerceChartOptions3, ecommerceChartOptions4, ecommerceChartOptions5, ecommerceChartOptions6, ecommerceChartOptions7 } from './chart/chart.js';
import Dropdown from "@/views/ui-element/dropdowns/dropdown.vue";
const dropdownItems = ["Weekly", "Monthly", "Yearly"];

</script>

<template>
    <Layout>
        <headTitle title="eCommerce Dashboard" items="Sliced" />

        <!-- Start All Card -->
        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div class="flex items-center justify-between gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                    <div>
                        <p class="text-base dark:text-white/80">Total Income</p>
                        <h4 class="flex items-center gap-4 mt-3 text-2xl font-semibold text-black dark:text-white">15102
                            <span class="p-1 text-sm leading-none rounded-md bg-success/20 text-success">23%</span>
                        </h4>
                        <p class="text-muted">Current Month</p>
                    </div>
                    <div>
                        <apexchart type="line" height="60" :options="ecommerceChartOptions1" :series="ecommerceChartOptions1.series"></apexchart>
                    </div>
                </div>
                <div class="flex items-center justify-between gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                    <div>
                        <p class="text-base dark:text-white/80">Total Revenue</p>
                        <h4 class="flex items-center gap-4 mt-3 text-2xl font-semibold text-black dark:text-white">4581
                            <span class="p-1 text-sm leading-none rounded-md bg-danger/20 text-danger">24%</span>
                        </h4>
                        <p class="text-muted">Current Month</p>
                    </div>
                    <div>
                        <apexchart type="line" height="60" :options="ecommerceChartOptions2" :series="ecommerceChartOptions2.series"></apexchart>
                    </div>
                </div>
                <div class="flex items-center justify-between gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                    <div>
                        <p class="text-base dark:text-white/80">Product Sold</p>
                        <h4 class="flex items-center gap-4 mt-3 text-2xl font-semibold text-black dark:text-white">2140
                            <span class="p-1 text-sm leading-none rounded-md bg-danger/20 text-danger">10%</span>
                        </h4>
                        <p class="text-muted">Current Month</p>
                    </div>
                    <div>
                        <apexchart type="line" height="60" :options="ecommerceChartOptions3" :series="ecommerceChartOptions3.series"></apexchart>
                    </div>
                </div>
                <div class="flex items-center justify-between gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                    <div>
                        <p class="text-base dark:text-white/80">Customers</p>
                        <h4 class="flex items-center gap-4 mt-3 text-2xl font-semibold text-black dark:text-white">7714
                            <span class="p-1 text-sm leading-none rounded-md bg-success/20 text-success">82%</span>
                        </h4>
                        <p class="text-muted">Current Month</p>
                    </div>
                    <div>
                        <apexchart type="line" height="60" :options="ecommerceChartOptions4" :series="ecommerceChartOptions4.series"></apexchart>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div class="gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder md:col-span-2 xl:col-span-2 border-black/10">
                    <div class="flex items-center justify-between gap-4 mb-4">
                        <h2 class="text-base font-semibold text-black dark:text-white/80">Static Overview</h2>
                        <div>
                            <div x-data="{ dropdown: false}" class="ml-auto dropdown">
                                <Dropdown classname="flex items-center justify-center w-6 h-6 text-black transition-all duration-300 rounded sm:w-9 sm:h-9 dark:text-darkmuted dark:hover:text-white dark:hover:bg-white/5 hover:bg-light/50" :linkClass="'btn'" :isSvg='true' :svgName="'M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'" :isIcon='true' :dropdownItems='dropdownItems' />

                            </div>
                        </div>
                    </div>
                    <div>
                        <apexchart type="bar" height="280" :options="ecommerceChartOptions5" :series="ecommerceChartOptions5.series"></apexchart>
                    </div>
                </div>
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Top Categories</h2>
                    <apexchart type="radar" height="280" :options="ecommerceChartOptions7" :series="ecommerceChartOptions7.series"></apexchart>
                </div>
                <div class="gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Users by Device</h2>
                    <apexchart type="donut" height="280" :options="ecommerceChartOptions6" :series="ecommerceChartOptions6.series"></apexchart>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-12">
                <div class="gap-6 p-5 bg-white border rounded 2xl:col-span-9 dark:bg-darklight dark:border-darkborder border-black/10">
                    <div class="flex items-center gap-3 mb-4">
                        <h2 class="text-base font-semibold text-black capitalize dark:text-white/80 grow">Products List</h2>
                        <a href="#" class="px-3 py-1.5 rounded-md text-xs border border-black/20 dark:border-darkborder text-muted"><i class="align-bottom ltr:mr-1 rtl:ml-1 ri-filter-line"></i> Filters</a>
                    </div>
                    <div class="overflow-auto">
                        <table class="min-w-[640px] w-full">
                            <thead>
                                <tr class="ltr:text-left rtl:text-right">
                                    <th>Product Name</th>
                                    <th>Categories</th>
                                    <th>Total Sales</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-muted">
                                    <td><a href="#!" class="capitalize">wireless cyberpunk headphones</a></td>
                                    <td>Headphones</td>
                                    <td>2952</td>
                                    <td>258</td>
                                    <td>$49.65</td>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-muted">
                                    <td><a href="#!" class="capitalize">green front sweater</a></td>
                                    <td>Fashion</td>
                                    <td>2341</td>
                                    <td>140</td>
                                    <td>$229.65</td>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-muted">
                                    <td><a href="#!" class="capitalize">Isolated white cap</a></td>
                                    <td>Accessories</td>
                                    <td>2792</td>
                                    <td>654</td>
                                    <td>$39.47</td>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-muted">
                                    <td><a href="#!" class="capitalize">white tote bag</a></td>
                                    <td>Bag</td>
                                    <td>1765</td>
                                    <td>265</td>
                                    <td>$87.99</td>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-muted">
                                    <td><a href="#!" class="capitalize">Running orange shoes</a></td>
                                    <td>Shoes</td>
                                    <td>2268</td>
                                    <td>322</td>
                                    <td>$156.41</td>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-success"><i class="ri-eye-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-purple"><i class="ri-edit-line"></i></a>
                                            <a href="#!" class="transition duration-200 ease-linear text-muted hover:text-danger"><i class="ri-delete-bin-line"></i></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="text-muted">
                                    <td><a href="#!" class="capitalize">Stylish golden watch</a></td>
                                    <td>Watch</td>
                                    <td>3128</td>
                                    <td>985</td>
                                    <td>$207.00</td>
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
                    <div class="flex items-center gap-3 mt-4">
                        <p class="text-muted grow">Showing <b>05</b> of <b>07</b> Results</p>
                        <ul class="inline-flex items-center gap-1 shrink-0">
                            <li><button type="button" class="flex justify-center px-2.5 py-1 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:text-purple dark:hover:border-purple">First</button></li>
                            <li><button type="button" class="flex justify-center px-2.5 py-1 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:text-purple dark:hover:border-purple">Prev</button></li>
                            <li><button type="button" class="flex justify-center px-2.5 py-1 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:text-purple dark:hover:border-purple">1</button></li>
                            <li><button type="button" class="flex justify-center px-2.5 py-1 rounded transition text-purple border border-purple">2</button></li>
                            <li><button type="button" class="flex justify-center px-2.5 py-1 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:text-purple dark:hover:border-purple">3</button></li>
                            <li><button type="button" class="flex justify-center px-2.5 py-1 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:text-purple dark:hover:border-purple">Next</button></li>
                            <li><button type="button" class="flex justify-center px-2.5 py-1 rounded transition text-muted hover:text-purple border border-black/10 hover:border-purple dark:border-darkborder dark:text-darkmuted dark:hover:text-purple dark:hover:border-purple">Last</button></li>
                        </ul>
                    </div>
                </div>
                <div class="gap-6 p-5 bg-white border rounded dark:bg-darklight dark:border-darkborder border-black/10 2xl:col-span-3">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Most Selling Products</h2>
                    <div class="flex flex-col gap-3">
                        <div class="flex gap-2 p-3 bg-gray-100 rounded-md dark:bg-darkborder/50">
                            <img src="@/assets/images/product-1.png" alt="" class="size-10 shrink-0">
                            <div class="overflow-hidden grow">
                                <h6 class="mb-1 text-black capitalize truncate dark:text-white/80"><a href="#!">Elegance color apparel clothes clothing</a></h6>
                                <ul class="flex items-center gap-3 text-xs text-muted">
                                    <li>Sales: 158</li>
                                    <li>Fashion</li>
                                </ul>
                            </div>
                            <h6 class="font-bold text-black rtl:float-left ltr:float-right dark:text-white/80">$49.99</h6>
                        </div>
                        <div class="flex gap-2 p-3 bg-gray-100 rounded-md dark:bg-darkborder/50">
                            <img src="@/assets/images/product-2.png" alt="" class="size-10 shrink-0">
                            <div class="overflow-hidden grow">
                                <h6 class="mb-1 text-black capitalize truncate dark:text-white/80"><a href="#!">Graphic tshirt trendy</a></h6>
                                <ul class="flex items-center gap-3 text-xs text-muted">
                                    <li>Sales: 264</li>
                                    <li>Women Fashion</li>
                                </ul>
                            </div>
                            <h6 class="font-bold text-black rtl:float-left ltr:float-right dark:text-white/80">$85.77</h6>
                        </div>
                        <div class="flex gap-2 p-3 bg-gray-100 rounded-md dark:bg-darkborder/50">
                            <img src="@/assets/images/product-3.png" alt="" class="size-10 shrink-0">
                            <div class="overflow-hidden grow">
                                <h6 class="mb-1 text-black capitalize truncate dark:text-white/80"><a href="#!">Simple Gray t-shirt</a></h6>
                                <ul class="flex items-center gap-3 text-xs text-muted">
                                    <li>Sales: 365</li>
                                    <li>Fashion</li>
                                </ul>
                            </div>
                            <h6 class="font-bold text-black rtl:float-left ltr:float-right dark:text-white/80">$73.22</h6>
                        </div>
                        <div class="flex gap-2 p-3 bg-gray-100 rounded-md dark:bg-darkborder/50">
                            <img src="@/assets/images/product-4.png" alt="" class="size-10 shrink-0">
                            <div class="overflow-hidden grow">
                                <h6 class="mb-1 text-black capitalize truncate dark:text-white/80"><a href="#!">Modern minimal headphone</a></h6>
                                <ul class="flex items-center gap-3 text-xs text-muted">
                                    <li>Sales: 144</li>
                                    <li>Headphones</li>
                                </ul>
                            </div>
                            <h6 class="font-bold text-black rtl:float-left ltr:float-right dark:text-white/80">$164.20</h6>
                        </div>
                        <div class="flex gap-2 p-3 bg-gray-100 rounded-md dark:bg-darkborder/50">
                            <img src="@/assets/images/product-5.png" alt="" class="size-10 shrink-0">
                            <div class="overflow-hidden grow">
                                <h6 class="mb-1 text-black capitalize truncate dark:text-white/80"><a href="#!">Top view cap</a></h6>
                                <ul class="flex items-center gap-3 text-xs text-muted">
                                    <li>Sales: 648</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                            <h6 class="font-bold text-black rtl:float-left ltr:float-right dark:text-white/80">$99.49</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End All Card -->
    </Layout>
</template>