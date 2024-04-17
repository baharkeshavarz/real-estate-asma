interface TooltipProps {
  message: string
  children: React.ReactNode
}

const Tooltip = ({ message, children }: TooltipProps) => {
  return (
    <div className="group relative flex min-w-fit text-center">
      {children}
      <span className="absolute top-10 scale-0 rounded bg-secondary-800 p-2 text-xs text-white transition-all group-hover:scale-100">
        {message}
      </span>
    </div>
  )
}

export default Tooltip
