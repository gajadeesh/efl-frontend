module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  // lintOnSave: false,
  // runtimeCompiler: true,
  // publicPath: "/",
  devServer: {
    disableHostCheck: true,
    proxy: "http://eflbackend-dev.keeneye.co:8000/"
  }
};
