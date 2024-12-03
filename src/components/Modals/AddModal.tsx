import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";
import CompanyForm from "../Form/CompanyForm";
import { addCompany } from "../../store/companies/companiesSlice";
import { closeAddModal } from "../../store/modal/modalSlice";
import { ModalTitle } from "./Modal.styled";

const AddModal = () => {
  const dispatch = useDispatch();

  const handleNewCompany = (name: string, address: string) => {
    const newCompany = {
      id: faker.string.uuid(),
      name,
      address,
      isSelected: false,
    };
    dispatch(addCompany(newCompany));
    dispatch(closeAddModal());
  };

  const handleClose = () => {
    dispatch(closeAddModal());
  };

  return (
    <>
      <ModalTitle>Add company</ModalTitle>
      <CompanyForm
        initialName=""
        initialAddress=""
        onSubmit={handleNewCompany}
        onCancel={handleClose}
        submitButtonLabel="Add"
      />
    </>
  );
};

export default AddModal;
