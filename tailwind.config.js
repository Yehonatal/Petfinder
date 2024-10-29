/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                border: 'rgba(68, 66, 66, 0.25)', // --border
                bg: '#272626', // --bg
                text: '#ffffff', // --text
                link: '#646cff', // Link color
                linkHover: '#535bf2', // Link hover color
                lightText: '#213547',
                lightBg: '#ffffff',
                lightBorder: 'rgba(43, 41, 41, 0.1)',
                lightBgSecondary: '#e4edf8ab',
                buttonBg: '#1a1a1a', // Button background
                lightButtonBg: '#f9f9f9', // Light mode button background
            },
            borderRadius: {
                custom: '10px', // Custom border radius
            },
            spacing: {
                15: '15px',
                320: '320px',
                1280: '1280px',
            },
            fontFamily: {
                sans: [
                    'Inter',
                    'system-ui',
                    'Avenir',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                ],
            },
            fontSize: {
                h1: '3.2em', // Custom h1 size
            },
            lineHeight: {
                tight: '1.1', // Custom line height
            },
            backdropBlur: {
                100: '100px', // Custom backdrop filter
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
