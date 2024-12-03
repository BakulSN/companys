import { createAsyncThunk } from "@reduxjs/toolkit";

import { Company } from "../../types/types";
import { generateMockCompanies } from "../../workers/worker";

export const fetchCompanies = createAsyncThunk<Company[], number>(
  "companies/fetchCompanies",
  async (count: number) => {
    return generateMockCompanies(count);
  }
);
