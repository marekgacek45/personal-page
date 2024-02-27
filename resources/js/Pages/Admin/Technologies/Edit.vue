<template>
    <div>
        <Head title="Dodaj Projekt"> </Head>
        <AdminLayout>
            <OldSchoolCard title="Dodaj Kategorię" class="w-1/2 mx-auto">
                <div class="bg-bgLight-200 py-6">
                    <form
                        @submit.prevent="submit"
                        enctype="multipart/form-data"
                    >
                        <Field>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                v-model="form.name"
                                required
                            />
                            <Label for="name" id="name">Nazwa</Label>

                            <Error v-if="form.errors.name">{{
                                form.errors.name
                            }}</Error>
                        </Field>
                        <Field>
                            <input type="file" @change="fileChange" />
                            <Error v-if="form.errors.logo">{{
                                form.errors.logo
                            }}</Error>
                        </Field>

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
import TextArea from "@/Components/Form/TextArea.vue";
import OldSchoolCard from "@/Components/OldSchoolCard.vue";

import AdminLayout from "@/Layouts/AdminLayout.vue";

import PrimaryButton from "@/Components/Base/PrimaryButton.vue";

const props = defineProps({
    form: Object,
    errors: Object,
    technology: Object,
});

const form = useForm({
    name: props.technology.name,
    logo: props.technology.logo,
    
});

const fileChange = (e) => {
    form.logo = e.target.files[0];
};

const submit = () => {
    form.put(route("admin.technology.update", props.technology.id), {
        preserveScroll: true,
        onSuccess: () => {},
    });
};
</script>
