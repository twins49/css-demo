module.exports = {
  css: {
    // loaderOptions => 向 CSS 相关的 loader 传递选项
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/_mixins.scss";
        `,
      },
    },
    extract: { ignoreOrder: true },
  },
}
