;(function () {
  try {
    var stored = localStorage.getItem('recoil-persist')
    var theme = 'light'

    if (stored) {
      var parsed = JSON.parse(stored)

      if (parsed.appTheme) {
        theme = JSON.parse(parsed.appTheme)
      }
    }

    document.documentElement.dataset.theme = theme
  } catch (error) {
    document.documentElement.dataset.theme = 'light'
  }
})()
