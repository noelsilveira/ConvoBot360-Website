export type MerchantDetailsType = {
  merchant_id: string;
  owner_details: string | null;
  business_details: BusinessDetails;
  brands: string | string[] | null;
  branches: Branch[];
};

export type Branch = {
  branch_name: string[];
  address: Address[];
  opening_hours: Array<OpeningHour[]>;
};

export type Address = {
  po_box_no: string | null;
  flat_no: number;
  building_no: number;
  road_no: number;
  block_no: number;
  floor_no: string | null;
  building_name: string | null;
  area_name: string;
  landmark: string | null;
  coordinates: Coordinates;
  pincode: string | null;
  city: string | null;
  state: string | null;
  country: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type OpeningHour = {
  weekday: number;
  time_from: string;
  time_to: string;
};

export type BusinessDetails = {
  official_business_name: string;
  contact_number: number[];
};
