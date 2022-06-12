import { format as dateFnsFormat } from 'date-fns'

const format = (date?: string, format = 'dd/MM/yyyy') => {
  if (!date && typeof format === 'string') {
    return dateFnsFormat(new Date(), format)
  }

  if (typeof date !== 'string' || typeof format !== 'string') {
    return undefined
  }

  return dateFnsFormat(new Date(date), format)
}

export default {
  format,
}
