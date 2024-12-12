import axios from "axios";
import { Link2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Links {
  id: string;
  title: string;
  url: string;
}

export function ImportantLinks() {
  const { tripId } = useParams();
  const [links, setLinks] = useState<Links[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        {links.length === 0 ? (
          <p className="text-zinc-500 text-sm">Adicione novos links</p>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-5">
              {links.map((link) => {
                return (
                  <div
                    key={link.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1">
                      <span className="block font-medium text-zinc-100">
                        {link.title}
                      </span>
                      <a
                        href={link.url}
                        target="_blank"
                        className="block text-sm text-zinc-400 truncate hover:text-zinc-200"
                      >
                        {link.url}
                      </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
