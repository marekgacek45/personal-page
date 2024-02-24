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
                        Projekty
                    </caption>
                    <thead class="text-sm text-fontDark uppercase">
                        <tr>
                            <th scope="col" class="px-6 py-3 hidden sm:table-cell">#</th>
                            <th scope="col" class="px-6 py-3">Nazwa</th>

                            <th scope="col" class="px-6 py-3 hidden md:table-cell">Kategoria</th>
                            <th scope="col" class="px-6 py-3 hidden lg:table-cell">YouTube</th>
                            <th scope="col" class="px-6 py-3 hidden lg:table-cell">
                                Data dodania
                            </th>

                            <th scope="col" class="px-6 py-3">Akcja</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(project, index) in projects"
                            :key="project.id"
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
                                {{ project.title }}
                            </td>
                            <td
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hidden md:table-cell"
                            >
                                <ul class="flex gap-2 ">
                                    <li
                                        v-for="(
                                            category, index
                                        ) in project.categories"
                                        :key="category.id"
                                    >
                                        {{ category.name
                                        }}<span
                                            v-if="
                                                index !==
                                                project.categories.length - 1
                                            "
                                            >,</span
                                        >
                                    </li>
                                </ul>
                            </td>

                            <td class="px-6 py-4 hidden lg:table-cell">
                                <a
                                    v-if="project.youtube_link"
                                    :href="project.youtube_link"
                                    target="_blank"
                                    >link</a
                                >
                                <span v-else>-</span>
                            </td>

                            <td class="px-6 py-4  hidden lg:table-cell">
                                {{ formatDate(project.created_at) }}
                            </td>
                            <td class="px-6 py-4 flex gap-4">
                             
                                <Link :href="route('admin.projects.edit', { id: project.id })" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
      Edytuj
    </Link>
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >Usuń</a
                                >
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
