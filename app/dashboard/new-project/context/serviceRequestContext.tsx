"use client"
import { createContext } from "react";
import { CustomServiceReqContextType } from "../types/type";

const ServiceRequestContext = createContext<CustomServiceReqContextType | null>(null);

export default ServiceRequestContext;
