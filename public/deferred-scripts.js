;(function () {
  var ADS_DELAY_MS = 10000

  var loadAnalytics = function () {
    var analyticsMeta = document.querySelector('meta[name="analytics-token"]')
    var analyticsToken = analyticsMeta && analyticsMeta.content

    if (!analyticsToken || analyticsToken.indexOf('REACT_APP_') !== -1) {
      return
    }

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

  var loadAdsense = function () {
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
  }

  var scheduleThirdPartyScripts = function () {
    window.setTimeout(function () {
      loadAnalytics()
      loadAdsense()
    }, ADS_DELAY_MS)
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(scheduleThirdPartyScripts, { timeout: ADS_DELAY_MS })
  } else {
    window.addEventListener('load', scheduleThirdPartyScripts)
  }
})()
