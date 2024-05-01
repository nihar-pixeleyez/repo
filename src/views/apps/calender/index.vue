<template>
    <Layout>
        <div>
            <headTitle title="Calendar" items="Apps"/>
            <FullCalendar class="pt-4" :options="calendarOptions" />
        </div>
    </Layout>
</template>

<script setup>
import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import listPlugin from "@fullcalendar/list";

const calendarPlugins = [dayGridPlugin, timeGridPlugin,listPlugin];

const calendarOptions = ref({
    timeZone: "local",
    droppable: true,
    navLinks: true,
    plugins: calendarPlugins,
    themeSystem: "bootstrap",
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    },
    windowResize: () => {
        getInitialView();
    },
    initialView: getInitialView(),
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    dateClick: dateClicked,
    eventClick: editEvent,
    eventsSet: handleEvents,
});

function getInitialView() {
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
        return "timeGridWeek";
    } else if (window.innerWidth <= 768) {
        return "listMonth";
    } else {
        return "dayGridMonth";
    }
}

function dateClicked(info) {
    // Your dateClicked logic here
}

function editEvent(info) {
    // Your editEvent logic here
}

function handleEvents(events) {
    // Your handleEvents logic here
}
</script>
