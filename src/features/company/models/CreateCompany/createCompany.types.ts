import { AddCompanyAvailabilitiesSchemaType } from "features/availability/forms/availability.addCompanyAvailabilitiesFormConfig";
import { AvailabilityPayload } from "features/availability/models/Availability/availability.types";
import { AddCompanyDetailsSchemaType } from "features/company/forms/company.addCompanyDetailsFormConfig";
import { CompanyDetailsPayload } from "features/company/models/Company/company.types";
import {
  Service,
  ServicePayload,
} from "features/service/models/Service/service.types";

export interface CreateCompanyPayload extends CompanyDetailsPayload {
  availabilities: AvailabilityPayload[];
  services: ServicePayload[];
}

export interface CreateCompany {
  companyDetails: AddCompanyDetailsSchemaType;
  availabilities: AddCompanyAvailabilitiesSchemaType;
  services: Service[];
}
