export interface CompanyDetailsPayload {
  title: string;
  description?: string;
}

export interface AddCompanyImage {
  companyId: string;
  image: File;
}

export interface CompanyResponse {
  company: {
    id: string;
  };
}

export interface Company {
  companyId: string;
}
