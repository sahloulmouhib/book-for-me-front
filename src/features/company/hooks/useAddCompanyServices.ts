import { useState } from "react";
import { Service } from "../models/Service/service.types";
import {
  addCompanyServiceDefaultValues,
  addCompanyServiceSchema,
} from "../forms/company.addCompanyServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useAddCompanyServices = () => {
  const [addedServices, setAddedServices] = useState<Service[]>([]);

  const { register, formState, handleSubmit, setValue, reset } = useForm({
    mode: "onChange",
    defaultValues: addCompanyServiceDefaultValues,
    resolver: zodResolver(addCompanyServiceSchema),
  });
  const { errors } = formState;

  console.log(errors);
  const onAddService = () => {
    handleSubmit((data) => {
      setAddedServices((previousServices) => {
        const newService = { ...data, id: Math.random().toString() };
        return [...previousServices, newService];
      });
      reset();
    })();
  };

  const deleteService = (id: string) => {
    setAddedServices((previousServices) =>
      previousServices.filter((service) => service.id !== id)
    );
  };

  const editService = (id: string) => {
    const service = addedServices.find((service) => service.id === id);
    deleteService(id);
    if (service) {
      setValue("title", service.title);
      setValue("price", service.price);
      setValue("description", service.description);
    }
  };

  return { addedServices, register, onAddService, editService, deleteService };
};

export default useAddCompanyServices;
