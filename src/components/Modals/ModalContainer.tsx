import { useDispatch, useSelector } from "react-redux";

import {
  isAddModalOpen,
  isEditModalOpen,
  isDeleteModalOpen,
} from "../../store/modal/ModalSelectors";
import {
  closeAddModal,
  closeEditModal,
  closeDeleteModal,
} from "../../store/modal/modalSlice";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import { Overlay, ModalStyledWrapper } from "./Modal.styled";

const ModalContainer = () => {
  const dispatch = useDispatch();
  const isAddModal = useSelector(isAddModalOpen);
  const isEditModal = useSelector(isEditModalOpen);
  const isDeleteModal = useSelector(isDeleteModalOpen);

  if (!isAddModal && !isEditModal && !isDeleteModal) {
    return null;
  }

  const handleClose = () => {
    if (isAddModal) dispatch(closeAddModal());
    if (isEditModal) dispatch(closeEditModal());
    if (isDeleteModal) dispatch(closeDeleteModal());
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalStyledWrapper onClick={(e) => e.stopPropagation()}>
        {isAddModal && <AddModal />}

        {isEditModal && <EditModal />}

        {isDeleteModal && <DeleteModal />}
      </ModalStyledWrapper>
    </Overlay>
  );
};

export default ModalContainer;
