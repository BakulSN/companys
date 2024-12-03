import { Provider } from "react-redux";
import { store } from "./store/store";
import TableCompanies from "./components/Table/TableContainer";
import ModalContainer from "./components/Modals/ModalContainer";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <>
      <h1>Список компаний</h1>
      <TableCompanies />
      <ModalContainer />
    </>
  </Provider>
);

export default App;
