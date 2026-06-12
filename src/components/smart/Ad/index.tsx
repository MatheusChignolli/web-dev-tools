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

const AdProvider = () => {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      addScript('https://upeex.com.br/adsupeex.js')
    }, 8000)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <Stack className="square-add" alignItems="center" justifyContent="center">
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
