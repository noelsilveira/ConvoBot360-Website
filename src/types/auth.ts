export type EStoreLandingOTPParamsType = {
  // Previous version
  c: string | null;
  b: string | null;
  i: string | null;
};

export type AddSessionPayloadType = {
  customer_no: string | null;
  merchant_no: string | null;
  branch_id: string | null;
  logo_url: string | null;
  access_token: string | null;
  expiry: number;
  order_id?: string;
};

export type AddSessionPayloadResponseType = {
  status_code: number;
  detail: {
    session_id: string;
    metadata: AddSessionPayloadType;
    created_by: string;
    created_at: string;
  };
  headers: null | string;
};
