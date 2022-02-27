module.exports = {
  publicPath: "./",
  pages: {
    index: {
      entry: "./src/main.js",
      title:"Tomomi Sato's Portfolio"
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/_common/style.scss";`
      }
    }
  }
};