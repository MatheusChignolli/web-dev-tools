import { format as dateFnsFormat } from 'date-fns'

const format = (date?: string, format = 'dd/MM/yyyy') => {
  return dateFnsFormat(!!date ? new Date(date) : new Date(), format)
}

export default {
  format,
}
