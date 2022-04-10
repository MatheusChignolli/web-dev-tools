import { FC } from 'react'
import { ToastContainer, ToastContainerProps } from 'react-toastify'

const toastOptions: ToastContainerProps = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: true,
  pauseOnHover: true,
  limit: 3,
}

const ToastProvider: FC = ({ children }) => (
  <>
    <ToastContainer {...toastOptions} />
    {children}
  </>
)

export default ToastProvider
