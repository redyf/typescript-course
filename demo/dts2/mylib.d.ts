export type Status = "success" | "failure";

const Department = ["Electronics", "Home & Kitchen", "Toys & Games"];
export type Department = (typeof Department)[number];

export interface ApiResponseItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  department: Department;
}

export interface ApiResponse {
  status: Status;
  data: {
    items: ApiResponseItem[];
  };
}

export function apiResponse(): ApiResponse | undefined;
