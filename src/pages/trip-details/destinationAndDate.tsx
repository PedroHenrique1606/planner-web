import { MapPin, Calendar, Settings2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface Trip {
  
}

export function DestinationAndDate() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState()

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => setTrip(response.data.trip));
  }, [tripId]);
  // console.log(params);
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Fortaleza, CE</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">17 à 23 de Agosto</span>
        </div>
        <div className="w-px h-6 bg-zinc-800"></div>
        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
