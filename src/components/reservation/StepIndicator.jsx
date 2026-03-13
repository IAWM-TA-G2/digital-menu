const StepIndicator = ({ steps, currentStep }) => (
  <div className="mb-6 flex flex-wrap gap-2">
    {steps.map((step, idx) => (
      <div
        key={step}
        className={`rounded-full px-3 py-1 text-sm font-semibold ${
          idx <= currentStep ? "bg-accent text-primary" : "bg-neutral-200 text-neutral-600"
        }`}
      >
        {idx + 1}. {step}
      </div>
    ))}
  </div>
);

export default StepIndicator;
