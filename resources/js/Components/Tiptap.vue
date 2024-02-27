<template>
  <div>
     <section
                            v-if="editor"
                            class="buttons flex items-center flex-wrap gap-x-4 border-t border-l border-r border-gray-400 p-4"
                        >
                            <button
                                @click="
                                    editor.chain().focus().toggleBold().run()
                                "
                                :disabled="
                                    !editor
                                        .can()
                                        .chain()
                                        .focus()
                                        .toggleBold()
                                        .run()
                                "
                                :class="{
                                    'bg-gray-200 rounded-lg':
                                        editor.isActive('bold'),
                                }"
                                class="p-1"
                            >
                                bold
                            </button>
                            <button
                                @click="
                                    editor.chain().focus().toggleUnderline().run()
                                "
                                :disabled="
                                    !editor
                                        .can()
                                        .chain()
                                        .focus()
                                        .toggleUnderline()
                                        .run()
                                "
                                :class="{
                                    'bg-gray-200 rounded-lg':
                                        editor.isActive('underline'),
                                }"
                                class="p-1"
                            >
                                underline
                            </button>
                            <button @click="editor.chain().focus().addImage().run()">test</button>
                            <button @click="addImage">
      setImage
    </button>
                        </section>
                        <editor-content :editor="editor" />
                      </div>
  </template>
  
  <script setup>
 import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from '@tiptap/extension-underline'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import UploadImage from 'tiptap-extension-upload-image';
import 'tiptap-extension-upload-image/dist/upload-image.min.css';
//Optional
import axios from 'axios';

const props = defineProps({
  modelValue:String,
})

const emit = defineEmits(['update:modelValue'])



const addImage =() => {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    };

    const uploadFn = (file) => {
    var formData = new FormData();
    formData.append("image", file);
    return axios.post('/tools/guidelines/media', formData)
    .then((response) => {
        return response.data.url
    })
    .catch((e) => {
        //Optionaly you can send only throw
        throw(e.response.data.error);
    }); 
}

const editor = useEditor({
  content: props.modelValue,
  onUpdate:({editor})=>{
emit('update:modelValue',editor.getHTML())
  },
    editorProps: {
        attributes: {
            class: "border border-gray-400 p-4 min-h-[12rem] max-h-[36px] overflow-y-auto",
        },
        transformPastedText(text) {
            return text.toUpperCase();
        },
    },
    extensions: [StarterKit,Underline,Image,Dropcursor, UploadImage.configure({
    uploadFn: uploadFn
  }),],
});
  </script>