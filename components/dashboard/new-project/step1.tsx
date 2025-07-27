import { useServiceRequest } from "@/app/dashboard/new-project/hooks/useServiceRequestContext";

export default function Step1() {
  const { formData, updateFormData, nextStep } = useServiceRequest();

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
        className="flex flex-col"
      >
        {/* Category Dropdown */}
        <input
          type="text"
          placeholder="Category"
          value={formData.serviceCategory || ""}
          onChange={(e) => updateFormData({ serviceCategory: e.target.value })}
        />
        {/* Sub Category Dropdown */}
        <input
          type="text"
          placeholder="Sub Category"
          value={formData.subCategory || ""}
          onChange={(e) => updateFormData({ subCategory: e.target.value })}
        />

        <button type="submit">Continue</button>
      </form>
    </section>
  );
}
