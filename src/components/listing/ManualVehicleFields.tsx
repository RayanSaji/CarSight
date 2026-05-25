import type { ListingInputState } from "@/types/listing-input";

type ManualVehicleFieldsProps = {
  values: Pick<
    ListingInputState,
    "year" | "make" | "model" | "mileage" | "price" | "location"
  >;
  onChange: (field: keyof ManualVehicleFieldsProps["values"], value: string) => void;
};

const fields: {
  key: keyof ManualVehicleFieldsProps["values"];
  label: string;
  placeholder: string;
  type: string;
  inputMode?: "numeric" | "text";
}[] = [
  { key: "year", label: "Year", placeholder: "2018", type: "text", inputMode: "numeric" },
  { key: "make", label: "Make", placeholder: "Toyota", type: "text" },
  { key: "model", label: "Model", placeholder: "Camry", type: "text" },
  { key: "mileage", label: "Mileage", placeholder: "87000", type: "text", inputMode: "numeric" },
  { key: "price", label: "Price", placeholder: "12500", type: "text", inputMode: "numeric" },
  { key: "location", label: "Location / ZIP", placeholder: "90210", type: "text" },
];

export function ManualVehicleFields({ values, onChange }: ManualVehicleFieldsProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Optional details
      </legend>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Fill in what you know if it&apos;s not in the pasted listing.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.key} className="space-y-1.5">
            <label
              htmlFor={field.key}
              className="block text-sm text-zinc-700 dark:text-zinc-300"
            >
              {field.label}{" "}
              <span className="text-zinc-400 dark:text-zinc-500">(optional)</span>
            </label>
            <input
              id={field.key}
              name={field.key}
              type={field.type}
              inputMode={field.inputMode}
              value={values[field.key]}
              onChange={(e) => onChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}
