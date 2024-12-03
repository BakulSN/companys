export interface Company {
  id: string;
  name: string;
  address: string;
  isSelected: boolean;
}

export interface CompaniesState {
  companies: Company[];
  loadedCompanies: Company[];
  itemsPerPage: number;
  isTableEmpty: boolean;
}

export interface CompanyRowProps {
  company: Company;
}

export interface CompanyFormProps {
  initialName: string;
  initialAddress: string;
  onSubmit: (name: string, address: string) => void;
  onCancel: () => void;
  submitButtonLabel: string;
}

export interface ModalState {
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;
  editCompany: Company | null;
  deleteCompany: Company[] | Company | null;
}

export interface ModalOverlayProps {
  onClose: () => void;
}

export interface AddModalProps {
  onAddCompany: (company: Company) => void;
}

export interface EditModalProps {
  company: Company;
}

export interface DeleteModalProps {
  company: Company | Company[];
}
