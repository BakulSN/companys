import { useDispatch, useSelector } from "react-redux";
import CompanyForm from "../Form/CompanyForm";
import { updateCompany } from "../../store/companies/companiesSlice";
import { closeEditModal } from "../../store/modal/modalSlice";
import { editCompany } from "../../store/modal/ModalSelectors";
import { ModalTitle } from "./Modal.styled";

const EditModal = () => {
  const dispatch = useDispatch();
  const company = useSelector(editCompany);

  const handleUpdate = (name: string, address: string) => {
    if (!company) {
      return null;
    }
    const updatedCompany = {
      ...company,
      name,
      address,
    };
    dispatch(updateCompany(updatedCompany));
    dispatch(closeEditModal());
  };

  const handleClose = () => {
    dispatch(closeEditModal());
  };

  return (
    <>
      <ModalTitle>Edit Company</ModalTitle>
      <CompanyForm
        initialName={company!.name}
        initialAddress={company!.address}
        onSubmit={handleUpdate}
        onCancel={handleClose}
        submitButtonLabel="Save"
      />
    </>
  );
};

export default EditModal;
