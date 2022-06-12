import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from '@mui/material'
import { AccordionProps } from './interfaces'

const Accordion = MuiAccordion as AccordionProps
const Summary = MuiAccordionSummary
const Details = MuiAccordionDetails

Accordion.Summary = Summary
Accordion.Details = Details

export default Accordion
