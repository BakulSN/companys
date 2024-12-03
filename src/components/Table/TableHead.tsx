import { useDispatch, useSelector } from "react-redux";
import { selectAllCompanies } from "../../store/companies/companiesSlice";
import {
  getLoadedCompanies,
  getSelectedCompanies,
} from "../../store/companies/companiesSelectors";

const THead = () => {
  const dispatch = useDispatch();
  const loadedCompanies = useSelector(getLoadedCompanies);
  const selectedCompanies = useSelector(getSelectedCompanies);
  const isAllSelected =
    loadedCompanies.length > 0 &&
    loadedCompanies.length === selectedCompanies.length;

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAllCompanies(e.target.checked));
  };

  return (
    <thead>
      <tr>
        <th>
          <label>
            <p>Select all</p>
            <input
              type="checkbox"
              onChange={handleSelectAll}
              checked={isAllSelected}
            />
          </label>
        </th>
        <th>Company Name</th>
        <th>Address</th>
      </tr>
    </thead>
  );
};

export default THead;
