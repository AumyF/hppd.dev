const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        link: "#B794F4",
        gray: {
          50: "#F9F9FD",
          100: "#F0F1F8",
          200: "#E7E6F1",
          300: "#D2D3E3",
          400: "#ABAAC3",
          500: "#7F7C9A",
          600: "#55516A",
          700: "#37344A",
          800: "#211E2D",
          900: "#1a1723",
        },
      },
      width: {
        "max-content": "max-content",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-justify-inter-character": {
          "text-justify": "inter-character",
        },
        ".text-justify-inter-word": {
          "text-justify": "inter-word",
        },
      });
    }),
  ],
};
