import { DocumentsTypes } from '~constants/interfaces'

export interface GenerateDocumentProps {
  document: DocumentsTypes
  generate: (hasMask?: boolean) => string
  keys: string[]
}
