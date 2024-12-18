import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export function Guests() {
  const { tripId } = useParams();
  const [participant, setParticipant] = useState<Participant[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/trips/${tripId}/participants`)
      .then((response) => setParticipant(response.data.participants));
  }, [tripId]);
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participant.map((participant, index) => {
          return (
            <div
              key={participant.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block text-sm text-zinc-400 truncate">
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CircleCheck className="text-lime-400 size-5 shrink-0" />
              ) : (
                <CircleDashed className="text-zinc-500 size-5 shrink-0" />
              )}
            </div>
          );
        })}
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
