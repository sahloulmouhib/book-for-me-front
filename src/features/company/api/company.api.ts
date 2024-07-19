import { sendAxiosRequest } from "api/axios";
import { encodeCreateCompanyPayload } from "../models/CreateCompany/createCompany.transformers";
import { companyEndpoints } from "./company.endpoints";
import { CreateCompany } from "../models/CreateCompany/createCompany.types";
import { HttpMethodEnum } from "api/api.enums";
import { AddCompanyImage } from "../models/Company/company.types";
import {
  decodeCreateCompanyResponse,
  encodeAddCompanyImagePayload,
} from "../models/Company/company.transformers";

export const createCompanyMutationFn = async (
  createCompanyData: CreateCompany
) => {
  return sendAxiosRequest({
    method: HttpMethodEnum.Post,
    url: companyEndpoints.CREATE_COMPANY,
    payload: createCompanyData,
    isAuthRequired: true,
    encoder: encodeCreateCompanyPayload,
    decoder: decodeCreateCompanyResponse,
  });
};

export const addCompanyImageMutationFn = async (data: AddCompanyImage) => {
  return sendAxiosRequest({
    method: HttpMethodEnum.Post,
    url: companyEndpoints.ADD_COMPANY_IMAGE,
    payload: data,
    encoder: encodeAddCompanyImagePayload,
    isAuthRequired: true,
    isFormData: true,
  });
};
