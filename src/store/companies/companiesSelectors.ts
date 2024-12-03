import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getAllCompanies = (state: RootState) => state.companies.companies;

export const getLoadedCompanies = (state: RootState) =>
  state.companies.loadedCompanies;

export const getSelectedCompanies = createSelector(
  [getLoadedCompanies],
  (companies) => companies.filter((company) => company.isSelected)
);

export const isTableEmpty = (state: RootState) =>
  state.companies.loadedCompanies.length;
