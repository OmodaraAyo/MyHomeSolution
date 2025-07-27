import ServiceRequestContext from "@/app/dashboard/new-project/context/serviceRequestContext";
import { useContext } from "react";

export const useServiceRequest = () => {
  const context = useContext(ServiceRequestContext);
  if (!context) {
    throw new Error(
      "useServiceRequestContext must be used within a ServiceRequestProvider"
    );
  }
  return context;
};
