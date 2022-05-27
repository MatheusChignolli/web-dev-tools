import { useTranslation } from 'react-i18next'
import { CircularProgress } from '~components'
import { WrapperStyled } from './styles'

const Loader = () => {
  const { t } = useTranslation()

  return (
    <WrapperStyled>
      <CircularProgress
        aria-label={t('components.circularProgress.content')}
        color="primary"
        size={60}
      />
    </WrapperStyled>
  )
}

export default Loader
