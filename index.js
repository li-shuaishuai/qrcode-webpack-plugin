const os = require('os')
const qrcode = require('qrcode-terminal')

class serverQRcode {
  constructor(options) {
    this.options = options
    this.qrcode = qrcode
  }

  getIPAdress() {
    const interfaces = os.networkInterfaces()
    let ips = []
    for (let devName in interfaces) {
      let iface = interfaces[devName]
      for (let i = 0; i < iface.length; i++) {
        let alias = iface[i]
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          ips.push(alias.address)
        }
      }
    }
    return ips
  }

  printQRcode(url) {
    this.qrcode.setErrorLevel('M')
    this.qrcode.generate(url, {
      small: true
    }, (qrcode) => {
      console.log(qrcode)
      console.log(url)
    })
  }

  apply(compiler) {
    const devServer = compiler.options.devServer
    if (!devServer) {
      console.warn('webpack-server-qrcode: needs to start webpack-dev-server')
      return
    }
    const protocol = devServer.https ? 'https' : 'http';
    const port = devServer.port
    const _ip = this.getIPAdress()[0]
    const url = `${protocol}://${_ip}:${port}`
    this.printQRcode(url)
  }
}

module.exports = serverQRcode