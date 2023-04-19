import { useState } from 'react'
import { createPortal } from 'react-dom'

const IdToClose = 'close'

export const useModal = () => {
  const [isShow, setIsShow] = useState(false)
  const handlerShowModal = (value) => {
    setIsShow(value)
  }
  const handlerCloseModal = (e) => {
    e?.target?.id === IdToClose && setIsShow(false)
  }
  const Modal = ({ children }) => {
    return isShow
      ? createPortal(
                <div id={IdToClose} className='fixed px-2 top-0 left-0 w-full h-screen z-20 bg-black/40 dark:bg-custom-dark/40 backdrop-blur-[3px] grid place-content-center overflow-hidden' onClick={handlerCloseModal}>
                    {children}
                </div>,
                document.body
      )
      : null
  }
  return {
    Modal,
    handlerShowModal,
    isShow
  }
}