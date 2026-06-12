const getFormValues = (form: HTMLFormElement): Record<string, FormDataEntryValue> =>
  Object.fromEntries(new FormData(form).entries())

export default getFormValues
