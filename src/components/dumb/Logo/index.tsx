import { useTranslation } from 'react-i18next'
import { Stack, Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import Link from '../Link'
import { LogoProps } from './interfaces'

const Logo = ({ large }: LogoProps) => {
  const { t } = useTranslation()

  return (
    <Link.Internal to="/">
      <Stack flexDirection="row" alignItems="center" gap={0.5}>
        <CodeIcon fontSize={large ? 'large' : 'medium'} />
        <Typography variant={large ? 'h5' : 'body1'}>
          {t<string>('header.title')}
        </Typography>
      </Stack>
    </Link.Internal>
  )
}

export default Logo
