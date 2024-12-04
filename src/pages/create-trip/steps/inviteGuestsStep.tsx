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
    <div className="h-auto px-4 py-3 bg-zinc-900 rounded-xl flex flex-col md:flex-row md:h-16 md:items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 text-left flex-1 mb-4 md:mb-0"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-base md:text-lg">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-base md:text-lg">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="hidden md:block w-px h-6 bg-zinc-800"></div>

      <Button
        onClick={openConfirmTripModal}
        variant="primary"
        className="text-sm md:text-base flex items-center gap-2 justify-center"
      >
        Confirmar Viagem
        <ArrowRight className="size-5 text-lime-950" />
      </Button>
    </div>
  );
}
