// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/global.scss'
  ],
  modules: [ '@nuxt/image'],
  app:{
    head: {
      title: "Bernomix",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/assets/images/icon.svg" },
      ],
      script: [
        { src: "https://kit.fontawesome.com/e48ae4e274.js", crossorigin: "anonymous"},
      ],
    },
  },
  components: [{
    path: '~/components/',
    pathPrefix: false,
  }]
})
