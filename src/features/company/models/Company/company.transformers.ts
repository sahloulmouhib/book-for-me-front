import {
  AddCompanyImage,
  Company,
  CompanyDetailsPayload,
  CompanyResponse,
} from "./company.types";
import { AddCompanyDetailsSchemaType } from "features/company/forms/addCompanyDetails.FormConfig";

export const encodeCompanyDetails = (
  companyDetails: AddCompanyDetailsSchemaType
): CompanyDetailsPayload => {
  return {
    title: companyDetails.name,
    description: companyDetails.description,
  };
};

export const encodeAddCompanyImagePayload = (
  data: AddCompanyImage
): FormData => {
  const { companyId, image } = data;
  const formData = new FormData();
  formData.append("image", image);
  formData.append("companyId", companyId);
  return formData;
};

export const decodeCreateCompanyResponse = (data: CompanyResponse): Company => {
  return {
    companyId: data.company.id,
  };
};
