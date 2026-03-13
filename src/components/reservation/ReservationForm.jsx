import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../ui/Button";
import StepIndicator from "./StepIndicator";
import ConfirmationCard from "./ConfirmationCard";

const schema = yup.object({
  name: yup.string().required("Nom requis"),
  phone: yup.string().required("Telephone requis"),
  email: yup.string().email("Email invalide").required("Email requis")
});

const steps = ["Accueil", "Date & Heure", "Personnes", "Infos client", "Preferences", "Confirmation"];

const getFutureDates = () => {
  const now = new Date();
  return Array.from({ length: 10 }).map((_, i) => {
    const date = new Date(now);
    date.setDate(now.getDate() + i + 1);
    return date.toISOString().slice(0, 10);
  });
};

const ReservationForm = () => {
  const [step, setStep] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [reservationId, setReservationId] = useState("");
  const dates = useMemo(() => getFutureDates(), []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      date: dates[0],
      slot: "19:30",
      guests: 2,
      name: "",
      phone: "",
      email: "",
      occasion: "",
      preference: "Sans preference"
    }
  });

  const values = useWatch({ control });

  const onSubmit = () => {
    setReservationId("RSV-IAWM-2026");
    setConfirmed(true);
  };

  if (confirmed) return <ConfirmationCard reservationId={reservationId} />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-white p-6 shadow-md">
      <StepIndicator steps={steps} currentStep={step} />

      {step === 0 ? (
        <div>
          <h2 className="text-2xl font-bold text-primary">Reserver une table</h2>
          <p className="mt-2 text-neutral-600">En 6 etapes rapides, recevez votre numero de reservation.</p>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-3">
          <label className="block text-sm font-semibold">Date</label>
          <select className="w-full rounded-xl border px-3 py-2" {...register("date")}>{dates.map((date) => <option key={date}>{date}</option>)}</select>
          <label className="block text-sm font-semibold">Heure</label>
          <select className="w-full rounded-xl border px-3 py-2" {...register("slot")}>{["12:30", "13:30", "19:00", "19:30", "20:30", "21:00"].map((slot) => <option key={slot}>{slot}</option>)}</select>
        </div>
      ) : null}

      {step === 2 ? (
        <div>
          <label className="block text-sm font-semibold">Nombre de personnes</label>
          <input type="number" min="1" max="20" className="w-full rounded-xl border px-3 py-2" {...register("guests")} />
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold">Nom*</label>
            <input className="w-full rounded-xl border px-3 py-2" {...register("name")} />
            <p className="text-xs text-danger">{errors.name?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold">Telephone*</label>
            <input className="w-full rounded-xl border px-3 py-2" {...register("phone")} />
            <p className="text-xs text-danger">{errors.phone?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold">Email*</label>
            <input className="w-full rounded-xl border px-3 py-2" {...register("email")} />
            <p className="text-xs text-danger">{errors.email?.message}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold">Occasion</label>
            <input className="w-full rounded-xl border px-3 py-2" {...register("occasion")} />
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div>
          <label className="block text-sm font-semibold">Preference</label>
          <select className="w-full rounded-xl border px-3 py-2" {...register("preference")}>
            {['Terrasse', 'Interieur', 'Salle privee', 'Sans preference'].map((pref) => <option key={pref}>{pref}</option>)}
          </select>
        </div>
      ) : null}

      {step === 5 ? (
        <div className="space-y-2 rounded-xl bg-neutral-50 p-4 text-sm">
          <p><strong>Date:</strong> {values?.date} a {values?.slot}</p>
          <p><strong>Personnes:</strong> {values?.guests}</p>
          <p><strong>Nom:</strong> {values?.name}</p>
          <p><strong>Telephone:</strong> {values?.phone}</p>
          <p><strong>Email:</strong> {values?.email}</p>
          <p><strong>Preference:</strong> {values?.preference}</p>
        </div>
      ) : null}

      <div className="mt-6 flex justify-between">
        <Button type="button" variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))}>Precedent</Button>
        {step < 5 ? (
          <Button type="button" onClick={() => setStep((s) => Math.min(5, s + 1))}>Suivant</Button>
        ) : (
          <Button type="submit">Confirmer</Button>
        )}
      </div>
    </form>
  );
};

export default ReservationForm;
