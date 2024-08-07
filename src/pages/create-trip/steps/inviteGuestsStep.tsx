import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/Button";

interface InviteGuestsStepsProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export function InviteGuestsSteps({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepsProps) {
  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex flex-1 items-center gap-2 text-left"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
      </button>
      <div className="w-px h-6 bg-zinc-800"></div>
      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar Viagem
        <ArrowRight className="size-5 text-lime-950" />
      </Button>
    </div>
  );
}
