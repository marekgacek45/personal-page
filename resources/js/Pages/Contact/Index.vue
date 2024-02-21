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
                                    <transition name="list" mode="out-in" appear>
                                    <form v-if="!sendForm"
                                        @submit.prevent="recaptcha"
                                      
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
                                            <Error v-if="form.errors.name">{{ form.errors.name}}</Error>
                                        </Field>
                                        <Field>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                v-model="form.email"
                                                required
                                            />
                                            <Error v-if="form.errors.email">{{ form.errors.email}}</Error>
                                            <Label for="email" id="email"
                                                >E-mail</Label
                                            >
                                        </Field>
                                        <Field>
                                            <Input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                v-model="form.phone"
                                                
                                            />
                                            <Label for="tel" id="tel"
                                                >Telefon</Label
                                            >
                                            <Error v-if="form.errors.phone">{{ form.errors.phone}}</Error>
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
                                            <Error v-if="form.errors.message">{{ form.errors.message}}</Error>
                                        </Field>
                                        <!-- <div class="text-red-600" v-if="errors.captcha_token">
                {{ errors.captcha_token }}
            </div> -->
            <Error v-if="errors.captcha_token">{{ errors.captcha_token}}</Error>
                                        <Field
                                            ><PrimaryButton type="submit" :disabled="form.processing"
                                                >Wyślij</PrimaryButton
                                            ></Field
                                        >
                                    </form>

                                    <div v-else class="min-h-[545px] flex flex-col justify-center items-center gap-6 text-center px-4">

                                        <h2 class="text-7xl font-heading">Dzięki za wiadomość</h2>
                                        <span class="text-3xl">Odpowiem na nią najszybciej jak to możliwe!</span>
                                    </div>
                                </transition>
                                </div>
                            </OldSchoolCard>
                        </div>
                        <!-- TEXT---->
                        <div
                            class="flex flex-col justify-center gap-6 lg:w-2/5 lg:mr-3 py-12"
                        >
                          
                            <Vue3Marquee
                pauseOnHover="true"
                duration="10"
                class=" overflow-hidden py-1"
            >
            <h1 class="text-7xl font-heading ml-3">
                 Potrzebujesz wyceny?? Masz jakieś pytanie?? Chcesz po prostu pogadać??
                        </h1>
            </Vue3Marquee>
                            
                            <h2
                                class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"
                            >
                                Śmiało, napisz do mnie za pomocą formularza lub wyślij maila.
                            </h2>
                            <h2
                                class="text-2xl md:text-3xl xl:text-4xl font-text leading-relaxed"
                            >
                                Jeżeli wolisz to znajdź mnie na mediach społecznościowych
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
import { useReCaptcha } from "vue-recaptcha-v3";
import { useForm } from "@inertiajs/vue3";
import { ref } from "vue";

import Layout from "@/Layouts/Layout.vue";
import Field from "@/Components/Form/Field.vue";
import Label from "@/Components/Form/Label.vue";
import Input from "@/Components/Form/Input.vue";
import TextArea from "@/Components/Form/TextArea.vue";
import Error from "@/Components/Form/Error.vue"
import OldSchoolCard from "@/Components/OldSchoolCard.vue";

import { Vue3Marquee } from "vue3-marquee";


const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();


let sendForm = ref(false)

let form = useForm({
    name: null,
    email: null,
    phone: null,
    message: null,
    captcha_token: null,
});

const recaptcha = async () => {
    // (optional) Wait until recaptcha has been loaded.
    await recaptchaLoaded();

    // Execute reCAPTCHA with action "login".
    form.captcha_token = await executeRecaptcha("login");
    submit();
    // Do stuff with the received token.
};

const submit = () => {
    form.post("/kontakt", {
        preserveScroll: true,
        onSuccess: () => {
            sendForm.value = !sendForm.value;
            console.log('udało się');
        },
    });
};

defineProps({
    form: Object,
    errors: Object,
    recaptcha_site_key: String,
});

defineEmits(['update:modelValue']);

</script>

<style scoped>

.list-enter-active,
.list-leave-active {
    transition: all 1s ease-in-out;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: rotate(0deg) scale(0);
}
.list-enter-to,
.list-leave-from {
    opacity: 1;
    transform: rotate(360deg) scale(1);
}

</style>