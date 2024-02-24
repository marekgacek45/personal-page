<template>
    <div>
        <Head title="Dodaj Projekt"> </Head>
        <AdminLayout>
            <OldSchoolCard title="Dodaj Projekt" class="w-full">
                <div class="bg-bgLight-200 py-6">
                    <form @submit.prevent="submit" enctype="multipart/form-data">
                        <div class="flex gap-12 mx-12">

<Field>
    <Input type="text" id="title" name="title"    v-model="form.title" required />
    <Label for="title" id="title">Nazwa</Label>
    
    <!-- <Error v-if="form.errors.name">{{
        form.errors.name
    }}</Error> -->
    </Field
    >
<Field>
    <Input type="text" id="site_link" name="site_link " v-model="form.site_link" required />
    <Label for="site_link" id="site_link">Link do strony</Label>
    <!-- <Error v-if="form.errors.name">{{
        form.errors.name
    }}</Error> -->
    </Field
    >
<Field>
    <Input type="text" id="youtube_link" name="youtube_link" v-model="form.youtube_link" />
    <Label for="youtube_link" id="youtube_link">Link do youtube</Label>
    <!-- <Error v-if="form.errors.name">{{
        form.errors.name
    }}</Error> -->
    </Field
    >
</div>

<Field>
                                <Label for="name" id="name">Kategoria</Label>
<ul class="flex gap-6"><li class="mt-6" v-for="category in categories" :key="category.id">  <input type="checkbox" v-model="form.category_id" :value="category.id"/> <label for="">{{ category.name }}</label></li></ul>
                            </Field>
<Field>
                                <Label for="technology" id="technology">Technology</Label>
<ul class="flex gap-6"><li class="mt-6" v-for="technology in technologies" :key="technology.id">  <input type="checkbox" v-model="form.technology_id" :value="technology.id"/> <label for="">{{ technology.name }}</label></li></ul>
                            </Field>

                               

<input type="file" @change="fileChange" />
                        <ckeditor
                            :editor="editor"
                            v-model="form.post_text"
                            :config="editorConfig"
                        ></ckeditor>

                        <Field
                                            ><PrimaryButton type="submit" 
                                                >Dodaj</PrimaryButton
                                            ></Field>
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

defineProps({
    technologies: Object,
    categories: Object,
    form: Object,
    errors: Object,
    project:Object
});
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon-block";

const editor = ref(BalloonEditor);

const editorData = ref("<p>Your Post Content</p>");
const editorConfig = ref({});

const fileChange = (e) => {
    form.image = e.target.files[0];
};

const form = useForm({
    post_text: "",
    post_title: "",
    post_image: "",
    title: "",
    site_link:"",
    youtube_link:"",
    image:null,
    category_id:[],
    technology_id:[]
});

const submit = () => {
    
    console.log('submit method called')
    console.log(form);
    form.put("/admin/projekty/edytuj/" + project.id, {
        
        preserveScroll: true,
        onSuccess: () => {
            console.log('udało się');
        },
    });
};
</script>
