window.dataLayer = window.dataLayer || []

function gtag() {
  window.dataLayer.push(arguments)
}

window.gtag = gtag

gtag('js', new Date())

var analyticsToken = document.querySelector('meta[name="analytics-token"]')?.content

if (analyticsToken) {
  gtag('config', analyticsToken)
}
