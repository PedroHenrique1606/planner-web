import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./createActivityModal";
import { ImportantLinks } from "./importantLinks";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDate } from "./destinationAndDate";

export default function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDate />
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-3xl">Atividades</h2>
            <button
              onClick={openActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5 text-lime-950" />
              Cadastrar atividade
            </button>
          </div>
          <Activities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800"></div>
          <div>
            <Guests />
          </div>
        </div>
      </main>
      {isCreateActivityModalOpen && (
        <CreateActivityModal closeActivityModal={closeActivityModal} />
      )}
    </div>
  );
}
