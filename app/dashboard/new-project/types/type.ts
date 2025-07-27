{
  /**service-request context form type  */
}
export interface ServiceRequestContextForm {
  serviceCategory: string;
  subCategory: string;
  projectTitle: string;
  businessIndustry: string;
  projectDescription: string;
  existingUrl?: string;
}

{
  /**context type */
}
export interface CustomServiceReqContextType {
  step: number;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  formData: ServiceRequestContextForm;
  updateFormData: (data: Partial<ServiceRequestContextForm>) => void;
}

//created by Omodara Ayodele
//github: OmodaraAyo
