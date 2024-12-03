import { RootState } from "../store";

export const isAddModalOpen = (state: RootState) => state.modal.isAddModalOpen;
export const isEditModalOpen = (state: RootState) =>
  state.modal.isEditModalOpen;
export const isDeleteModalOpen = (state: RootState) =>
  state.modal.isDeleteModalOpen;

export const deleteCompany = (state: RootState) => state.modal.deleteCompany;
export const editCompany = (state: RootState) => state.modal.editCompany;
