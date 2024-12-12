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
    <div className="h-auto px-4 py-3 bg-zinc-900 rounded-xl flex flex-col md:flex-row md:h-16 md:items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 mb-4 md:mb-0 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-base md:text-lg placeholder-zinc-400 outline-none flex-1"
          disabled={isGuestInputOpen}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        className="flex items-center gap-2 outline-none text-left mb-4 md:mb-0 flex-1"
        disabled={isGuestInputOpen}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-base md:text-lg text-zinc-400 truncate">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 w-full max-w-md space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="range"
              className="p-2 m-2"
              selected={eventStartAndDates}
              onSelect={setEventStartAndDates}
            />
          </div>
        </div>
      )}

      <div className="hidden md:block w-px h-6 bg-zinc-800"></div>

      {isGuestInputOpen ? (
        <Button
          onClick={closedGuestInput}
          variant="secondary"
          className="text-sm md:text-base flex items-center gap-2"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button
          onClick={openGuestInput}
          variant="primary"
          className="text-sm md:text-base flex items-center gap-2"
        >
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </Button>
      )}
    </div>
  );
}
