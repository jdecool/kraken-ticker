const {app, Menu, MenuItem, Tray, dialog} = require('electron')
const fetch = require('electron-fetch')
const Configuration = require('./configuration')

let tray = null
let timerId = null
let configuration = new Configuration()

app.on('ready', () => {
  if ('darwin' != process.platform) {
    dialog.showErrorBox('Kraken-Ticker', 'Kraken-Ticker only works on Mac OS.')
    app.quit()
  }

  app.dock.hide()

  tray = new Tray(__dirname + '/icon.png')
  tray.setTitle('Kraken Ticker')
  tray.setContextMenu(Menu.buildFromTemplate([
    ...configuration.getCurrencyAvailable().map(function(currencyItem) {
      return {
        label: currencyItem.currency,
        submenu: [...currencyItem.rates.map(function(rate) {
          return {
            label: rate.label,
            type: "radio",
            checked: configuration.getCurrency() == rate,
            click() { configuration.setCurrency(rate) }
          }
        })]
      }
    }),
    { type: "separator" },
    {
      label: "Refresh rate",
      submenu: [...configuration.getRefreshRateAvaible().map(function(rateItem) {
        return {
          label: rateItem.label,
          type: "radio",
          checked: configuration.getRefreshRate() == rateItem,
          click() {
            configuration.setRefreshRate(rateItem)
            setCurrencyRateRefresh()
          }
        }
      })]
    },
    { type: "separator" },
    { role: "quit" },
  ]))

  updateCurrencyRate()
  setCurrencyRateRefresh()
})

app.on('window-all-closed', () => {
  if (timerId) {
    clearInterval(timerId)
  }

  app.quit()
})

function setCurrencyRateRefresh() {
  if (timerId) {
    clearInterval(timerId)
  }

  timerId = setInterval(updateCurrencyRate, configuration.getRefreshRate().value)
}

function updateCurrencyRate() {
  let currencyPair = configuration.getCurrency().pair

  fetch('https://api.kraken.com/0/public/Ticker?pair=' + currencyPair)
    .then((response) => response.json())
    .then((responseJson) => {
      let result = responseJson['result'][Object.keys(responseJson['result'])[0]]
      let value = parseFloat(result['a'][0])
      let formattedValue = value.toLocaleString('fr-FR', {style: "currency", currency: "EUR"})

      tray.setTitle(formattedValue)
      console.log((new Date()).toTimeString() + ' | ' + currencyPair + ' | ' + formattedValue)
    })
    .catch((error) => { console.error(error); });
}
