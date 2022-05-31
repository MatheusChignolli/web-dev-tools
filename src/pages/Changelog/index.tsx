import { Markdown } from '~components'
import { Grid } from '~components'
import { useTheme } from '~hooks'
import changelogMd from '../../changelog.md'

const Changelog = () => {
  const theme = useTheme()

  return (
    <Grid container padding={`${theme.spacing(2)} 0px`}>
      <Markdown path={changelogMd} />
    </Grid>
  )
}

export default Changelog
