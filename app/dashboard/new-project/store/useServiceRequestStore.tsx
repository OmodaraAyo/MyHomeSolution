"use client"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { CustomServiceReqContextType } from "../types/type"



export const useServiceRequestStore = create<CustomServiceReqContextType>()(
  persist(
    (set, get) => ({
      step: 1,
      formData: {},
      totalSteps: [1, 2, 3, 4],

      _hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),

      setStep: (step: number) => set({ step }),

      //next step
      nextStep: () => {
        const { step, totalSteps } = get()
        if (step < totalSteps.length) {
          set({ step: step + 1 })
        }
      },

      //previous step
      prevStep: () => {
        const { step } = get()
        if (step > 1) {
          set({ step: step - 1 })
        }
      },

      //go to specific step
      goToStep: (targetStep) => {
        const { totalSteps } = get()
        if (targetStep >= 1 && targetStep <= totalSteps.length) {
          set({ step: targetStep })        }
      },

      //update form data
      updateFormData: (data) => {
        const attachedFiles = data.attachedFiles?.map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        }));

        set((state) => ({
          formData: { ...state.formData, ...data, attachedFiles },
        }));
      },
      resetForm: () => set({ step: 1, formData: {} }),
    }),

    // persist configuration
    {
      name: "service-request-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        const { formData } = state;
        const attachedFiles = formData.attachedFiles?.map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        }));

        return {
          step: state.step,
          formData: { ...formData, attachedFiles },
        };
      },

      onRehydrateStorage: () => (state) =>{
        state?.setHasHydrated(true)
      }
    },
  ),
)
