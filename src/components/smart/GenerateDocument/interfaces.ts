import { DocumentGenerate, DocumentsTypes } from '~constants/interfaces'

export interface GenerateDocumentProps {
  document: DocumentsTypes
  generate: DocumentGenerate
  keys: string[]
}
