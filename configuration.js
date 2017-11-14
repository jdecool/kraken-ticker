const CURRENCIES = [
  {
    currency: "XBT",
    rates: [
      { pair: "BCHXBT", label: "BCH/XBT" },
      { pair: "DASHXBT", label: "DASH/XBT" },
      { pair: "EOSXBT", label: "EOS/XBT" },
      { pair: "ETCXBT", label: "ETC/XBT" },
      { pair: "ETHXBT", label: "ETH/XBT" },
      { pair: "GNOXBT", label: "GNO/XBT" },
      { pair: "ICNXBT", label: "ICN/XBT" },
      { pair: "LTCXBT", label: "LTC/XBT" },
      { pair: "MLNXBT", label: "MLN/XBT" },
      { pair: "REPXBT", label: "REP/XBT" },
      { pair: "XBTCAD", label: "XBT/CAD" },
      { pair: "XBTEUR", label: "XBT/EUR" },
      { pair: "XBTGBP", label: "XBT/GBP" },
      { pair: "XBTJPY", label: "XBT/JPY" },
      { pair: "XBTUSD", label: "XBT/USD" },
      { pair: "XDGXBT", label: "XDG/XBT" },
      { pair: "XLMXBT", label: "XLM/XBT" },
      { pair: "XMRXBT", label: "XMR/XBT" },
      { pair: "XRPXBT", label: "XRP/XBT" },
      { pair: "ZECXBT", label: "ZEC/XBT" },
    ],
  },
  {
    currency: "BCH",
    rates: [
      { pair: "BCHEUR", label: "BCH/EUR" },
      { pair: "BCHUSD", label: "BCH/USD" },
      { pair: "BCHXBT", label: "BCH/XBT" },
    ],
  },
  {
    currency: "DASH",
    rates: [
      { pair: "DASHEUR", label: "DASH/EUR" },
      { pair: "DASHUSD", label: "DASH/USD" },
      { pair: "DASHXBT", label: "DASH/XBT" },
    ],
  },
  {
    currency: "EOS",
    rates: [
      { pair: "EOSETH", label: "EOS/ETH" },
      { pair: "EOSXBT", label: "EOS/XBT" },
    ],
  },
  {
    currency: "ETC",
    rates: [
      { pair: "ETCETH", label: "ETC/ETH" },
      { pair: "ETCEUR", label: "ETC/EUR" },
      { pair: "ETCUSD", label: "ETC/USD" },
      { pair: "ETCXBT", label: "ETC/XBT" },
    ],
  },
  {
    currency: "ETH",
    rates: [
      { pair: "EOSETH", label: "EOS/ETH" },
      { pair: "ETCETH", label: "ETC/ETH" },
      { pair: "ETHCAD", label: "ETH/CAD" },
      { pair: "ETHEUR", label: "ETH/EUR" },
      { pair: "ETHGBP", label: "ETH/GBP" },
      { pair: "ETHJPY", label: "ETH/JPY" },
      { pair: "ETHUSD", label: "ETH/USD" },
      { pair: "ETHXBT", label: "ETH/XBT" },
      { pair: "GNOETH", label: "GNO/ETH" },
      { pair: "ICNETH", label: "ICN/ETH" },
      { pair: "MLNETH", label: "MLN/ETH" },
      { pair: "REPETH", label: "REP/ETH" },
    ],
  },
  {
    currency: "GNO",
    rates: [
      { pair: "GNOETH", label: "GNO/ETH" },
      { pair: "GNOXBT", label: "GNO/XBT" },
    ],
  },
  {
    currency: "ICN",
    rates: [
      { pair: "ICNETH", label: "ICN/ETH" },
      { pair: "ICNXBT", label: "ICN/XBT" },
    ],
  },
  {
    currency: "LTC",
    rates: [
      { pair: "LTCEUR", label: "LTC/EUR" },
      { pair: "LTCUSD", label: "LTC/USD" },
      { pair: "LTCXBT", label: "LTC/XBT" },
    ],
  },
  {
    currency: "MLN",
    rates: [
      { pair: "MLNETH", label: "MLN/ETH" },
      { pair: "MLNXBT", label: "MLN/XBT" },
    ],
  },
  {
    currency: "REP",
    rates: [
      { pair: "REPETH", label: "REP/ETH" },
      { pair: "REPEUR", label: "REP/EUR" },
      { pair: "REPXBT", label: "REP/XBT" },
    ],
  },
  {
    currency: "USDT",
    rates: [
      { pair: "USDTUSD", label: "USDT/USD" },
    ],
  },
  {
    currency: "XDG",
    rates: [
      { pair: "XDGXBT", label: "XDG/XBT" },
    ],
  },
  {
    currency: "XLM",
    rates: [
      { pair: "XLMXBT", label: "XLM/XBT" },
    ],
  },
  {
    currency: "XMR",
    rates: [
      { pair: "XMREUR", label: "XMR/EUR" },
      { pair: "XMRUSD", label: "XMR/USD" },
      { pair: "XMRXBT", label: "XMR/XBT" },
    ],
  },
  {
    currency: "XRP",
    rates: [
      { pair: "XRPEUR", label: "XRP/EUR" },
      { pair: "XRPUSD", label: "XRP/USD" },
      { pair: "XRPXBT", label: "XRP/XBT" },
    ],
  },
  {
    currency: "ZEC",
    rates: [
      { pair: "ZECEUR", label: "ZEC/EUR" },
      { pair: "ZECUSD", label: "ZEC/USD" },
      { pair: "ZECXBT", label: "ZEC/XBT" },
    ],
  }
];

const REFRESH_RATES = [
  {
    label: "5 seconds",
    value: 5000,
  },
  {
    label: "15 seconds",
    value: 5000,
  },
  {
    label: "30 seconds",
    value: 5000,
  },
  {
    label: "1 minute",
    value: 5000,
  },
  {
    label: "5 minutes",
    value: 5000,
  },
  {
    label: "15 minutes",
    value: 5000,
  },
]

class Configuration {
  constructor(currencyDefault = CURRENCIES[1].rates[0], refreshRateDefault = REFRESH_RATES[0]) {
    this.currencySelected = currencyDefault
    this.refreshSelected = refreshRateDefault
  }

  getRefreshRateAvaible() {
    return REFRESH_RATES
  }

  getRefreshRate() {
    return this.refreshSelected
  }

  setRefreshRate(rate) {
    this.refreshSelected = rate
  }

  getCurrencyAvailable() {
    return CURRENCIES
  }

  getCurrency() {
    return this.currencySelected
  }

  setCurrency(currency) {
    this.currencySelected = currency;
  }
}

module.exports = exports = Configuration
exports.CURRENCIES = CURRENCIES
exports.REFRESH_RATES = REFRESH_RATES
