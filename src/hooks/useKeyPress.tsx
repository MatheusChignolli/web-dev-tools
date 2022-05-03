import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

const useKeyPress = (keys: string[], callback: any) => {
  const callbackRef = useRef(callback)

  useLayoutEffect(() => {
    callbackRef.current = callback
  })

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      console.log('event', event)
      if (keys.some((key) => key === event.key)) {
        callbackRef.current(event)
      }
    },
    [keys]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)

    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])
}

export default useKeyPress
