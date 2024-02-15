<template>
    <div>
        <Head title="Kontakt">
            <meta name="description" content="opis" />
        </Head>

        <Layout>
            <main>
                <section
                    class="section lg:h-[calc(100vh-71px)] mt-[71px] bg-ownPink-200"
                >
                    <!-- CONTAINER---->
                    <div class="wrapper">
                        <!-- FORM---->
                        <div
                            class="flex justify-center items-center h-96 lg:h-auto mt-6 mb-12 lg:w-3/5 lg:py-16 lg:px-4 xl:p-10 2xl:p-20"
                        >
                            <OldSchoolCard title="Kontakt" class="w-full">
                                <div class="bg-bgLight-200 py-6">
                                    <form @submit.prevent="submit"
                                        method="post"
                                    >
                                        <Field>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                v-model="form.name"
                                                required
                                            />
                                            <Label for="name" id="name"
                                                >Imię i Nazwisko</Label
                                            >
                                        </Field>
                                        <Field>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                v-model="form.email"

                                                required
                                            />
                                            <Label for="email" id="email"
                                                >E-mail</Label
                                            >
                                        </Field>
                                        <Field>
                                            <Input
                                                type="tel"
                                                id="tel"
                                                name="tel"
                                                v-model="form.phone"

                                            />
                                            <Label for="tel" id="tel"
                                                >Telefon</Label
                                            >
                                        </Field>
                                        <Field>
                                            <TextArea
                                                id="message"
                                                name="message"
                                                v-model="form.message"

                                                required
                                            ></TextArea>
                                            <Label
                                                for="message"
                                                id="message"
                                                class="peer-placeholder-shown:top-7"
                                                >Wiadomość</Label
                                            >
                                        </Field>

                                        <Field
                                            ><PrimaryButton type="submit"
                                                >Wyślij</PrimaryButton
                                            ></Field
                                        >
                                    </form>
                                </div>
                            </OldSchoolCard>
                        </div>
                        <!-- TEXT---->
                        <div
                            class="flex flex-col justify-center gap-6 lg:w-2/5 lg:mr-3 py-12"
                        >
                            <h1 class="text-7xl font-heading">Kontakt</h1>
                            <h2
                                class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"
                            >
                                Jestem
                                <span class="font-heading">WebDeveloperem</span
                                >, który z pasją tworzy strony internetowe.
                            </h2>
                            <h2
                                class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"
                            >
                                Walczę na całej powierzchni programistycznego
                                pola, wykorzystując
                                <span class="font-heading">PHP</span> i
                                <span class="font-heading">JavaScript</span>
                                jako swoje oręża.
                            </h2>
                        </div>
                    </div>
                    <!--END CONTAINER---->
                </section>
            </main>
        </Layout>
    </div>
</template>

<script setup>
import Layout from "@/Layouts/Layout.vue";

import { useForm } from "@inertiajs/vue3";
import { useReCaptcha } from "vue-recaptcha-v3";


let form = useForm({
    name: null,
    email: null,
    phone: null,
    message: null,
    // captcha_token :null,

});

let submit = () =>{
    form.post('/kontakt',form),{
        preserveScroll: true,
        onSuccess: () => console.log('success'),
      }
}

import Field from "@/Components/Form/Field.vue";
import Label from "@/Components/Form/Label.vue";
import Input from "@/Components/Form/Input.vue";
import TextArea from "@/Components/Form/TextArea.vue";

import OldSchoolCard from "@/Components/OldSchoolCard.vue";
</script>
