module.exports = {
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Desarrollador web - Desarrollador de software";
              return args;
          })
  }
}