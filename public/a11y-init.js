;(function () {
  var setIframeTitles = function () {
    document.querySelectorAll('iframe:not([title])').forEach(function (iframe) {
      iframe.setAttribute('title', 'Advertisement')
    })
  }

  setIframeTitles()

  new MutationObserver(setIframeTitles).observe(document.documentElement, {
    childList: true,
    subtree: true,
  })
})()
