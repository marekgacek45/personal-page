<template>
    <transition name="modal-fade">
        <div v-if="isModalOpen" class="modal-backdrop" @click="closeModal">
            <div
                class="modal"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header class="modal-header" id="modalTitle">
                    <slot name="header"> This is the default tile! </slot>
                    <button
                        type="button"
                        class="btn-close"
                        @click="closeModal"
                        aria-label="Close modal"
                    >
                        x
                    </button>
                </header>

                <section class="modal-body" id="modalDescription">
                    <slot name="body">
                        {{ activeProject.title }}
                    </slot>
                </section>

                <footer class="modal-footer">
                    <slot name="footer"> This is the default footer! </slot>
                    <button
                        type="button"
                        class="btn-green"
                        @click="closeModal"
                        aria-label="Close modal"
                    >
                        Close me!
                    </button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script setup>

import { defineEmits } from 'vue';

const props =  defineProps({
    activeProject: Object,
    isModalOpen: Boolean,
    closeModal: Function,
});


const emit = defineEmits(['update:isModalOpen']);

const closeModal = () => {
    emit('update:isModalOpen', false);
};

</script>

<style scoped>
.modal-backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4aae9b;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
    transform: scale(0.7) rotate(-180deg);
}

.modal-fade-enter-to,
.modal-fade-leave-from {
    opacity: 1;
    transform: scale(1) rotate(0);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 1s ease,
        transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
</style>
