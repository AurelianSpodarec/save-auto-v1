const themeSwapper = require('tailwindcss-theme-swapper')
const defaultTheme = require('tailwindcss/defaultTheme')
const typography = require('@tailwindcss/typography');

// Base
// Muted
// Inverted

module.exports = {
    content: [
        "./index.html",
        './src/**/*.{html,js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            'xs': '420px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        fontFamily: {
            ...defaultTheme.fontFamily,
            primary: ['Poppins', ...defaultTheme.fontFamily.sans],
            secondary: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
            ...defaultTheme.fontSize,
            base: defaultTheme.fontSize['base'],
            caption: defaultTheme.fontSize['sm'],
            heading: defaultTheme.fontSize['3xl'],
            subheading: defaultTheme.fontSize['2xl'],
        },
        spacing: {
            ...defaultTheme.spacing,
            'DEFAULT': defaultTheme.spacing[8],
            'reduced': defaultTheme.spacing[6],
            'increased': defaultTheme.spacing[12]
        },
    },
    plugins: [
        typography,
        themeSwapper({
            themes: [
                {
                    name: 'base',
                    selectors: [':root'],
                    theme: {
                        colors: {
                            primary: {
                                'DEFAULT': '#815ac0',
                                '50': '#DAC3E8',
                                '100': '#D2B7E5',
                                '200': '#C19EE0',
                                '300': '#B185DB',
                                '400': '#A06CD5',
                                '500': '#9163CB',
                                '600': '#815AC0',
                                '700': '#7251B5',
                                '800': '#6247AA',
                                '900': '#532b88',
                                '950': '#2f184b',
                            },
                            secondary: {
                                'DEFAULT': 'blue'
                            },
                            sublime: {
                                'DEFAULT': '#f1f5f9',
                            }
                        },
                        borderRadius: {
                            ...defaultTheme.borderRadius,
                            'DEFAULT': defaultTheme.borderRadius.lg
                        },
                    }
                },
                {
                    name: 'dark',
                    mediaQuery: '@media (prefers-color-scheme: dark)',
                    selectors: [
                        '.dark',
                        '[dark]',
                        '[data-theme="dark"]'
                    ],
                    theme: {

                    }
                }
            ]
        })
    ],
}
