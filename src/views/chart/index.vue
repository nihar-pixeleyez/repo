    <template>
        <Layout>
            <headTitle title="Chart" items="Sliced" />

            <!-- Start All Card -->
            <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Line Chart</h2>
                        <apexchart height="350" type="line" :options="linechartOptions" :series="linechartOptions.series"></apexchart>
                    </div>
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Area Chart</h2>
                        <apexchart height="350" type="area" :options="areachartOptions" :series="areachartOptions.series"></apexchart>
                    </div>
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Bar Chart</h2>
                        <apexchart height="350" type="bar" :options="barchartOptions" :series="barchartOptions.series"></apexchart>
                    </div>
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Simple Bar</h2>
                        <apexchart height="350" type="bar" :options="simplebarchartOptions" :series="simplebarchartOptions.series"></apexchart>
                    </div>
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Bar Chart</h2>
                        <apexchart height="350" type="bar" :options="barchartcenterOptions" :series="barchartcenterOptions.series"></apexchart>
                    </div>
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Spline Area Charts</h2>
                        <apexchart height="350" type="area" :options="areaChart1Options" :series="areaChart1Options.series"></apexchart>
                    </div>
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Basic Donut</h2>
                        <apexchart height="350" type="donut" :options="basicDonutChartOptions" :series="basicDonutChartOptions.series"></apexchart>
                    </div>
                    <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Doughnut chart</h2>
                        <apexchart height="350" type="radialBar" :options="radialBarChartOptions" :series="radialBarChartOptions.series"></apexchart>
                    </div>
                </div>
            </div>
        </Layout>
    </template>

<script setup>
import Layout from '@/layouts/vertical.vue'; // Adjust the path as per your project structure
import headTitle from '@/components/head-title.vue'; // Adjust the path as per your project structure
import { ref } from 'vue';
import { linechartOptions, areachartOptions, barchartOptions, simplebarchartOptions, barchartcenterOptions, areaChart1Options, basicDonutChartOptions, radialBarChartOptions } from './index.js';

const title = 'Charts';
</script>