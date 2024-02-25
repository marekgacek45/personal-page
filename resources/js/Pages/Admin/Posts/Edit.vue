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
                            <ckeditor
                            :editor="editor"
                            v-model="form.body"
                            :config="editorConfig"
                        ></ckeditor>
                    </Field>
                        </div>

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
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";
import Field from "@/Components/Form/Field.vue";
import Label from "@/Components/Form/Label.vue";
import Input from "@/Components/Form/Input.vue";
import Error from "@/Components/Form/Error.vue";
import OldSchoolCard from "@/Components/OldSchoolCard.vue";

import AdminLayout from "@/Layouts/AdminLayout.vue";

import PrimaryButton from "@/Components/Base/PrimaryButton.vue";

const props = defineProps({
    form: Object,
    errors: Object,
    post:Object
});

import BalloonEditor from "@ckeditor/ckeditor5-build-balloon-block";

const editor = ref(BalloonEditor);

const editorData = ref("<p>Your Post Content</p>");
const editorConfig = ref({});

const form = useForm({
    title: props.post.title,
    body: props.post.body,
    post_title: "",
    post_image: "",
});

const submit = () => {
    
    form.put(route("admin.post.update",props.post.id), {
        preserveScroll: true,
        onSuccess: () => {
            console.log("udało się");
        },
    });
};
</script>
