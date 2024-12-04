import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/Button";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
  alertError: boolean;
}

export function InviteGuestsModal({
  addNewEmailToInvite,
  alertError,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-lg md:max-w-2xl rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        {/* Cabeçalho do Modal */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
            <button
              type="button"
              onClick={closeGuestsModal}
              className="focus:outline-none"
            >
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        {/* Lista de Emails Convidados */}
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center justify-between gap-2"
            >
              <span className="text-sm text-zinc-100 truncate">{email}</span>
              <X
                onClick={() => removeEmailFromInvites(email)}
                className="size-4 text-zinc-400 cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Linha Divisória */}
        <div className="w-full h-px bg-zinc-800"></div>

        {/* Formulário de Adicionar Email */}
        <form
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center"
          onSubmit={addNewEmailToInvite}
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o email do convidado"
              className="bg-transparent text-sm md:text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            className="text-sm md:text-base flex items-center gap-2"
          >
            Convidar
            <Plus className="size-5 text-lime-950" />
          </Button>
        </form>

        {/* Alerta de Erro */}
        {alertError && (
          <div className="text-red-500 text-sm mt-2">
            O email já foi adicionado.
          </div>
        )}
      </div>
    </div>
  );
}
