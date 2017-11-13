const {app, Menu, MenuItem, Tray} = require('electron')
const fetch = require('electron-fetch')

let tray = null
let timer = null;
let currencySelected = "BCHEUR"
let refreshRate = 5000

app.on('ready', () => {
  app.dock.hide()

  tray = new Tray('icon.png')
  tray.setTitle('Kraken Ticker')
  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: "XBT",
      submenu: [
        {
          label: "BCH/XBT",
          type: "radio",
          click () { currencySelected = "BCHXBT" },
        },
        {
          label: "DASH/XBT",
          type: "radio",
          click () { currencySelected = "DASHXBT" },
        },
        {
          label: "EOS/XBT",
          type: "radio",
          click () { currencySelected = "EOSXBT" },
        },
        {
          label: "ETC/XBT",
          type: "radio",
          click () { currencySelected = "ETCXBT" },
        },
        {
          label: "ETH/XBT",
          type: "radio",
          click () { currencySelected = "ETHXBT" },
        },
        {
          label: "GNO/XBT",
          type: "radio",
          click () { currencySelected = "GNOXBT" },
        },
        {
          label: "ICN/XBT",
          type: "radio",
          click () { currencySelected = "ICNXBT" },
        },
        {
          label: "LTC/XBT",
          type: "radio",
          click () { currencySelected = "LTCXBT" },
        },
        {
          label: "MLN/XBT",
          type: "radio",
          click () { currencySelected = "MLNXBT" },
        },
        {
          label: "REP/XBT",
          type: "radio",
          click () { currencySelected = "REPXBT" },
        },
        {
          label: "XBT/CAD",
          type: "radio",
          click () { currencySelected = "XBTCAD" },
        },
        {
          label: "XBT/EUR",
          type: "radio",
          click () { currencySelected = "XBTEUR" },
        },
        {
          label: "XBT/GBP",
          type: "radio",
          click () { currencySelected = "XBTGBP" },
        },
        {
          label: "XBT/JPY",
          type: "radio",
          click () { currencySelected = "XBTJPY" },
        },
        {
          label: "XBT/USD",
          type: "radio",
          click () { currencySelected = "XBTUSD" },
        },
        {
          label: "XDG/XBT",
          type: "radio",
          click () { currencySelected = "XDGXBT" },
        },
        {
          label: "XLM/XBT",
          type: "radio",
          click () { currencySelected = "XLMXBT" },
        },
        {
          label: "XMR/XBT",
          type: "radio",
          click () { currencySelected = "XMRXBT" },
        },
        {
          label: "XRP/XBT",
          type: "radio",
          click () { currencySelected = "XRPXBT" },
        },
        {
          label: "ZEC/XBT",
          type: "radio",
          click () { currencySelected = "ZECXBT" },
        },
      ],
    },
    {
      label: "BCH",
      submenu: [
        {
          label: "BCH/EUR",
          type: "radio",
          checked: true,
          type: "radio",
          click () { currencySelected = "BCHEUR" }
        },
        {
          label: "BCH/USD",
          type: "radio",
          type: "radio",
          click () { currencySelected = "BCHUSD" }
        },
        {
          label: "BCH/XBT",
          type: "radio",
          type: "radio",
          click () { currencySelected = "BCHXBT" }
        },
      ],
    },
    {
      label: "DASH",
      submenu: [
        {
          label: "DASH/EUR",
          type: "radio",
          click () { currencySelected = "DASHEUR" },
        },
        {
          label: "DASH/USD",
          type: "radio",
          click () { currencySelected = "DASHUSD" },
        },
        {
          label: "DASH/XBT",
          type: "radio",
          click () { currencySelected = "DASHXBT" },
        },
      ],
    },
    {
      label: "EOS",
      submenu: [
        {
          label: "EOS/ETH",
          type: "radio",
          click () { currencySelected = "EOSETH" }
        },
        {
          label: "EOS/XBT",
          type: "radio",
          click () { currencySelected = "EOSXBT" }
        },
      ],
    },
    {
      label: "ETC",
      submenu: [
        {
          label: "ETC/ETH",
          type: "radio",
          click () { currencySelected = "ETCETH" },
        },
        {
          label: "ETC/EUR",
          type: "radio",
          click () { currencySelected = "ETCEUR" },
        },
        {
          label: "ETC/USD",
          type: "radio",
          click () { currencySelected = "ETCUSD" },
        },
        {
          label: "ETC/XBT",
          type: "radio",
          click () { currencySelected = "ETCXBT" },
        },
      ],
    },
    {
      label: "ETH",
      submenu: [
        {
          label: "EOS/ETH",
          type: "radio",
          click () { currencySelected = "EOSETH" },
        },
        {
          label: "ETC/ETH",
          type: "radio",
          click () { currencySelected = "ETCETH" },
        },
        {
          label: "ETH/CAD",
          type: "radio",
          click () { currencySelected = "ETHCAD" },
        },
        {
          label: "ETH/EUR",
          type: "radio",
          click () { currencySelected = "ETHEUR" },
        },
        {
          label: "ETH/GBP",
          type: "radio",
          click () { currencySelected = "ETHGBP" },
        },
        {
          label: "ETH/JPY",
          type: "radio",
          click () { currencySelected = "ETHJPY" },
        },
        {
          label: "ETH/USD",
          type: "radio",
          click () { currencySelected = "ETHUSD" },
        },
        {
          label: "ETH/XBT",
          type: "radio",
          click () { currencySelected = "ETHXBT" },
        },
        {
          label: "GNO/ETH",
          type: "radio",
          click () { currencySelected = "GNOETH" },
        },
        {
          label: "ICN/ETH",
          type: "radio",
          click () { currencySelected = "ICNETH" },
        },
        {
          label: "MLN/ETH",
          type: "radio",
          click () { currencySelected = "MLNETH" },
        },
        {
          label: "REP/ETH",
          type: "radio",
          click () { currencySelected = "REPETH" },
        },
      ],
    },
    {
      label: "GNO",
      submenu: [
        {
          label: "GNO/ETH",
          type: "radio",
          click () { currencySelected = "GNOETH" },
        },
        {
          label: "GNO/XBT",
          type: "radio",
          click () { currencySelected = "GNOXBT" },
        },
      ],
    },
    {
      label: "ICN",
      submenu: [
        {
          label: "ICN/ETH",
          type: "radio",
          click () { currencySelected = "ICNETH" },
        },
        {
          label: "ICN/XBT",
          type: "radio",
          click () { currencySelected = "ICNXBT" },
        },
      ],
    },
    {
      label: "LTC",
      submenu: [
        {
          label: "LTC/EUR",
          type: "radio",
          click () { currencySelected = "LTCEUR" },
        },
        {
          label: "LTC/USD",
          type: "radio",
          click () { currencySelected = "LTCUSD" },
        },
        {
          label: "LTC/XBT",
          type: "radio",
          click () { currencySelected = "LTCXBT" },
        },
      ],
    },
    {
      label: "MLN",
      submenu: [
        {
          label: "MLN/ETH",
          type: "radio",
          click () { currencySelected = "MLNETH" },
        },
        {
          label: "MLN/XBT",
          type: "radio",
          click () { currencySelected = "MLNXBT" },
        },
      ],
    },
    {
      label: "REP",
      submenu: [
        {
          label: "REP/ETH",
          type: "radio",
          click () { currencySelected = "REPETH" },
        },
        {
          label: "REP/EUR",
          type: "radio",
          click () { currencySelected = "REPEUR" },
        },
        {
          label: "REP/XBT",
          type: "radio",
          click () { currencySelected = "REPXBT" },
        },
      ],
    },
    {
      label: "USDT",
      submenu: [
        {
          label: "USDT/USD",
          type: "radio",
          click () { currencySelected = "USDTUSD" },
        },
      ],
    },
    {
      label: "XDG",
      submenu: [
        {
          label: "XDG/XBT",
          type: "radio",
          click () { currencySelected = "XDGXBT" },
        },
      ],
    },
    {
      label: "XLM",
      submenu: [
        {
          label: "XLM/XBT",
          type: "radio",
          click () { currencySelected = "XLMXBT" },
        },
      ],
    },
    {
      label: "XMR",
      submenu: [
        {
          label: "XMR/EUR",
          type: "radio",
          click () { currencySelected = "XMREUR" },
        },
        {
          label: "XMR/USD",
          type: "radio",
          click () { currencySelected = "XMRUSD" },
        },
        {
          label: "XMR/XBT",
          type: "radio",
          click () { currencySelected = "XMRXBT" },
        },
      ],
    },
    {
      label: "XRP",
      submenu: [
        {
          label: "XRP/EUR",
          type: "radio",
          click () { currencySelected = "XRPEUR" },
        },
        {
          label: "XRP/USD",
          type: "radio",
          click () { currencySelected = "XRPUSD" },
        },
        {
          label: "XRP/XBT",
          type: "radio",
          click () { currencySelected = "XRPXBT" },
        },
      ],
    },
    {
      label: "ZEC",
      submenu: [
        {
          label: "ZEC/EUR",
          type: "radio",
          click () { currencySelected = "ZECEUR" },
        },
        {
          label: "ZEC/USD",
          type: "radio",
          click () { currencySelected = "ZECUSD" },
        },
        {
          label: "ZEC/XBT",
          type: "radio",
          click () { currencySelected = "ZECXBT" },
        },
      ],
    },
    {
      type: "separator",
    },
    {
      label: "Refresh rate",
      submenu: [
        {
          label: "5 seconds",
          type: "radio",
          checked: true,
          click() { refreshRate = 5000 },
        },
        {
          label: "15 seconds",
          type: "radio",
          click() { refreshRate = 15000 },
        },
        {
          label: "30 seconds",
          type: "radio",
          click() { refreshRate = 30000 },
        },
        {
          label: "1 minute",
          type: "radio",
          click() { refreshRate = 60000 },
        },
        {
          label: "5 minutes",
          type: "radio",
          click() { refreshRate = 300000 },
        },
        {
          label: "15 minutes",
          type: "radio",
          click() { refreshRate = 900000 },
        },
      ],
    },
    {
      type: "separator",
    },
    {
      role: "quit",
    }
  ]))

  updateCurreny()
  timer = setInterval(updateCurreny, refreshRate)
})

app.on('window-all-closed', () => {
  if (timer) {
    clearInterval(timer)
  }

  app.quit()
})

function updateCurreny() {
  fetch('https://api.kraken.com/0/public/Ticker?pair=' + currencySelected)
    .then((response) => response.json())
    .then((responseJson) => {
      let item = responseJson['result'][Object.keys(responseJson['result'])[0]];
      let value = Math.round(item['a'][0] * 100) / 100
      let formattedValue = value.toLocaleString('fr-FR', {style: "currency", currency: "EUR"})
      tray.setTitle(formattedValue)

      let log = (new Date()).toTimeString() + ' | ' + currencySelected + ' | ' + formattedValue
      console.log(log)
    })
    .catch((error) => { console.error(error); });
}
