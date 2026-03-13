import { forwardRef } from "react";

const variants = {
  primary:
    "bg-gradient-to-br from-accent via-amber-300 to-accent-dark text-primary shadow-[0_12px_28px_rgba(232,160,32,0.35)] hover:brightness-105",
  secondary:
    "bg-gradient-to-br from-primary to-primary-light text-white shadow-[0_12px_24px_rgba(30,58,95,0.28)] hover:brightness-110",
  ghost:
    "bg-white/50 border border-primary/25 text-primary backdrop-blur hover:bg-white"
};

const Button = forwardRef(({ variant = "primary", className = "", ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`}
    {...props}
  />
));

Button.displayName = "Button";

export default Button;
