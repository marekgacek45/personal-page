<template>
    <div>
        <Head title="Panel Admina"> </Head>
        <AdminLayout>
            <div class="relative overflow-x-auto">
                <table
                    class="w-full text-sm text-left rtl:text-right text-fontLight border border-fontDark box-shadow"
                >
                    <caption
                        class="p-3 font-heading text-3xl text-left rtl:text-right text-fontLight bg-bgDark-400 uppercase"
                    >
                        Kategorie
                    </caption>
                    <thead class="text-sm text-fontDark uppercase">
                        <tr>
                            <th
                                scope="col"
                                class="px-6 py-3 hidden sm:table-cell"
                            >
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">Nazwa</th>

                            <th
                                scope="col"
                                class="px-6 py-3 hidden lg:table-cell"
                            >
                                Data dodania
                            </th>

                            <th scope="col" class="px-6 py-3">Akcja</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(category, index) in categories"
                            :key="category.id"
                            class="bg-white dark:bg-gray-800"
                        >
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden sm:table-cell"
                            >
                                {{ index + 1 }}
                            </th>
                            <td
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {{ category.name }}
                            </td>

                            <td class="px-6 py-4 hidden lg:table-cell">
                                {{ formatDate(category.created_at) }}
                            </td>
                            <td class="px-6 py-4 flex gap-4">
                                <Link
                                    :href="
                                        route(
                                            'admin.category.edit',
                                            category.id
                                        )
                                    "
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Edytuj
                                </Link>
                                <button
                                
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >
                                    Usuń
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    </div>
</template>

<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";




defineProps({
    projects: Object,
    categories: Object,
});

import moment from "moment";



const formatDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
};



</script>
