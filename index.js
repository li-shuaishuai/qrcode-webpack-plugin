const os = require('os')
var qrcode = require('qrcode-terminal')

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
    const port = compiler.options.devServer.port
    const ips = this.getIPAdress()
    ips.forEach(ip => {
      const url = `http://${ip}:${port}`
      this.printQRcode(url)
    })
  }
}

module.exports = serverQRcode