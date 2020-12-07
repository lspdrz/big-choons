import modalConfirms from 'constants/confirms/modalConfirms'

import SearchModal from 'components/modals/SearchModal'
import LogoutModal from 'components/modals/LogoutModal'
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
