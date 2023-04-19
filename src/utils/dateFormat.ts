export const setDateFormat = ({ date, locales, option }: { date: string | number | Date, locales?: string | string[] | undefined, option?: Intl.DateTimeFormatOptions | undefined }) => {
    try {
        return new Intl.DateTimeFormat(locales ?? 'es-ES', option ?? { dateStyle: 'medium' }).format(new Date(date))
    } catch (error) {
        console.error(error)
    }
}