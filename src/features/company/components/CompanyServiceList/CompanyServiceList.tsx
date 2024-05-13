import React from "react";
import CompanyService from "../CompanyService/CompanyService";
import { Service } from "features/company/models/Service/service.types";
import { StyledListContainer } from "./companyServiceList.styles";

interface CompanyServiceListProps {
  services: Service[];
  deleteService: (id: string) => void;
  editService: (id: string) => void;
}

const CompanyServiceList: React.FC<CompanyServiceListProps> = ({
  services,
  deleteService,
  editService,
}) => {
  return (
    <StyledListContainer>
      {services.map((service) => (
        <CompanyService
          key={service.id}
          title={service.title}
          price={service.price}
          description={service.description}
          onDeletePress={() => deleteService(service.id)}
          onEditPress={() => editService(service.id)}
        />
      ))}
    </StyledListContainer>
  );
};

export default CompanyServiceList;
