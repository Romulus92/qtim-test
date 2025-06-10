// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "nuxt-svgo", 
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"]
      }
    ],
  ],
  css: ["~/assets/scss/style.scss"],

  svgo: {
    autoImportPath: "@/assets/img/icons",
    svgo: false,
    defaultImport: "component",
    componentPrefix: "icon"
  },
})