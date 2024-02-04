import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            screens:{
                xs: '400px'
            },
            fontFamily: {
                heading:['Mouse Memoirs', 'sans-serif'],
                headingArch:['Archivo Black', 'sans-serif'],
                text:['Open Sans', 'sans-serif'],
                textArch:['Archivo Narrow', 'sans-serif'],
            },
            colors: {
                ownPurple: {
                    400:'#7852BF',
                    600: '#83688e',
                },
                ownPink:{
                    200:'#f7adc5',
                    400:'#d46892',
                    600:'#e872bf',
                    
                },
                ownYellow:{
                    400:"#E9E159",
                    600:'#f7c90f',
                },
                ownTurquise:{
                    400:'#05bbd4',
                    600:'#62c5c6'
                },
                ownBlue:{
                    400:'#71c3e6',
                    800:'4a47b8',
                },
                ownOrange:{
                    600:'#fc9b7a'
                },

                fontDark:'#0f181f',
                fontLight:'#faf7f3',

                bgLight:{
                    200:'#faf7f3',
                    400:'#e9e7e4'
                }
            },
        },
    },

    plugins: [forms],
};
