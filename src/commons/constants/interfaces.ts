import { HttpConstants } from '.'

export type CodesEnum = keyof typeof HttpConstants.codes

export enum DocumentsTypes {
  CPF = 'cpf',
  CNPJ = 'cnpj',
  RG = 'rg',
}
