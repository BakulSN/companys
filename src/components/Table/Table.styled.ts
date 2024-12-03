import styled from "styled-components";

export const TableContainer = styled.div`
  max-width: 100%;

  tr {
    max-width: 100%;

    td {
      cursor: pointer;
      word-break: break-all;
      white-space: normal;
    }
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;

  &:hover {
    background-color: #b52b38;
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 10px;

  span {
    background-color: aliceblue;
  }
`;

export const TableRowStyled = styled.tr<{ $isSelected: boolean }>`
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#c5e1f7" : "#f5f5f5"};
  cursor: pointer;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "#a1c6e7" : "#d1d1d1"};
  }
`;

export const HeadLabel = styled.label`
  font-size: 1rem;
  color: #555;
  display: flex;
  text-align: center;
  flex-direction: column;
  cursor: pointer;
`;

export const TableBody = styled.div`
  display: grid;
  overflow-y: auto;
  grid-template-columns: 1fr;
  border-bottom: 1px solid #eee;
`;
