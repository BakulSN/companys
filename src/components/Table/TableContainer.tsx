import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { loadMoreCompanies } from "../../store/companies/companiesSlice";
import TableRow from "./TableRow";
import {
  getAllCompanies,
  getSelectedCompanies,
  getLoadedCompanies,
  isTableEmpty,
} from "../../store/companies/companiesSelectors";
import THead from "./TableHead";
import { openAddModal, openDeleteModal } from "../../store/modal/modalSlice";
import { DeleteButton, Header, TableContainer } from "./Table.styled";

const Table = () => {
  const dispatch = useDispatch();
  const companies = useSelector(getLoadedCompanies);
  const companiesCount = useSelector(getAllCompanies);
  const selectedCompanies = useSelector(getSelectedCompanies);
  const isEmpty = useSelector(isTableEmpty);

  useEffect(() => {
    dispatch(loadMoreCompanies());
  }, [dispatch]);

  useInfiniteScroll(() => {
    dispatch(loadMoreCompanies());
  });

  const handleTryAdd = () => {
    dispatch(openAddModal());
  };

  const handleDeleteSelected = () => {
    dispatch(openDeleteModal(selectedCompanies));
  };

  const handleLoadMore = () => {
    dispatch(loadMoreCompanies());
  };

  return (
    <TableContainer>
      <Header>
        <button type="button" onClick={handleTryAdd}>
          Add Company
        </button>
        <DeleteButton type="button" onClick={handleDeleteSelected}>
          Delete Selected
        </DeleteButton>
        <span>
          {companies.length} out of {companiesCount.length}
        </span>
      </Header>
      <table>
        <THead />
        <tbody>
          {companies.map((company) => (
            <TableRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>

      {!isEmpty && companies.length < companiesCount.length && (
        <button onClick={handleLoadMore}>Загрузить больше</button>
      )}
    </TableContainer>
  );
};

export default Table;
