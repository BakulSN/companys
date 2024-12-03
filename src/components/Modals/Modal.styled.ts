import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalStyledWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  min-width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const InnerModalContent = styled.ul`
  max-height: 300px;
  overflow-y: auto;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #555;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s;
  max-length: 50;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const CompanyList = styled.ul`
  max-width: 90%;
  list-style-type: disc;
  padding: 0;
  margin: 1rem 0;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const CompanyListItem = styled.li`
  word-break: break-all;
  white-space: normal;
  padding: 0.5rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border-bottom: 1px solid #263f77;

  &:last-child {
    border-bottom: none;
  }
`;
