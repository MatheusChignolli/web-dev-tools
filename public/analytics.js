window.dataLayer = window.dataLayer || []

function gtag() {
  window.dataLayer.push(arguments)
}

window.gtag = gtag

gtag('js', new Date())

var analyticsMeta = document.querySelector('meta[name="analytics-token"]')
var analyticsToken = analyticsMeta && analyticsMeta.content

if (analyticsToken) {
  gtag('config', analyticsToken)
}
