import { useState } from 'react'
import { useQuery } from 'react-query'
import { dateUtils } from '~utils'
import { Grid } from '~components'
import { useTheme } from '~hooks'
import { githubServices } from '~services'
import { Release } from './sections'

const Changelog = () => {
  const theme = useTheme()
  const [accordionReference, setAccordionReference] = useState('version-accordion-0')

  const { data, isLoading } = useQuery(
    'getReleasesFromRepo',
    () => githubServices.getReleasesFromRepo(githubServices.repoConfig),
    {
      onError(error) {
        console.log(error, error)
      },
    }
  )

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (data?.length === 0) {
    return <h1>No content</h1>
  }

  return (
    <Grid container padding={`${theme.spacing(2)} 0px`} direction="column">
      {data?.map(({ body, created_at, tag_name }, index) => {
        const reference = `version-accordion-${index}`
        return (
          <Release
            key={`key-${reference}`}
            body={body}
            title={`[${tag_name}] - ${dateUtils.format(created_at)}`}
            expanded={accordionReference === reference}
            onChange={() => {
              setAccordionReference((prevState) =>
                prevState === reference ? '' : reference
              )
            }}
          />
        )
      })}
    </Grid>
  )
}

export default Changelog
