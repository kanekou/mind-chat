module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://db.denchu.cloud:5111"
        // target: "http://db.denchu.cloud:5111/uiuxchat3287bivsgfbivf/test2/"
      }
    }
  }
};
