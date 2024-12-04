import { MapPin, Calendar, Settings2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { getTripById } from "../../services/getTripById"; // Importando o serviço de API

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export function DestinationAndDate() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    if (tripId) {
      getTripById(tripId)
        .then((data) => setTrip(data))
        .catch((error) => console.error("Erro ao buscar a viagem:", error));
    }
  }, [tripId]);

  const displayedDate = trip
    ? format(new Date(trip.starts_at), "d ' de ' LLL")
        .concat(" até ")
        .concat(format(new Date(trip.ends_at), "d ' de ' LLL"))
    : null;

  return (
    <div className="px-4 py-4 sm:py-3 h-auto sm:h-16 rounded-xl bg-zinc-900 shadow-shape flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Destino */}
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100 text-sm sm:text-base">
          {trip?.destination}
        </span>
      </div>

      {/* Data e Ações */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-5 gap-2">
        {/* Datas */}
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100 text-sm sm:text-base">
            {displayedDate}
          </span>
        </div>

        {/* Separador */}
        <div className="hidden sm:block w-px h-6 bg-zinc-800"></div>

        {/* Botão */}
        <Button
          variant="secondary"
          className="text-sm sm:text-base flex items-center gap-2"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
