const LoadingSkeleton = ({ className = "h-6 w-full" }) => (
  <div className={`animate-pulse rounded-xl bg-neutral-200 ${className}`} />
);

export default LoadingSkeleton;
