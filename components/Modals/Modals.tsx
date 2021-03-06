import LogoutModal from 'components/Modals/LogoutModal'
import SearchModal from 'components/Modals/SearchModal'
import modalConfirms from 'constants/confirms/modalConfirms'
import useModal from 'hooks/useModal'

const Modals = (): JSX.Element | null => {
  const { modalId } = useModal()
  switch (modalId) {
    case modalConfirms.SEARCH_MODAL:
      return <SearchModal />
    case modalConfirms.LOGOUT_MODAL:
      return <LogoutModal />
    default:
      return null
  }
}

export default Modals
