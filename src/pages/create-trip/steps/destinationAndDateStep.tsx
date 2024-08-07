import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/style.css";
import { Button } from "../../../components/Button";

interface DestintionAdnDateStepProps {
  isGuestInputOpen: boolean;
  closedGuestInput: () => void;
  openGuestInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndDates: (dates: DateRange | undefined) => void;
  eventStartAndDates: DateRange | undefined;
}

export function DestinationAndDateStep({
  closedGuestInput,
  openGuestInput,
  isGuestInputOpen,
  setDestination,
  setEventStartAndDates,
  eventStartAndDates,
}: DestintionAdnDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    return setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false);
  }

  const displayedDate =
    eventStartAndDates && eventStartAndDates.from && eventStartAndDates.to
      ? format(eventStartAndDates.from, "d ' de ' LLL")
          .concat(" até ")
          .concat(format(eventStartAndDates.to, "d ' de ' LLL"))
      : null;

  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          disabled={isGuestInputOpen}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>
      <button
        onClick={openDatePicker}
        className="flex items-center gap-2 outline-none text-left flex-1"
        disabled={isGuestInputOpen}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || "Quando?"}
        </span>
      </button>
      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className=" space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              selected={eventStartAndDates}
              onSelect={setEventStartAndDates}
            />
          </div>
        </div>
      )}
      <div className="w-px h-6 bg-zinc-800"></div>
      {isGuestInputOpen ? (
        <Button onClick={closedGuestInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput} variant="primary">
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  );
}
