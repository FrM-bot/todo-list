import { SelectHTMLAttributes, useEffect, useState } from "react"

interface SelestProps {
    selectProps: SelectHTMLAttributes<HTMLSelectElement>
    options: Record<string, string>[]
}

const Select = ({ selectProps, options }: SelestProps) => {
    const [selected, setSelected] = useState<string>()

    useEffect(() => {
      return setSelected(selectProps?.value as string)
    }, [selectProps.value])
    

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(event.target.value)
      setSelected(event.target.value)
    }
    console.log({selected}, selectProps.value )
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
