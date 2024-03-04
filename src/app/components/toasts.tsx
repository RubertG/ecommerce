import toast, { type ToastPosition } from 'react-hot-toast'
import { AlertIcon, SuccessIcon } from './Icons'

interface Props {
  text: React.ReactNode
  duration?: number
  position?: ToastPosition
  className?: string
}

export const CustomToast = ({
  text,
  duration = 1800,
  position = 'bottom-left',
  className = ''
}: Props) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } ${className}`}
    >
      {text}
    </div>
  ), {
    duration,
    position
  })
}

export const SuccessToast = ({
  text,
  duration = 1800,
  position = 'bottom-left',
  className = ''
}: Props) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } flex gap-1 items-center justify-center px-2 py-1 rounded-md border-2 border-green-900 bg-green-800 text-gray-100 ${className}`}
    >
      <SuccessIcon className='fill-green-100 w-5 h-5'/>
      {text}
    </div>
  ), {
    duration,
    position
  })
}

export const AlertToast = ({
  text,
  duration = 1800,
  position = 'bottom-left',
  className = ''
}: Props) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } flex gap-1 items-center justify-center px-2 py-1 rounded-md border-2 border-red-950 bg-red-900 text-gray-100 ${className}`}
    >
      <AlertIcon className='fill-green-100 w-7 h-7'/>
      {text}
    </div>
  ), {
    duration,
    position
  })
}
