import Text from "@/components/ui/Text";
import { tw } from "@/utils/tw";
import { Children, createContext, useContext, useState } from "react";

// Create Context
const StepsContext = createContext();

export function Steps({
  children,
  className,
  totalSteps,
  currentStep: controlledStep,
  setCurrentStep: setControlledStep,
}) {
  const [internalStep, setInternalStep] = useState(0);

  const isControlled =
    controlledStep !== undefined && setControlledStep !== undefined;
  const currentStep = isControlled ? controlledStep : internalStep;
  const setCurrentStep = isControlled ? setControlledStep : setInternalStep;

  const nextStep = () => {
    setCurrentStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <StepsContext.Provider
      value={{ currentStep, setCurrentStep, nextStep, prevStep, totalSteps }}
    >
      <div className={tw(className)}>{children}</div>
    </StepsContext.Provider>
  );
}

function useSteps() {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error("useSteps must be used within <Steps>");
  }
  return context;
}

export function StepsHeader({ children, className }) {
  const { currentStep, totalSteps } = useSteps();

  const progressPercent =
    totalSteps > 1 ? (currentStep / (totalSteps - 1)) * 100 : 0;

  return (
    <div className={tw("relative", className)}>
      <div className="absolute left-1/2 top-[10px] h-[2px] w-full max-w-[calc(100%_-_77px)] -translate-x-1/2 overflow-hidden rounded-full bg-light-400 rtl:max-w-[calc(100%_-_120px)] rtl:translate-x-[calc(-50%-_-12px)]">
        <div
          className="h-1 bg-secondary-200 transition-all duration-300 ease-linear"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <div className="relative z-10 flex justify-between">{children}</div>
    </div>
  );
}

export function StepItem({ index, title, className }) {
  const { currentStep, setCurrentStep } = useSteps();

  const isActive = index === currentStep;
  const isCompleted = index < currentStep;

  return (
    <button
      type="button"
      onClick={() => setCurrentStep(index)}
      className="flex flex-col items-center gap-2 outline-none"
    >
      <div
        className={tw(
          "relative z-10 flex size-5 items-center justify-center rounded-full border-[6px] transition-all",
          isActive
            ? "border-primary-400 bg-secondary-200"
            : isCompleted
              ? "border-secondary-100 bg-secondary-200"
              : "border-accent-100 bg-light-400",
          className,
        )}
      />
      <Text
        size="md"
        className={tw(
          "font-medium transition-all",
          isActive
            ? "text-secondary-200"
            : isCompleted
              ? "text-secondary-200"
              : "text-light-400",
        )}
      >
        {title}
      </Text>
    </button>
  );
}

export function StepsContent({ children, className }) {
  const { currentStep } = useSteps();

  // Safely convert children into an array
  const childrenArray = Children.toArray(children);

  return (
    <div className={tw("relative overflow-hidden", className)}>
      {childrenArray[currentStep]}
    </div>
  );
}

// Single Panel
export function StepsPanel({ children, className }) {
  return <div className={tw("w-full", className)}>{children}</div>;
}
