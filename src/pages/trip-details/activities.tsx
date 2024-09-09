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
      .get(`https://plannernodeapi.onrender.com/trips/${tripId}/activities`)
      .then((response) => setActivities(response.data.activities));
      toast.success("Veja suas atividades")
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map((category) => {
        return (
          <div key={category.date} className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
              <span className="text-xl text-zinc-300">
                {format(category.date, "d")}
              </span>
              <span className="text-xs text-zinc-500">
                {format(category.date, "EEEE", { locale: ptBR })}
              </span>
            </div>
            {category.activities.length > 0 ? (
              <div>
                <div className="space-y-2.5">
                  {category.activities.map((activity) => {
                    const activityTime = new Date(activity.occurs_at).getTime();
                    const now = new Date().getTime();
                    const Icon =
                      now > activityTime ? CircleCheck : CircleDashed;

                    return (
                      <div
                        key={activity.id}
                        className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3"
                      >
                        <Icon className="size-5 text-lime-300" />
                        <span className="text-zinc-100">{activity.title}</span>
                        <span className="text-sm text-zinc-400 ml-auto">
                          {format(new Date(activity.occurs_at), "HH:mm")}h
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade para esse dia
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
