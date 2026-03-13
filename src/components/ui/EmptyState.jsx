import Button from "./Button";

const EmptyState = ({ title, message, actionLabel, onAction }) => (
  <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
    <p className="text-5xl">🍽️</p>
    <h3 className="mt-3 text-xl font-bold text-primary">{title}</h3>
    <p className="mt-2 text-neutral-600">{message}</p>
    {actionLabel ? (
      <Button className="mt-4" onClick={onAction}>
        {actionLabel}
      </Button>
    ) : null}
  </div>
);

export default EmptyState;
