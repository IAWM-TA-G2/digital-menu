import * as Slider from "@radix-ui/react-slider";


import { useCallback } from "react";

const PriceSlider = ({ value, onChange, min = 20, max = 200 }) => {
  // Prevent infinite loop by only calling onChange if value actually changes
  const handleValueChange = useCallback(
    (newValue) => {
      if (!Array.isArray(newValue) || newValue.length !== 2) return;
      if (newValue[0] !== value[0] || newValue[1] !== value[1]) {
        onChange(newValue);
      }
    },
    [onChange, value]
  );
  return (
    <div className="space-y-2">
      <Slider.Root
        className="relative flex h-6 w-full items-center"
        value={value}
        onValueChange={handleValueChange}
        min={min}
        max={max}
        step={1}
        minStepsBetweenThumbs={5}
        aria-label="Fourchette de prix"
      >
        <Slider.Track className="relative h-2 grow rounded-full bg-neutral-200">
          <Slider.Range className="absolute h-full rounded-full bg-accent" />
        </Slider.Track>
        <Slider.Thumb className="block h-4 w-4 rounded-full border-2 border-accent bg-white" />
        <Slider.Thumb className="block h-4 w-4 rounded-full border-2 border-accent bg-white" />
      </Slider.Root>
      <p className="text-sm text-neutral-600">
        {value[0]} DH - {value[1]} DH
      </p>
    </div>
  );
};

export default PriceSlider;
