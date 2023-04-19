import { useEffect, useState } from 'react'

const Select = ({ selectProps, options }) => {
  const [selected, setSelected] = useState()

  useEffect(() => {
    return setSelected(selectProps?.value)
  }, [selectProps.value])

  const handleChange = (event) => {
    setSelected(event.target.value)
  }
  return (

        <select required value={selected} onChange={handleChange} {...selectProps} className='bg-primary border border-zinc-700 rounded-lg text-center outline-none text-white p-2 appearance-none focus:border-white duration-300'>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
  )
}

export default Select
