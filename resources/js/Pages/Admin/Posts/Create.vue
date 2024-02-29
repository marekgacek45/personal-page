<template>
    <div>
        <Head title="Dodaj Post"> </Head>
        <AdminLayout>
            <OldSchoolCard title="Dodaj Post" class="w-full mx-auto">
                <div class="bg-bgLight-200 py-6">
                    <form
                        @submit.prevent="submit"
                        enctype="multipart/form-data"
                    >
                        <div class="flex gap-12 mx-12">
                            <Field>
                                <Input
                                    type="text"
                                    id="title"
                                    name="title"
                                    v-model="form.title"
                                    required
                                />
                                <Label for="title" id="title">Tytuł</Label>

                                <Error v-if="form.errors.title">{{
                                    form.errors.title
                                }}</Error>
                            </Field>

                            <Field>
                               
                            </Field>
                        </div>
                        <QuillEditor theme="snow" toolbar="full" v-model:content="form.body" contentType="html" />

                        

                        <Field
                            ><PrimaryButton type="submit"
                                >Dodaj</PrimaryButton
                            ></Field
                        >
                    </form>
                </div>
            </OldSchoolCard>
        </AdminLayout>
    </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import Field from "@/Components/Form/Field.vue";
import Label from "@/Components/Form/Label.vue";
import Input from "@/Components/Form/Input.vue";
import Error from "@/Components/Form/Error.vue";
import OldSchoolCard from "@/Components/OldSchoolCard.vue";

import AdminLayout from "@/Layouts/AdminLayout.vue";

import PrimaryButton from "@/Components/Base/PrimaryButton.vue";



defineProps({
    form: Object,
    errors: Object,
});



import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';



const form = useForm({
    title: "",
    body: "",
});

const submit = () => {
    form.post(route("admin.post.store"), {
        preserveScroll: true,
        onSuccess: () => {
            console.log("udało się");
        },
    });
};
</script>
