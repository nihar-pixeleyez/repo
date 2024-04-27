<template>
    <Layout>
        <headTitle title="Editable" items="Table" />

        <!-- Start All Card -->
        <div class="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
            <div class="grid grid-cols-1 gap-4">
                <div class="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                    <h2 class="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">Table Editable</h2>
                    <div class="overflow-auto">
                        <span class="text-muted">Text Double Click To Edit Table.</span>
                        <table class="min-w-[640px] w-full mt-4 table-hover">
                            <thead>
                                <tr class="ltr:text-left rtl:text-right">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Phone No.</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(item, index) in items" :key="index">
                                    <tr>
                                        <td>{{ item.id }}</td>
                                        <td>
                                            <span v-show="!item.editing" @dblclick="editItem(item, 'name')">{{ item.name }}</span>
                                            <input v-show="item.editing && item.field === 'name'" type="text" class="form-input" v-model="item.name" @keydown.enter="saveItem(item)">
                                        </td>
                                        <td>
                                            <span v-show="!item.editing" @dblclick="editItem(item, 'title')">{{ item.title }}</span>
                                            <input v-show="item.editing && item.field === 'title'" type="text" class="form-input" v-model="item.title" @keydown.enter="saveItem(item)">
                                        </td>
                                        <td>
                                            <span v-show="!item.editing" @dblclick="editItem(item, 'phone')">{{ item.phone }}</span>
                                            <input v-show="item.editing && item.field === 'phone'" type="text" class="form-input" v-model="item.phone" @keydown.enter="saveItem(item)">
                                        </td>
                                        <td>
                                            <span v-show="!item.editing" @dblclick="editItem(item, 'role')">{{ item.role }}</span>
                                            <select v-show="item.editing && item.field === 'role'" class="form-select" v-model="item.role" @keydown.enter="saveItem(item)">
                                                <option>Admin</option>
                                                <option>Owner</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button class="text-danger ltr:ml-2 rtl:mr-2" @click="deleteItem(index)">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline-block w-5 h-5">
                                                    <path fill="currentColor" d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { ref } from 'vue';
import Layout from '@/layouts/vertical.vue';
import headTitle from '@/components/head-title.vue';

const items = ref([
    { id: 1, name: 'Lindsay Walton', title: 'Front-end Developer', phone: '832-333-0011', role: 'Admin', editing: false, field: '' },
    { id: 2, name: 'Courtney Henry', title: 'Designer', phone: '551-697-3625', role: 'Owner', editing: false, field: '' },
    { id: 3, name: 'Tom Cook', title: 'Director of Product', phone: '208-628-0572', role: 'Admin', editing: false, field: '' },
    { id: 4, name: 'Whitney Francis', title: 'Copywriter', phone: '903-342-3348', role: 'Owner', editing: false, field: '' },
    { id: 5, name: 'Leonard Krasner', title: 'Senior Designer', phone: '602-690-7009', role: 'Admin', editing: false, field: '' }
]);

const editItem = (item, field) => {
    items.value.forEach(i => {
        if (i === item) {
            i.editing = true;
            i.field = field;
        } else {
            i.editing = false;
            i.field = '';
        }
    });
};

const saveItem = (item) => {
    item.editing = false;
    item.field = '';
};

const deleteItem = (index) => {
    items.value.splice(index, 1);
};
</script>
