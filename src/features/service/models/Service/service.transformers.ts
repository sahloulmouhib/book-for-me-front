import { Service, ServicePayload } from "./service.types";

export const encodeService = (service: Service): ServicePayload => {
  return {
    title: service.title,
    description: service.description,
    price: service.price,
    duration: service.duration,
  };
};

export const encodeServices = (services: Service[]): ServicePayload[] => {
  return services.map(encodeService);
};
