module.exports = {
    entry: './src/main.js',
    output: {
      filename: './build/bundle.js'
    },
    devServer:{
      inline: true,
      port : 3000
    },
    module: {
      loaders: [
        {
          test:  /\.js$/ ,
          exclude: /node_modules/,
          loader: 'babel',
          query:{
              presets: ['es2015','react']

          }
      }
    ]
    }
}
