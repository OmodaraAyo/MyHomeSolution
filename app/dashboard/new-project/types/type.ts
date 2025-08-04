{
  /**service-request context form type  */
}
export interface ServiceRequestContextForm {
  serviceCategory: string;
  subCategory: string;
  title: string;
  businessIndustry: string;
  description: string;
  existingUrl?: string;
  attachedFiles?: FileInfo[];
  desiredStartDate?: string;
  expectedDelivery?: string;
  budgetRange?: string;
}

export interface FileInfo {
  name: string;
  size: number;
  type: string;
}

{
  /**context type */
}
export interface CustomServiceReqContextType {
  step: number;
  totalSteps: number[];
  _hasHydrated?: boolean;
  setHasHydrated: (state: boolean) => void;
  setStep: (step: number) => void;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  formData: Partial<ServiceRequestContextForm>;
  updateFormData: (data: Partial<ServiceRequestContextForm>) => void;
  resetForm: () => void;
}

//created by Omodara Ayodele
//github: OmodaraAyo
