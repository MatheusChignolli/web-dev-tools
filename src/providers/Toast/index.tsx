import { ToastContainer, ToastContainerProps } from 'react-toastify'
import { ToastProviderProps } from './interfaces'

const toastOptions: ToastContainerProps = {
  position: 'bottom-center',
  autoClose: 1300,
  hideProgressBar: true,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  limit: 10,
}

const ToastProvider = ({ children }: ToastProviderProps) => (
  <>
    <ToastContainer {...toastOptions} />
    {children}
  </>
)

export default ToastProvider
