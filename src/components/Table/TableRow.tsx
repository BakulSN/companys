import { useDispatch } from "react-redux";
import { selectCompany } from "../../store/companies/companiesSlice";
import { openDeleteModal, openEditModal } from "../../store/modal/modalSlice";
import { CompanyRowProps } from "../../types/types";
import { DeleteButton, TableRowStyled } from "./Table.styled";

const TableRow = ({ company }: CompanyRowProps) => {
  const dispatch = useDispatch();

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    dispatch(selectCompany(company.id));
  };

  const handleRowClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLInputElement) return;
    dispatch(selectCompany(company.id));
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(openEditModal(company));
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(openDeleteModal(company));
  };

  return (
    <TableRowStyled $isSelected={company.isSelected} onClick={handleRowClick}>
      <td>
        <input
          type="checkbox"
          checked={company.isSelected}
          onChange={handleSelect}
        />
      </td>

      <td>{company.name}</td>
      <td>{company.address}</td>

      <td>
        <button onClick={handleEditClick}>Edit</button>
        <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>
      </td>
    </TableRowStyled>
  );
};

export default TableRow;
