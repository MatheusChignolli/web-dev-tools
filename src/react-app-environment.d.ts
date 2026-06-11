/// <reference types="react-scripts" />

interface Window {
  gtag?: (
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: Record<string, unknown>
  ) => void
  dataLayer?: unknown[]
}
