import { faker } from "@faker-js/faker";
import { Company } from "../types/types";

export const generateMockCompanies = (count: number): Company[] => {
  const companies: Company[] = [];

  for (let i = 0; i < count; i++) {
    companies.push({
      id: faker.string.uuid(),
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      isSelected: false,
    });
  }

  return companies;
};
