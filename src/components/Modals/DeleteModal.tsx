import { useDispatch, useSelector } from "react-redux";
import {
  removeCompany,
  removeSelectedCompanies,
} from "../../store/companies/companiesSlice";
import { closeDeleteModal } from "../../store/modal/modalSlice";
import { deleteCompany } from "../../store/modal/ModalSelectors";
import {
  ButtonGroup,
  CompanyList,
  CompanyListItem,
  ModalTitle,
} from "./Modal.styled";
import { DeleteButton } from "../Table/Table.styled";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const company = useSelector(deleteCompany);

  const isMultiple = Array.isArray(company) && company.length > 1;
  const companyCount = isMultiple ? company.length : 1;

  const handleDeleteCompany = () => {
    if (Array.isArray(company)) {
      dispatch(removeSelectedCompanies());
    } else {
      dispatch(removeCompany(company!.id));
    }
    dispatch(closeDeleteModal());
  };

  return (
    <>
      <ModalTitle>
        Are you sure you want to delete the selected company
        {isMultiple ? "ies" : ""}?
      </ModalTitle>
      Delete count: {companyCount}
      <CompanyList>
        {Array.isArray(company) ? (
          company.map((comp) => (
            <CompanyListItem key={comp.id}>
              {comp.name} <br />
              {comp.address}
            </CompanyListItem>
          ))
        ) : (
          <CompanyListItem key={company!.id}>
            {company!.name} <br />
            {company!.address}
          </CompanyListItem>
        )}
      </CompanyList>
      <ButtonGroup>
        <DeleteButton type="button" onClick={handleDeleteCompany}>
          Yes
        </DeleteButton>
        <button type="button" onClick={() => dispatch(closeDeleteModal())}>
          Exit
        </button>
      </ButtonGroup>
    </>
  );
};

export default DeleteModal;
