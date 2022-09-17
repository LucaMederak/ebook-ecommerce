import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

//form
import { useForm, useFormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//component
import Spinner from "@/components/loading/spinner/Spinner";

//styles
import * as Styled from "./DiscountCodeForm.styles";

//icons
import { FaChevronDown } from "react-icons/fa";

//store
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, removeCartItem, addDiscountCode } from "@/store/cart";

//interfaces
import { IDiscountCodeResponse } from "@/interfaces/discountCode/discountCodeResponse";

interface IDiscountAlert {
  display: boolean;
  type: "success" | "error" | "";
  msg: string;
}

const discountCodeSchema = yup.object().shape({
  discountCodeName: yup.string().required("To pole jest wymagane"),
});

const defaultValues = discountCodeSchema.cast({});
type IDiscountCodeValues = typeof defaultValues;

const DiscountCodeForm = () => {
  const dispatch = useDispatch();

  const { totalPrice, items, discountCode } = useSelector(
    (state: RootState) => state.cart
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors, isSubmitting, isSubmitted, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues,
    shouldUnregister: false,
    resolver: yupResolver(discountCodeSchema),
  });

  const [discountOpen, setDiscountOpen] = useState(false);

  const [discountAlert, setDiscountAlert] = useState<IDiscountAlert>({
    display: false,
    type: "", //success, error
    msg: "",
  });

  const onDiscountSubmit = async (data: IDiscountCodeValues) => {
    const discountData = {
      ...data,
      productsId: items.map(({ id }) => id),
    };

    console.log({ discountData });

    const productDiscountCodes = items.some((item) => item.discountCode);

    if (discountCode || productDiscountCodes) {
      reset();
      return setDiscountAlert({
        display: true,
        type: "error",
        msg: "Wprowadzono już kod rabatowy",
      });
    }

    try {
      const newDiscountCode: AxiosResponse<IDiscountCodeResponse> =
        await axios.post(`/api/discountCode`, discountData);

      if (!newDiscountCode.data.valid) {
        return setDiscountAlert({
          display: true,
          type: "error",
          msg: "Wprowadzono nieprawidłowy kod",
        });
      }

      console.log("uwzględniono zniżkę");
      dispatch(addDiscountCode(newDiscountCode.data));

      console.log(newDiscountCode);
      reset();

      return setDiscountAlert({
        display: true,
        type: "success",
        msg: "Uwzględniono zniżkę",
      });
    } catch (e) {
      console.log(e);
      setDiscountAlert({
        display: true,
        type: "error",
        msg: "Wprowadzono nieprawidłowy kod",
      });
    }
  };

  useEffect(() => {
    if (discountAlert.display) {
      const timer = setTimeout(
        () => setDiscountAlert({ display: false, type: "", msg: "" }),
        3000
      );
      return () => {
        clearTimeout(timer);
      };
    }
  }, [discountAlert.display]);

  return (
    <>
      {discountAlert.display && (
        <Styled.DiscountAlertWrapper type={discountAlert.type}>
          <p>{discountAlert.msg}</p>
        </Styled.DiscountAlertWrapper>
      )}
      <Styled.DiscountWrapper>
        <Styled.DiscountOpenButton
          onClick={() => setDiscountOpen(!discountOpen)}
          active={discountOpen}
        >
          <h3>Zastosuj kod rabatowy</h3>
          <span>
            <FaChevronDown />
          </span>
        </Styled.DiscountOpenButton>

        {discountOpen && (
          <Styled.DiscountContentForm
            autoComplete="off"
            onSubmit={handleSubmit(onDiscountSubmit)}
          >
            <>
              <input
                placeholder="Kod rabatowy"
                {...register("discountCodeName" as never)}
              ></input>
              {errors.username?.message}
              <button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? <Spinner /> : "Zastosuj kod"}
              </button>
            </>
          </Styled.DiscountContentForm>
        )}
      </Styled.DiscountWrapper>

      {discountCode && (
        <Styled.DiscountCodeSaleWrapper>
          <p>kod rabatowy: {discountCode.name}</p>
          <p>- {discountCode.procent}%</p>
        </Styled.DiscountCodeSaleWrapper>
      )}
    </>
  );
};

export default DiscountCodeForm;
