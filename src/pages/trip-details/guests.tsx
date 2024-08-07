import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/Button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Jéssica White
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              jessicawhite@gmail.com
            </span>
          </div>
          <CircleCheck className="text-lime-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Wilfred Dickens III
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              marian.hyatt@hotmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
