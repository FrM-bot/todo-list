import { InputHTMLAttributes } from "react"

interface InputProps {
    props: InputHTMLAttributes<HTMLInputElement>
}

const Input = ({ props }: InputProps) => {
    return (
        <input className="bg-primary border border-zinc-700 text-sm rounded-lg block w-full p-2 duration-300" {...props}/>

    )
}

export default Input
