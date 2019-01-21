# webpack-server-qrcode
![](https://img.shields.io/npm/v/@ice-point/webpack-server-qrcode.svg)
![](https://img.shields.io/github/license/li-shuaishuai/webpack-server-qrcode.svg)

webpack-dev-server运行时在控制台打印二维码

![webpack-server-qrcode](https://raw.githubusercontent.com/li-shuaishuai/webpack-server-qrcode/master/static/webpack-server-qrcode.png)

## 安装

```bash
$ npm install @ice-point/webpack-server-qrcode
```

## 使用

### webpack.config.js
```JavaScript
const WebpackServerQRcode = require('@ice-point/webpack-server-qrcode')

module.exports = {
  devServer: {
    ...
    host: '0.0.0.0'
  },
  plugins: [
    new WebpackServerQRcode()
  ]
}
```
确保电脑和手机处于同一个局域网内，手机扫码即可预览，手机端支持实时刷新。

## License

[MIT](https://github.com/li-shuaishuai/webpack-server-qrcode/blob/master/LICENSE)