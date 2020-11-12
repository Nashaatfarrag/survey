module.exports = {
  devServer: {
    port: 8081,
    proxy: {
      "/api": {
        // https://kilowatapi.herokuapp.com/
        // http://localhost:3000/
        target: "http://localhost:3000/",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
        secure: false,
      },
    },
  },

  transpileDependencies: ["vuetify"],
};
