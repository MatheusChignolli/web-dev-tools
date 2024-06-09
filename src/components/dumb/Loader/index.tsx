import { useTranslation } from 'react-i18next'
import { WrapperStyled } from './styles'
import { CircularProgress } from '@mui/material'

const Loader = () => {
  const { t } = useTranslation()

  return (
    <WrapperStyled>
      <CircularProgress
        aria-label={t<string>('components.circularProgress.content')}
        color="primary"
        size={60}
      />
    </WrapperStyled>
  )
}

export default Loader
