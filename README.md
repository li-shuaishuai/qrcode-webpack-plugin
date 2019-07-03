# devserver-qrcode-webpack-plugin

![](https://img.shields.io/npm/v/qrcode-webpack-plugin.svg)
![](https://img.shields.io/github/license/li-shuaishuai/devserver-qrcode-webpack-plugin.svg)

webpack-dev-server运行时在控制台打印二维码

![webpack-server-qrcode](https://raw.githubusercontent.com/li-shuaishuai/devserver-qrcode-webpack-plugin/master/static/webpack-server-qrcode.png)

## 安装

```bash
$ npm install qrcode-webpack-plugin
```

## 使用

### webpack.config.js
```JavaScript
const QRcodeWebpackPlugin = require('qrcode-webpack-plugin')

module.exports = {
  devServer: {
    ...
    host: '0.0.0.0'
  },
  plugins: [
    new QRcodeWebpackPlugin()
  ]
}
```
确保电脑和手机处于同一个局域网内，手机扫码即可预览，手机端支持实时刷新。

## License

[MIT](https://github.com/li-shuaishuai/devserver-qrcode-webpack-plugin/blob/master/LICENSE)