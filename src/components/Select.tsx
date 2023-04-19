import { type SelectHTMLAttributes, useEffect, useState } from 'react'

interface SelestProps {
  selectProps: SelectHTMLAttributes<HTMLSelectElement>
  options: Array<Record<string, string>>
}

const Select = ({ selectProps, options }: SelestProps) => {
  const [selected, setSelected] = useState<string>()

  useEffect(() => {
    setSelected(selectProps?.value as string)
  }, [selectProps.value])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
