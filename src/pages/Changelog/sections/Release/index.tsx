import { Accordion, Markdown } from '~components'
import { ReleaseProps } from './interfaces'

const Release = ({ body, title, expanded, onChange }: ReleaseProps) => {
  return (
    <Accordion expanded={expanded} onChange={() => onChange()}>
      <Accordion.Summary>{title}</Accordion.Summary>
      <Accordion.Details>
        <Markdown body={body} />
      </Accordion.Details>
    </Accordion>
  )
}

export default Release
