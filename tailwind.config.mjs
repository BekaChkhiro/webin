/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite -2s',
        'float-delay-2': 'float 6s ease-in-out infinite -4s',
        'container-float': 'containerFloat 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(50px, -50px) rotate(120deg)' },
          '66%': { transform: 'translate(-30px, 30px) rotate(240deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
        containerFloat: {
          '0%, 100%': { transform: 'translateY(0) rotateX(2deg)' },
          '50%': { transform: 'translateY(-20px) rotateX(-2deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
