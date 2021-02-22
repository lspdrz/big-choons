import LogoutModal from 'components/Modals/LogoutModal'
import SearchModal from 'components/Modals/SearchModal'
import modalConfirms from 'constants/confirms/modalConfirms'
import { useAppSelector } from 'hooks'

const Modals = (): JSX.Element | null => {
  const modalId = useAppSelector((state) => state.modals.selected)
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
