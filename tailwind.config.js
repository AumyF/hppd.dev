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
        fuchsia: {
          white: "hsl(342deg, 60%, 40%)",
          counterblack: "hsl(342deg, 80%, 75%)",
        },
        violet: {
          white: "hsl(249.4, 39%, 44%)",
        },
        gray: {
          counterwhite: "hsl(0, 0%, 20%)",
          counterblack: "hsl(0, 0%, 97.5%)",
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
