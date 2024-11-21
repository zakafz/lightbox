/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  mode: 'jit',
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles if not needed
  },
};

