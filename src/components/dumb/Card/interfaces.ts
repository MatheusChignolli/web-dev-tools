import { ReactNode } from 'react'

export interface CardProps {
  title?: string
  keys?: string[]
  children: ReactNode
  fullHeight?: boolean
}

export interface CardStyledProps {
  fullHeight?: boolean
}
