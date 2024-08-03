import { useEffect } from 'react'
import { Stack } from '@mui/material'

const addScript = (src: string) => {
  if (!document.querySelector(`script[src="${src}"]`)) {
    var scriptElement = document.createElement('script')
    scriptElement.src = src
    scriptElement.async = true
    document.head.appendChild(scriptElement)
  }
}

const AdProvider = () => {
  useEffect(() => {
    addScript('https://upeex.com.br/adsupeex.js')
  }, [])

  return (
    <Stack className="square-add" alignItems="center" justifyContent="center">
      <ins
        className="adupeex"
        data-ad-client="up-ba-332044"
        data-ad-slot="37597"
        data-ad-display="square"
        style={{ display: 'block', backgroundColor: '#fff' }}
      ></ins>
    </Stack>
  )
}

export default AdProvider
