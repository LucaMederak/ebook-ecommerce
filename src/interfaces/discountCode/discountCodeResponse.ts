export interface IDiscountCodeResponse {
  name: string;
  valid: boolean;
  procent: number;
  allProducts: boolean;
  products?: {
    sys: {
      id: string;
    };
  }[];
}
