<template>
    <div>
        <Head title="Dodaj Projekt"> </Head>
        <AdminLayout>
            <OldSchoolCard title="Dodaj Projekt" class="w-full">
                <div class="bg-bgLight-200 py-6">
                    <form
                        @submit.prevent="submit"
                        enctype="multipart/form-data"
                    >
                        <div class="flex gap-12 mx-12">
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
                        </div>

                        <Field
                            ><PrimaryButton type="submit"
                                >Edytuj</PrimaryButton
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
    category:Object
});

const form = useForm({
    id:props.category.id,
    name: props.category.name,
});

const submit = () => {
    
    form.put(route("admin.category.update",props.category.id), {
        preserveScroll: true,
        onSuccess: () => {
            console.log("udało się");
        },
    });
};
</script>
