import { IDiscountCodeResponse } from "@/interfaces/discountCode/discountCodeResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartProduct {
  id: string;
  title: string;
  imageUrl: string;
  regularPrice: number;
  salePrice?: number;
  price: number;
  quantity: number;
  totalPrice: number;
  discountCode?: {
    name: string;
    procent: number;
    price: number;
  };
}

export interface ICartState {
  discountCode?: {
    name: string;
    procent: number;
    price: number;
  };
  items: ICartProduct[];
  totalPrice: number;
  regularTotalPrice: number;
}

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
  regularTotalPrice: 0,
};

const formatPrice = (price: number) => {
  const formatPrice = Math.round((price + Number.EPSILON) * 100) / 100;

  return formatPrice;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInitialCartState: (state, action: PayloadAction<ICartProduct[]>) => {
      //action payload = [..cartItems] from local storage ns-cart
      state.items = action.payload;
      state.totalPrice = state.items.reduce((acc, item) => acc + item.price, 0);
      state.regularTotalPrice = state.totalPrice;
    },
    removeCartState: (state) => {
      //action payload = [..cartItems] from local storage ns-cart
      state.items = [];
      state.totalPrice = 0;
      state.regularTotalPrice = 0;
      localStorage.removeItem("shop-cart");
    },
    addCartItem: (
      state,
      action: PayloadAction<Omit<ICartProduct, "totalPrice" | "quantity">>
    ) => {
      // action.payload = {id: sdasdq2, name: "Jadłospis 2000 kcal", price: 20};

      const productInCart = state.items.find(
        (product) => product.id === action.payload.id
      );

      if (!productInCart) {
        const newProduct: ICartProduct = {
          ...action.payload,
          quantity: 1,
          totalPrice: formatPrice(action.payload.price),
        };

        state.items = [...state.items, newProduct];
      } else {
        const newProduct: ICartProduct = {
          ...action.payload,
          quantity: productInCart.quantity + 1,
          totalPrice: formatPrice(
            productInCart.totalPrice + action.payload.price
          ),
        };
        state.items = [
          ...state.items.filter((item) => item.id !== newProduct.id),
          newProduct,
        ];
      }

      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );

      state.regularTotalPrice = state.totalPrice;

      localStorage.setItem(
        "shop-cart",
        JSON.stringify({ items: state.items, totalPrice: state.totalPrice })
      );
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      // action.payload = "dsdsadwq" = product.id
      state.items = [
        ...state.items.filter((item) => item.id !== action.payload),
      ];

      state.totalPrice = state.items.reduce((acc, item) => acc + item.price, 0);
      state.regularTotalPrice = state.totalPrice;
      state.discountCode = undefined;

      localStorage.setItem(
        "shop-cart",
        JSON.stringify({ items: state.items, totalPrice: state.totalPrice })
      );
    },
    addDiscountCode: (
      state,
      action: PayloadAction<Omit<IDiscountCodeResponse, "valid">>
    ) => {
      const { name, allProducts, procent, products } = action.payload;

      if (allProducts) {
        const totalPrice = state.totalPrice;
        const discountCodePrice = (procent * totalPrice) / 100;
        console.log({ totalPriceDiscount: discountCodePrice });
        state.discountCode = {
          name,
          procent,
          price: formatPrice(discountCodePrice),
        };

        state.totalPrice = formatPrice(totalPrice - discountCodePrice);
      } else {
        products?.map(({ sys }) => {
          const productItem = state.items.find((item) => item.id === sys.id);
          if (!productItem) return;

          const discountProductPrice = (procent * productItem.totalPrice) / 100;

          const newProduct = {
            ...productItem,
            discountCode: {
              name,
              procent,
              price: formatPrice(discountProductPrice),
            },
            totalPrice: formatPrice(
              productItem.totalPrice - discountProductPrice
            ),
          };

          state.items = [
            ...state.items.filter((item) => item.id !== productItem.id),
            newProduct,
          ];

          //poprawa ilości
          state.totalPrice = state.items.reduce(
            (acc, item) => acc + item.totalPrice,
            0
          );

          state.regularTotalPrice = state.totalPrice;
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addInitialCartState,
  removeCartState,
  addCartItem,
  removeCartItem,
  addDiscountCode,
} = cartSlice.actions;

export default cartSlice.reducer;
