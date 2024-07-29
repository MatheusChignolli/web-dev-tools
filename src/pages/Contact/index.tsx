import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FormData } from './interfaces'

const Contact = () => {
  const { t } = useTranslation()
  const { handleSubmit, register } = useForm<FormData>()

  const onSubmit = ({ email, message, subject }: FormData) => {
    const messageEnd = `Email: ${email}`

    const mailtoLink = `mailto:matheuschignolli@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `${message}

${messageEnd}`
    )}`

    window.location.href = mailtoLink
  }

  return (
    <Stack spacing={5} my={10}>
      <Typography
        color="primary.contrastText"
        variant="h3"
        fontSize={26}
        fontWeight="bold"
      >
        {t('contact.title')}
      </Typography>
      <Typography color="primary.contrastText" variant="body1">
        {t('contact.subtitle')}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} item>
            <TextField
              fullWidth
              required
              id="email"
              type="email"
              variant="outlined"
              label={t('contact.form.email.label')}
              placeholder={t<string>('contact.form.email.placeholder')}
              aria-label={t<string>('contact.form.email.ariaLabel')}
              {...register('email')}
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField
              fullWidth
              required
              id="subject"
              type="text"
              variant="outlined"
              label={t('contact.form.subject.label')}
              placeholder={t<string>('contact.form.subject.placeholder')}
              aria-label={t<string>('contact.form.subject.ariaLabel')}
              {...register('subject')}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              fullWidth
              required
              multiline
              rows={4}
              id="message"
              type="text"
              variant="outlined"
              label={t('contact.form.message.label')}
              placeholder={t<string>('contact.form.message.placeholder')}
              aria-label={t<string>('contact.form.message.ariaLabel')}
              {...register('message')}
            />
          </Grid>
          <Grid xs={12} item>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              aria-label={t<string>('contact.form.submit.ariaLabel')}
            >
              {t('contact.form.submit.content')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Stack>
  )
}

export default Contact
