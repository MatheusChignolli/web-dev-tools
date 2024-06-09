import { cnpjUtils, cpfUtils, rgUtils } from '~utils'
import { DocumentsTypes } from '../types'

const documentsConfig = [
  {
    document: DocumentsTypes.CPF,
    keys: ['g', 'G'],
    generate: cpfUtils.generate,
  },
  {
    document: DocumentsTypes.CNPJ,
    keys: ['w', 'W'],
    generate: cnpjUtils.generate,
  },
  {
    document: DocumentsTypes.RG,
    keys: ['e', 'E'],
    generate: rgUtils.generate,
  },
]

export default {
  documentsConfig,
}
