import { FormEvent } from 'react'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { Socials } from '~components'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    // @ts-ignore
    delete window.location
    // @ts-ignore
    window.location = { href: '' }

    window.location.href = ''

    event.preventDefault()
    const { email, subject, message } = Object.fromEntries(
      (new FormData(event.currentTarget) as any).entries()
    )

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
        {t('contact.title')} <Socials />
      </Typography>
      <Typography color="primary.contrastText" variant="body1">
        {t('contact.subtitle')}
      </Typography>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} item>
            <TextField
              fullWidth
              required
              id="email"
              name="email"
              type="email"
              variant="outlined"
              label={t('contact.form.email.label')}
              placeholder={t<string>('contact.form.email.placeholder')}
              aria-label={t<string>('contact.form.email.ariaLabel')}
            />
          </Grid>
          <Grid xs={12} md={6} item>
            <TextField
              fullWidth
              required
              id="subject"
              name="subject"
              type="text"
              variant="outlined"
              label={t('contact.form.subject.label')}
              placeholder={t<string>('contact.form.subject.placeholder')}
              aria-label={t<string>('contact.form.subject.ariaLabel')}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              fullWidth
              required
              multiline
              rows={4}
              id="message"
              name="message"
              type="text"
              variant="outlined"
              label={t('contact.form.message.label')}
              placeholder={t<string>('contact.form.message.placeholder')}
              aria-label={t<string>('contact.form.message.ariaLabel')}
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
