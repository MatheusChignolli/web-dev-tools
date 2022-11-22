import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  AccordionProps as MuiAccordionProps,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  AccordionDetailsProps as MuiAccordionDetailsProps,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

const Accordion = (props: MuiAccordionProps) => {
  const { t } = useTranslation()

  return (
    <MuiAccordion
      aria-label={t<string>('components.accordion.section')}
      {...props}
    />
  )
}

const Summary = (props: MuiAccordionSummaryProps) => {
  const { t } = useTranslation()

  return (
    <MuiAccordionSummary
      aria-label={t<string>('components.accordion.summary')}
      {...props}
    />
  )
}

const Details = (props: MuiAccordionDetailsProps) => {
  const { t } = useTranslation()

  return (
    <MuiAccordionDetails
      aria-label={t<string>('components.accordion.details')}
      {...props}
    />
  )
}

Accordion.Summary = Summary
Accordion.Details = Details

export default Accordion
