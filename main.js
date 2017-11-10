const {app, Menu, Tray} = require('electron')
const fetch = require('electron-fetch');

let tray = null
let timer;

app.on('ready', () => {
  app.dock.hide()

  tray = new Tray('icon.png')
  tray.setTitle('Test')

  updateCurreny()
  setInterval(updateCurreny, 5000)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (timer) {
      clearInterval(timer)
    }

    app.quit()
  }
})

function updateCurreny() {
  fetch('https://api.kraken.com/0/public/Ticker?pair=BCHEUR')
    .then((response) => response.json()) 
    .then((responseJson) => { 
      let value = Math.round(responseJson['result']['BCHEUR']['a'][0] * 100) / 100
      let formattedValue = value.toLocaleString('fr-FR', {style: "currency", currency: "EUR"})
      let log = (new Date()).toTimeString() + ' | ' + formattedValue
      
      tray.setTitle(formattedValue)
      console.log(log)
    })
    .catch((error) => { console.error(error); });
}
