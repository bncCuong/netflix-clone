/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                btnBg: '#ff2222',
                textColor: 'white',
            },
            screens: {
                sm: '640px',
                mb: '500px',
            },
            animation: {
                slidedown: 'slidedown 0.5s ease-in-out',
                slideleft: 'slideleft 1s ease-in-out forwards',
                slowfade: 'slowfade 1s ease-in-out',
            },
            keyframes: {
                slowfade: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                slidedown: {
                    from: { opacity: 0.5, transform: 'translateY(-10%)' },

                    to: { opacity: 1, transfrom: 'translateY(100%)' },
                },
                slideleft: {
                    from: { opacity: 0, transfrom: 'translateX(100%)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
};
