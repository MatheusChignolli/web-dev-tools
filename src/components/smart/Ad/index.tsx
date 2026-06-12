import { useEffect } from 'react'
import { Stack } from '@mui/material'

const addScript = (src: string) => {
  if (!document.querySelector(`script[src="${src}"]`)) {
    const scriptElement = document.createElement('script')
    scriptElement.src = src
    scriptElement.async = true
    document.head.appendChild(scriptElement)
  }
}

const setIframeTitles = () => {
  document.querySelectorAll('iframe:not([title])').forEach((iframe) => {
    iframe.setAttribute('title', 'Advertisement')
  })
}

const AdProvider = () => {
  useEffect(() => {
    const loadAds = () => addScript('https://upeex.com.br/adsupeex.js')

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadAds)
    } else {
      setTimeout(loadAds, 1)
    }

    setIframeTitles()

    const observer = new MutationObserver(setIframeTitles)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return (
    <Stack
      className="square-add"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 90 }}
    >
      <ins
        className="adupeex"
        data-ad-client="up-ba-332044"
        data-ad-slot="37633"
        data-ad-display="horizontal"
        style={{ display: 'block', minHeight: 90 }}
      ></ins>
    </Stack>
  )
}

export default AdProvider
