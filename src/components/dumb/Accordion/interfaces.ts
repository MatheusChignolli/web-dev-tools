import {
  AccordionDetailsProps as MuiAccordionDetailsProps,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  AccordionProps as MuiAccordionProps,
} from '@mui/material'

export interface AccordionTypes {
  Details: (props: MuiAccordionDetailsProps) => JSX.Element
  Summary: (props: MuiAccordionSummaryProps) => JSX.Element
}

export type AccordionProps = ((props: MuiAccordionProps) => JSX.Element) &
  AccordionTypes
