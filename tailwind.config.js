module.exports = {
    content: [
        './src/**/*.{html,ts}',
        './projects/**/*.{html,ts}',
        './node_modules/tw-elements/dist/js/**/*.js',
    ],
    theme: {
        fontFamily: {
            sub: 'Poppins, san-serif',
            hee: 'Heebo, sans-serif',
        },
        screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440px' },
        extend: {
            zIndex: {
                100: '100',
            },
            backgroundImage: {
                'login-background': "url('src/assets/background.jpg');",
            },
            colors: {
                tea: '#CFF09E',
                leafy: '#507C5C',
                cyanide: '#1cb2b1',
                soft: '#61ca54',
                drop: 'rgba(0,0,0,0.75)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tw-elements/dist/plugin'),
    ],
};
