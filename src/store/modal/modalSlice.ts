import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Company, ModalState } from "../../types/types";

const initialState: ModalState = {
  isAddModalOpen: false,
  isEditModalOpen: false,
  isDeleteModalOpen: false,
  editCompany: null,
  deleteCompany: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAddModal: (state) => {
      state.isAddModalOpen = true;
    },
    closeAddModal: (state) => {
      state.isAddModalOpen = false;
    },
    openEditModal: (state, action: PayloadAction<Company>) => {
      state.isEditModalOpen = true;
      state.editCompany = action.payload;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.editCompany = null;
    },
    openDeleteModal: (state, action: PayloadAction<Company[] | Company>) => {
      state.isDeleteModalOpen = true;
      state.deleteCompany = action.payload;
    },
    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
      state.deleteCompany = null;
    },
  },
});

export const {
  openAddModal,
  closeAddModal,
  openEditModal,
  closeEditModal,
  openDeleteModal,
  closeDeleteModal,
} = modalSlice.actions;

export default modalSlice.reducer;
