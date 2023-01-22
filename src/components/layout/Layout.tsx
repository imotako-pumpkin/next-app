import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

import { SliderButtons } from "@/components/button/SliderButtons";
import { Header } from "@/components/layout/Header";
import { HeadLayout } from "@/components/layout/HeadLayout";

type LayoutProps = { children: ReactNode };

export const Layout: FC<LayoutProps> = (props) => {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <>
      {/* header */}
      <Header />
      <SliderButtons />
      <HeadLayout>{props.children}</HeadLayout>

      {/* footer */}
    </>
  );
};
