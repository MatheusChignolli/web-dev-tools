window.addEventListener('load', function () {
  var analyticsToken = document.querySelector('meta[name="analytics-token"]')?.content

  if (analyticsToken) {
    var analyticsScript = document.createElement('script')
    analyticsScript.async = true
    analyticsScript.src =
      'https://www.googletagmanager.com/gtag/js?id=' + analyticsToken
    analyticsScript.onload = function () {
      var configScript = document.createElement('script')
      configScript.src = '/analytics.js'
      document.head.appendChild(configScript)
    }
    document.head.appendChild(analyticsScript)
  }

  var adsScript = document.createElement('script')
  adsScript.async = true
  adsScript.src =
    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8145397482543766'
  adsScript.crossOrigin = 'anonymous'
  adsScript.onload = function () {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {}
  }
  document.head.appendChild(adsScript)
})
