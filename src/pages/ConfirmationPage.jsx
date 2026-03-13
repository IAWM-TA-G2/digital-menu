import { Link, useParams } from "react-router-dom";
import Button from "../components/ui/Button";

const ConfirmationPage = () => {
  const { type, id } = useParams();

  return (
    <section className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-md">
      <p className="text-5xl">🎉</p>
      <h1 className="mt-4 text-3xl font-bold text-primary">Confirmation {type}</h1>
      <p className="mt-2 text-neutral-600">Reference: {id}</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link to="/menu"><Button>Retour au menu</Button></Link>
        <Link to="/"><Button variant="ghost">Accueil</Button></Link>
      </div>
    </section>
  );
};

export default ConfirmationPage;
