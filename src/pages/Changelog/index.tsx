import { useState } from 'react'
import { useQuery } from 'react-query'
import { dateUtils } from '~utils'
import { Grid, Loader } from '~components'
import { useTheme } from '~hooks'
import { githubServices } from '~services'
import { Release } from './sections'

const referencePath = 'version-accordion-'

const Changelog = () => {
  const theme = useTheme()
  const [accordionReference, setAccordionReference] = useState(`${referencePath}0`)

  const { data, isLoading } = useQuery(
    'getReleasesFromRepo',
    () => githubServices.getReleasesFromRepo(githubServices.repoConfig),
    {
      refetchOnWindowFocus: false,
      onError(error) {
        console.error('getReleasesFromRepo: ', error)
      },
    }
  )

  if (isLoading) {
    return <Loader />
  }

  if (data?.length === 0) {
    return <h1>Sem conteúdo</h1>
  }

  return (
    <Grid container padding={`${theme.spacing(2)} 0px`} direction="column">
      {data?.map(({ body, created_at, tag_name }, index) => {
        const reference = `${referencePath}${index}`
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
