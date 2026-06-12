import { ReactNode, useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'

type LazyAdsProps = {
  children: ReactNode
  minHeight?: number
}

const LazyAds = ({ children, minHeight = 90 }: LazyAdsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const reveal = () => setShouldRender(true)
    const timeoutId = window.setTimeout(reveal, 8000)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal()
        }
      },
      { rootMargin: '200px' },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      window.clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [])

  return (
    <Box ref={containerRef} sx={{ minHeight }}>
      {shouldRender ? children : null}
    </Box>
  )
}

export default LazyAds
