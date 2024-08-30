import { Link2, Tag, X } from "lucide-react";
import { Button } from "../../components/Button";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

interface CreateLinkModalProps {
  closeLinkModal: () => void;
}

export function CreateLinkModal({ closeLinkModal }: CreateLinkModalProps) {
  const { tripId } = useParams();
  async function createLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const title = data.get("title")?.toString();
    const url = data.get("url_link")?.toString();
    console.log({ title, url });

    axios.post(`https://plannernodeapi.onrender.com/trips/${tripId}/links`, {
      title,
      url,
    });

    closeLinkModal();
    setTimeout(() => {
      toast.success("Link criado com sucesso");
    }, 3000);
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className=" space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button type="button" onClick={closeLinkModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </div>
        <form onSubmit={createLink} className="space-y-3">
          <div className="h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="name"
              name="title"
              placeholder="Título do link"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 flex-1 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Link2 className="size-5 text-zinc-400" />
              <input
                type="url"
                name="url_link"
                placeholder="URL"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
              />
            </div>
          </div>
          <Button variant="primary" size="full">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  );
}
