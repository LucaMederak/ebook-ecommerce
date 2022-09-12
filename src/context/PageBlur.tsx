import { IChildrenProps } from "@/interfaces/children.interfaces";
import React, { createContext, useContext, FC, useState, useMemo } from "react";

//types
type PageBlur = boolean;

interface IPageBlur {
  pageBlur: PageBlur;
  tooglePageBlur: () => void;
  showPageBlur: () => void;
  deletePageBlur: () => void;
}

const PageBlurContext = createContext<IPageBlur | null>(null);

export const usePageBlur = () => {
  const pageBlur = useContext(PageBlurContext);
  if (!pageBlur) {
    throw new Error("PageBlur is not available");
  }
  return pageBlur;
};

export const PageBlurProvider = ({ children }: IChildrenProps) => {
  const [blur, setBlur] = useState<PageBlur>(false);

  const contextValue = useMemo(
    () => ({
      pageBlur: blur,
      tooglePageBlur: () => setBlur(!blur),
      showPageBlur: () => setBlur(true),
      deletePageBlur: () => setBlur(false),
    }),
    [blur, setBlur]
  );

  return (
    <PageBlurContext.Provider value={contextValue}>
      {children}
    </PageBlurContext.Provider>
  );
};
