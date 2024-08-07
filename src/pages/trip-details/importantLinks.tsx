import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/Button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva do Airbnb
            </span>
            <a
              href=""
              target="_blank"
              className="block text-sm text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/dnkjgsdhdlaskvdbjsahdsbavjfvbhlkdjvgshaklj
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Regras da Casa
            </span>
            <a
              href=""
              target="_blank"
              className="block text-sm text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.notion.so/Regras-da-Casa-d092f0788c9f4f9bb68d93a55d715f77
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div> 
      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
