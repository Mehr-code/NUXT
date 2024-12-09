// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-12-02",
  components: true,
  app: {
    head: {
      titleTemplate: "papa BnB: %s",
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: ["my-class"],
      },
      meta: [
        {
          charset: "utf-8",
        },
      ],
    },
  },
});
