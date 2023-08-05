/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // outfit font family
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
            },
        },
    },
    plugins: [],
};
