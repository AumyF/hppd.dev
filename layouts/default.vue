<template>
  <div>
    <Nuxt />
    <!-- Ionicons scripts -->
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"
    />
    <script
      nomodule=""
      src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"
    />
  </div>
</template>

<style>
/* Import web fonts from Google Fonts */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("Inter Bold"),
    url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Inter Regular"),
    url(https://fonts.gstatic.com/s/inter/v2/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

html {
  font-family: Inter, "Noto Sans CJK JP", "Source Han Sans JP", sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scrollbar-color: hsl(0, 0%, 97.5%) hsl(0, 0%, 20%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
