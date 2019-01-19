# webpack-server-qrcode

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

## License

[MIT](https://github.com/li-shuaishuai/webpack-server-qrcode/blob/master/LICENSE)