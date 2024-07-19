import { encodeAvailabilities } from "features/availability/models/Availability/availability.transformers";
import { encodeServices } from "features/service/models/Service/service.transformers";
import { encodeCompanyDetails } from "features/company/models/Company/company.transformers";
import { CreateCompany, CreateCompanyPayload } from "./createCompany.types";

export const encodeCreateCompanyPayload = (
  createCompanyData: CreateCompany
): CreateCompanyPayload => {
  const { companyDetails, availabilities, services } = createCompanyData;
  const encodedCompanyDetails = encodeCompanyDetails(companyDetails);
  return {
    ...encodedCompanyDetails,
    availabilities: encodeAvailabilities(availabilities),
    services: encodeServices(services),
  };
};
