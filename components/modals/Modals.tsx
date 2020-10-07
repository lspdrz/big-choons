import modalConfirms from "../../constants/confirms/modalConfirms";

import SearchModal from "./SearchModal";
import useModal from "../../hooks/useModal";

const Modals = () => {
  const { modalId } = useModal();
  switch (modalId) {
    case modalConfirms.SEARCH_MODAL:
      return <SearchModal />;
    default:
      return null;
  }
};

export default Modals;
