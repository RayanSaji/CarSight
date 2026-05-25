export type ListingInputState = {
  listingText: string;
  year: string;
  make: string;
  model: string;
  mileage: string;
  price: string;
  location: string;
  selectedFiles: File[];
};

export const initialListingInputState: ListingInputState = {
  listingText: "",
  year: "",
  make: "",
  model: "",
  mileage: "",
  price: "",
  location: "",
  selectedFiles: [],
};
