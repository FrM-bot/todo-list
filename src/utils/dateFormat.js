export const setDateFormat = ({ date, locales, option }) => {
  try {
    return new Intl.DateTimeFormat(locales ?? 'es-ES', option ?? { dateStyle: 'medium' }).format(new Date(date))
  } catch (error) {
    console.error(error)
  }
}
