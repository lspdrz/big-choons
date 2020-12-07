import React, { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import useModal from 'hooks/useModal'
import CloseX from 'components/Icons/CloseX'

type Props = {
  children?: ReactNode
  title?: string
}

const BaseModal: React.FC<Props> = ({ children, title }: Props) => {
  const { closeModal } = useModal()
  const modalRoot = document.getElementById('modal')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEscKeyDown = (e: any): void => {
    if (e.key !== 'Escape') return
    closeModal()
  }

  useEffect(() => {
    window.addEventListener('keydown', onEscKeyDown, false)
    return () => window.removeEventListener('keydown', onEscKeyDown, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return modalRoot
    ? ReactDOM.createPortal(
        <div className="flex flex-col fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:flex h-full">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0"
                role="button"
                tabIndex={0}
                style={{
                  background:
                    'linear-gradient(0deg, rgba(85,60,154,1) 0%, rgba(128,90,213,0.85) 100%)',
                }}
                onClick={() => closeModal()}
                onKeyDown={() => closeModal()}
              ></div>
            </div>
            <div
              className="inline-block align-bottom bg-white overflow-hidden shadow-xl transform transition-all w-full sm:w-full md:max-w-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex flex-row justify-between w-full align-center border-b border-gray-400 px-8 py-4 ">
                <p className="text-lg text-purple-600">{title}</p>
                <button onClick={() => closeModal()}>
                  <CloseX />
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>,
        modalRoot
      )
    : null
}

export default BaseModal
