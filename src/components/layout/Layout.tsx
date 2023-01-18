import { FC, ReactNode } from "react";

import { SliderButtons } from "@/components/button/SliderButtons";
import { Header } from "@/components/layout/Header";

type LayoutProps = { children: ReactNode };

export const Layout: FC<LayoutProps> = () => {
  return (
    <>
      {/* header */}
      <Header />
      <SliderButtons />

      {/* footer */}
    </>
  );
};
