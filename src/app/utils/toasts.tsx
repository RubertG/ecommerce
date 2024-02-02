import toast, { type ToastPosition } from 'react-hot-toast'

interface Props {
  text: React.ReactNode
  duration?: number
  position?: ToastPosition
}

export const customToast = ({ text, duration = 1800, position = 'bottom-left' }: Props) => {
  toast.custom((t) => (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } bg-white px-5 py-3 rounded-md`}
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
