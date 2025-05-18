/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            xxl: '1920px',
        },
        fontFamily: {
            defaultFont: ['"Quicksand"', 'sans-serif'],
            baumans: ['"Baumans"', 'system-ui'],
        },
    },
    plugins: [
        require("tailwindcss-animate")
    ]
}