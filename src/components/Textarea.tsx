import { TextareaHTMLAttributes } from "react"

interface TextareaProps {
    props: TextareaHTMLAttributes<HTMLTextAreaElement>
}

const Textarea = ({ props }: TextareaProps) => {
    return (
        <textarea className="w-full resize-none py-2 outline-none text-sm bg-primary border-0 focus:ring-0" {...props} />

    )
}

export default Textarea
