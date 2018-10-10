const path = require('path');
const projectRoot = path.resolve(__dirname, '..');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = {
      mode:'development',
      watch: true,
      entry: ['babel-polyfill', path.join(projectRoot, 'entry/entry-client.js')],
      output: {
            path: path.join(projectRoot, 'dist'),
            filename: 'bundle.client.js',
      },
      module: {
            rules: [{
                        test: /\.vue$/,
                        loader: 'vue-loader'
                  },
                  {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        include: projectRoot,
                        exclude: /node_modules/,
                        options: {
                              presets: ['es2015']
                        }
                  }
            ]
      },
      plugins: [
            // make sure to include the plugin for the magic
            new VueLoaderPlugin()
          ],
      resolve: {
            alias: {
                  'vue$': 'vue/dist/vue.runtime.esm.js'
            }
      }
};