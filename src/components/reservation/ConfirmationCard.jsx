import { Link } from "react-router-dom";
import Button from "../ui/Button";

const ConfirmationCard = ({ reservationId }) => (
  <div className="rounded-2xl bg-white p-6 text-center shadow-md">
    <p className="text-4xl">✅</p>
    <h3 className="mt-3 text-xl font-bold text-primary">Reservation confirmee</h3>
    <p className="mt-2 text-neutral-600">Numero: {reservationId}</p>
    <Link to={`/confirmation/reservation/${reservationId}`}>
      <Button className="mt-4">Voir la confirmation</Button>
    </Link>
  </div>
);

export default ConfirmationCard;
