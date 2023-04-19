
const Form = ({ children, onSubmit: handlerSubmit, className }) => {
  const onSobmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form) {
      const data = Object.fromEntries(new FormData(form))
      event.currentTarget.reset()
      return data
    }
    return alert('Error al obtener el formulario.')
  }

  return (
        <form onSubmit={(event) => handlerSubmit(onSobmit(event))} className={className}>
            {children}
        </form>
  )
}

export default Form
