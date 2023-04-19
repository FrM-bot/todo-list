const VariantsStyles = {
  error: 'bg-rose-500 border-red-600 text-white hover:bg-rose-600/80',
  warning: 'bg-yellow-600/10 border-yellow-600 text-yellow-600 hover:bg-yellow-600',
  success: 'bg-green-600/10 border-green-600 text-green-600 hover:bg-green-600',
  default: 'bg-white text-black hover:text-white hover:bg-primary border-white'
}

const Button = ({ props, children, variant }) => {
  return (
        <button
            className={`relative z-[5] ${VariantsStyles[variant ?? 'default']} py-2.5 px-5 text-sm font-medium rounded-lg border border-gray-200`}
            {...props}
        >
            {children}
        </button>
  )
}

export default Button
