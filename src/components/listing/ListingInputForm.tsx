"use client";

import { useState } from "react";
import {
  initialListingInputState,
  type ListingInputState,
} from "@/types/listing-input";
import { AnalyzeListingButton } from "./AnalyzeListingButton";
import { ListingPasteArea } from "./ListingPasteArea";
import { ManualVehicleFields } from "./ManualVehicleFields";
import { UploadPlaceholder } from "./UploadPlaceholder";

export function ListingInputForm() {
  const [state, setState] = useState<ListingInputState>(initialListingInputState);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function updateField<K extends keyof ListingInputState>(
    field: K,
    value: ListingInputState[K],
  ) {
    setState((prev) => ({ ...prev, [field]: value }));
    setStatusMessage(null);
  }

  function handleManualChange(
    field: keyof Pick<
      ListingInputState,
      "year" | "make" | "model" | "mileage" | "price" | "location"
    >,
    value: string,
  ) {
    updateField(field, value);
  }

  function handleAnalyze() {
    setStatusMessage(
      "Analysis engine coming soon. Your inputs were captured locally only—nothing was sent to a server.",
    );
  }

  const canAnalyze = state.listingText.trim().length > 0;

  return (
    <section
      id="analyze"
      className="scroll-mt-20 space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-950"
      aria-labelledby="analyze-heading"
    >
      <h2
        id="analyze-heading"
        className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
      >
        Analyze a listing
      </h2>

      <ListingPasteArea
        value={state.listingText}
        onChange={(value) => updateField("listingText", value)}
      />

      <UploadPlaceholder
        files={state.selectedFiles}
        onFilesChange={(files) => updateField("selectedFiles", files)}
      />

      <ManualVehicleFields
        values={{
          year: state.year,
          make: state.make,
          model: state.model,
          mileage: state.mileage,
          price: state.price,
          location: state.location,
        }}
        onChange={handleManualChange}
      />

      <div className="flex flex-col gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800">
        {!canAnalyze && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Paste listing text above to enable analysis.
          </p>
        )}
        <AnalyzeListingButton disabled={!canAnalyze} onClick={handleAnalyze} />
        {statusMessage && (
          <div
            role="status"
            className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-100"
          >
            {statusMessage}
          </div>
        )}
      </div>
    </section>
  );
}
