import { Activity, CircleCheck, CircleDashed } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import axios from "axios";
import { toast } from "sonner";

interface Activity {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}

export function Activities() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/trips/${tripId}/activities`)
      .then((response) => setActivities(response.data.activities))
      .catch(() => toast.error("Erro ao carregar atividades"))
      .finally(() => toast.success("Veja suas atividades"));
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((category) => (
        <div key={category.date} className="space-y-3">
          {/* Cabeçalho da Data */}
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-zinc-300">
              {format(new Date(category.date), "d")}
            </span>
            <span className="text-xs text-zinc-500 uppercase">
              {format(new Date(category.date), "EEEE", { locale: ptBR })}
            </span>
          </div>

          {/* Lista de Atividades */}
          {category.activities.length > 0 ? (
            <div className="space-y-3">
              {category.activities.map((activity) => {
                const activityTime = new Date(activity.occurs_at).getTime();
                const now = new Date().getTime();
                const Icon = now > activityTime ? CircleCheck : CircleDashed;

                return (
                  <div
                    key={activity.id}
                    className="px-4 py-3 bg-zinc-900 rounded-xl shadow-md flex items-center gap-4"
                  >
                    <Icon className="size-5 text-lime-300 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm sm:text-base text-zinc-100 font-medium">
                        {activity.title}
                      </p>
                      <p className="text-xs text-zinc-500 sm:hidden">
                        {format(new Date(activity.occurs_at), "HH:mm")}h
                      </p>
                    </div>
                    <span className="text-sm text-zinc-400 hidden sm:block">
                      {format(new Date(activity.occurs_at), "HH:mm")}h
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-zinc-500">
              Nenhuma atividade para esse dia
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
