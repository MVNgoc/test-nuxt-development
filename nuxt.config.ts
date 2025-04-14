import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // ssr: true,
  css: ["~/public/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  // app: {
  //   head: {
  //     title: "Yen Market",
  //     meta: [
  //       {
  //         name: "description",
  //         content:
  //           "Đây là 1 trang hiển thị danh mục các sản phẩm của Yen Market",
  //       },
  //       {
  //         name: "viewport",
  //         content: "width=device-width, initial-scale=1",
  //       },
  //       {
  //         charset: "utf-8",
  //       },
  //     ],
  //   },
  // },

  modules: ["@nuxt/image"],
});
