import { ReactNode } from 'react'

export interface CardProps {
  title?: string
  children: ReactNode
  fullHeight?: boolean
}

export interface CardStyledProps {
  fullHeight?: boolean
}
