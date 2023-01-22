import { Button, Container } from "@mui/material";
import { FC, ReactNode } from "react";

type HeadLayoutProps = { children: ReactNode };

export const HeadLayout: FC<HeadLayoutProps> = (props) => {
  return (
    <>
      <Container
        sx={{ left: "50%", maxWidth: "40%", position: "fixed", top: "25%" }}
      >
        {props.children}
        <Button variant="outlined" sx={{ marginTop: "10%" }}>
          Outlined
        </Button>
      </Container>
    </>
  );
};
