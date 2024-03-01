import toast, { type ToastPosition } from 'react-hot-toast'

interface Props {
  text: React.ReactNode
  duration?: number
  position?: ToastPosition
  className?: string
}

export const customToast = ({
  text,
  duration = 1800,
  position = 'bottom-left',
  className = ''
}: Props) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } bg-white px-4 py-2 rounded-md ${className}`}
    >
      <p
        className='text-black'
      >
        {text}
      </p>
    </div>
  ), {
    duration,
    position
  })
}
