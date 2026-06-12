import { useTranslation } from 'react-i18next'
import { Box, Stack, Typography } from '@mui/material'
import Link from '../Link'
import { LogoProps } from './interfaces'

const Logo = ({ large }: LogoProps) => {
  const { t } = useTranslation()
  const iconSize = large ? 36 : 28

  return (
    <Link.Internal to="/" aria-label={t<string>('footer.ariaLabels.home')}>
      <Stack flexDirection="row" alignItems="center" gap={1}>
        <Box
          component="img"
          src="/favicon.svg"
          alt=""
          aria-hidden
          width={iconSize}
          height={iconSize}
          sx={{ display: 'block', flexShrink: 0 }}
        />
        <Typography
          variant={large ? 'h6' : 'body1'}
          fontWeight={700}
          color="text.primary"
          letterSpacing="-0.02em"
        >
          {t<string>('header.title')}
        </Typography>
      </Stack>
    </Link.Internal>
  )
}

export default Logo
