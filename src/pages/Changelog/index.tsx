import { useState } from 'react'
import { useQuery } from 'react-query'
import { dateUtils } from '~utils'
import { Loader, SEO } from '~components'
import { githubServices } from '~services'
import { Release } from './sections'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const referencePath = 'version-accordion-'

const Changelog = () => {
  const { t } = useTranslation()
  const [accordionReference, setAccordionReference] = useState(`${referencePath}0`)

  const { data, isLoading } = useQuery(
    'getReleasesFromRepo',
    () => githubServices.getReleasesFromRepo(githubServices.repoConfig),
    {
      refetchOnWindowFocus: false,
      onError(error) {
        console.error('getReleasesFromRepo: ', error)
      },
    },
  )

  if (isLoading) {
    return (
      <>
        <SEO page="changelog" />
        <Loader />
      </>
    )
  }

  if (data?.length === 0) {
    return (
      <>
        <SEO page="changelog" />
        <h1>Sem conteúdo</h1>
      </>
    )
  }

  return (
    <>
      <SEO page="changelog" />
      <Stack spacing={5} my={10}>
        <Typography
          color="text.primary"
          variant="h3"
          fontSize={26}
          fontWeight="bold"
        >
          {t('changelog.title')}
        </Typography>
        <Typography color="text.primary" variant="body1">
          {t('changelog.subtitle')}
        </Typography>
        {!!data?.length && (
          <Box>
            {data.map(({ body, created_at, tag_name }, index) => {
              const reference = `${referencePath}${index}`
              return (
                <Release
                  key={`key-${reference}`}
                  body={body}
                  title={`[${tag_name}] - ${dateUtils.format(created_at)}`}
                  expanded={accordionReference === reference}
                  onChange={() => {
                    setAccordionReference((prevState) =>
                      prevState === reference ? '' : reference,
                    )
                  }}
                />
              )
            })}
          </Box>
        )}
      </Stack>
    </>
  )
}

export default Changelog
