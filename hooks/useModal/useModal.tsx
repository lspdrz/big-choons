import { useContext } from 'react'

import { AppContext } from 'components/App/AppContext'
import { AppState } from 'interfaces'

type useModalReturnType = {
  openModal: (modalId: string) => void
  closeModal: () => void
  modalId: string | undefined
}

const useModal = (): useModalReturnType => {
  const [state, setState] = useContext(AppContext)

  const openModal = (modalId: string): void => {
    setState((state: AppState) => ({ ...state, modalId: modalId }))
  }

  const closeModal = (): void => {
    setState((state: AppState) => ({ ...state, modalId: '' }))
  }

  return {
    openModal,
    closeModal,
    modalId: state.modalId,
  }
}

export default useModal
