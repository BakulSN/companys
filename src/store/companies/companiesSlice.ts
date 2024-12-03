import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompaniesState, Company } from "../../types/types";
import { generateMockCompanies } from "../../workers/worker";
import { fetchCompanies } from "./AsyncThunk";

const initialState: CompaniesState = {
  companies: generateMockCompanies(15000),
  loadedCompanies: [],
  itemsPerPage: 50,
  isTableEmpty: false,
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies = [action.payload, ...state.companies];
      state.loadedCompanies = [action.payload, ...state.loadedCompanies];
    },

    selectCompany: (state, action: PayloadAction<string>) => {
      state.loadedCompanies = state.loadedCompanies.map((company) =>
        company.id === action.payload
          ? { ...company, isSelected: !company.isSelected }
          : company
      );
      state.companies = state.companies.map((company) =>
        company.id === action.payload
          ? { ...company, isSelected: !company.isSelected }
          : company
      );
    },

    selectAllCompanies: (state, action: PayloadAction<boolean>) => {
      state.loadedCompanies = state.loadedCompanies.map((company) => ({
        ...company,
        isSelected: action.payload,
      }));

      state.companies = state.companies.map((company) => {
        const loadedCompany = state.loadedCompanies.find(
          (loaded) => loaded.id === company.id
        );
        return loadedCompany
          ? { ...company, isSelected: loadedCompany.isSelected }
          : company;
      });
    },

    loadMoreCompanies: (state) => {
      const start = state.loadedCompanies.length;
      const end = start + state.itemsPerPage;

      if (start >= state.companies.length) {
        return;
      }

      const additionalCompanies = state.companies.slice(start, end);
      state.loadedCompanies = [
        ...state.loadedCompanies,
        ...additionalCompanies,
      ];

      state.isTableEmpty = state.loadedCompanies.length === 0;
    },

    updateCompany: (state, action: PayloadAction<Company>) => {
      state.companies = state.companies.map((company) =>
        company.id === action.payload.id ? action.payload : company
      );
      state.loadedCompanies = state.loadedCompanies.map((company) =>
        company.id === action.payload.id ? action.payload : company
      );
    },
    removeCompany: (state, action: PayloadAction<string>) => {
      state.companies = state.companies.filter(
        (company) => company.id !== action.payload
      );
      state.loadedCompanies = state.loadedCompanies.filter(
        (company) => company.id !== action.payload
      );
    },

    removeSelectedCompanies: (state) => {
      const selectedIds = state.loadedCompanies
        .filter((company) => company.isSelected)
        .map((company) => company.id);

      state.loadedCompanies = state.loadedCompanies.filter(
        (company) => !company.isSelected
      );

      state.companies = state.companies.filter(
        (company) => !selectedIds.includes(company.id)
      );

      state.isTableEmpty =
        state.loadedCompanies.length === 0 && state.companies.length === 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companies = [...state.companies, ...action.payload];
      state.loadedCompanies = [
        ...state.loadedCompanies,
        ...action.payload.slice(0, state.itemsPerPage),
      ];
    });
  },
});

export const {
  loadMoreCompanies,
  selectCompany,
  selectAllCompanies,
  updateCompany,
  addCompany,
  removeCompany,
  removeSelectedCompanies,
} = companiesSlice.actions;

export default companiesSlice.reducer;
