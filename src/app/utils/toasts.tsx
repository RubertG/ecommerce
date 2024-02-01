import toast from 'react-hot-toast'

export const toastOptions = (text: string) => {
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
    duration: 1800
  })
}
