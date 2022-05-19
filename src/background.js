// @ts-check
chrome.alarms.create('fetch_usdt_price', {
  periodInMinutes: 30,
})

chrome.alarms.onAlarm.addListener((alarmName) => {
  chrome.browserAction.setBadgeText({ text: alarmName.name })
})

const setBadge = async () => {
  chrome.browserAction.setBadgeText({ text: String(await priceResult()) })
}

const priceResult = async () => {
  const usdtPriceServer = 'https://usdt-price-serve.herokuapp.com/'
  const response = await fetch(usdtPriceServer)
  return await response.text()
}

setBadge()
