import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import Modal from "../ui/Modal";
import DishCard from "../menu/DishCard";
import dishes from "../../data/dishes.json";

const hungerMap = { Petite: "petite-faim", Moyenne: "sur-le-pouce", Grande: "grande-faim" };

const RecommendationAssistant = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ hunger: "", budget: "", restriction: "" });

  const options = [
    ["Petite", "Moyenne", "Grande"],
    ["< 50 DH", "50-100 DH", "> 100 DH"],
    ["Aucune", "Vegetarien", "Sans gluten", "Halal"]
  ];

  const recommendations = useMemo(() => {
    let list = [...dishes];

    if (answers.hunger) {
      list = list.filter((dish) => (dish.tags || []).includes(hungerMap[answers.hunger]));
    }

    if (answers.budget === "< 50 DH") list = list.filter((dish) => dish.price < 50);
    if (answers.budget === "50-100 DH") list = list.filter((dish) => dish.price >= 50 && dish.price <= 100);
    if (answers.budget === "> 100 DH") list = list.filter((dish) => dish.price > 100);

    if (answers.restriction === "Vegetarien") list = list.filter((dish) => dish.isVegetarian);
    if (answers.restriction === "Sans gluten") list = list.filter((dish) => !(dish.allergens || []).includes("gluten"));
    if (answers.restriction === "Halal") list = list.filter((dish) => (dish.tags || []).includes("halal"));

    return list.slice(0, 3);
  }, [answers]);

  const handleAnswer = (value) => {
    const keys = ["hunger", "budget", "restriction"];
    setAnswers((prev) => ({ ...prev, [keys[step]]: value }));
    setStep((prev) => Math.min(3, prev + 1));
  };

  const reset = () => {
    setStep(0);
    setAnswers({ hunger: "", budget: "", restriction: "" });
  };

  return (
    <>
      <button
        aria-label="Assistant recommandations"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 rounded-full bg-accent p-4 text-primary shadow-xl"
      >
        <MessageCircle />
      </button>

      <Modal open={open} onOpenChange={setOpen} title="Assistant de recommandation">
        {step < 3 ? (
          <div className="space-y-4">
            <p className="font-semibold text-primary">
              {step === 0 && "Quelle est votre faim ?"}
              {step === 1 && "Quel est votre budget ?"}
              {step === 2 && "Restrictions alimentaires ?"}
            </p>
            <div className="grid gap-2">
              {options[step].map((option) => (
                <button
                  key={option}
                  className="rounded-xl border border-neutral-200 px-4 py-2 text-left hover:border-accent"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="font-bold text-primary">Nos 3 suggestions</h4>
            <div className="grid gap-3 md:grid-cols-3">
              {recommendations.map((dish) => (
                <DishCard key={dish.id} dish={dish} variant="compact" />
              ))}
            </div>
            <button className="text-sm font-semibold text-primary" onClick={reset}>
              Recommencer
            </button>
          </div>
        )}
      </Modal>
    </>
  );
};

export default RecommendationAssistant;
