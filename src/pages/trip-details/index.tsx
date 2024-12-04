import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./createActivityModal";
import { ImportantLinks } from "./importantLinks";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDate } from "./destinationAndDate";
import { Button } from "../../components/Button";
import { CreateLinkModal } from "./createLinkModal";

export default function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  function openActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  function openLinkModal() {
    setIsCreateLinkModalOpen(true);
  }

  function closeLinkModal() {
    setIsCreateLinkModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-4 sm:px-6 py-8 md:py-10 mx-auto space-y-8">
      <DestinationAndDate />
      <main className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 px-2">
        {/* Seção de Atividades */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="font-semibold text-2xl sm:text-3xl">Atividades</h2>
            <button
              onClick={openActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-4 py-2 text-sm sm:text-base font-medium flex items-center gap-2 hover:bg-lime-400 transition-all justify-center"
            >
              <Plus className="size-4 sm:size-5 text-lime-950" />
              Cadastrar atividade
            </button>
          </div>
          <Activities />
        </div>

        {/* Sidebar com Links e Convidados */}
        <div className="w-full lg:w-80 space-y-6">
          <ImportantLinks />
          <Button
            variant="secondary"
            size="full"
            onClick={openLinkModal}
            className="flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Plus className="size-4 sm:size-5" />
            Cadastrar novo link
          </Button>
          {isCreateLinkModalOpen && (
            <CreateLinkModal closeLinkModal={closeLinkModal} />
          )}
          <div className="w-full h-px bg-zinc-800"></div>
          <div>
            <Guests />
          </div>
        </div>
      </main>

      {/* Modais */}
      {isCreateActivityModalOpen && (
        <CreateActivityModal closeActivityModal={closeActivityModal} />
      )}
    </div>
  );
}
