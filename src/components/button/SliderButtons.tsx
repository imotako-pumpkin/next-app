import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

import { useThreeContext } from "@/contexts/ThreeContext";

export const SliderButtons: FC = () => {
  const { dispatch, state } = useThreeContext();
  const router = useRouter();

  const { pageNo } = state;
  return (
    <>
      {pageNo > 1 && (
        <div className="fixed top-1/3 left-12">
          <Button
            variant="outlined"
            sx={{ borderRadius: 10 }}
            onClick={() => {
              dispatch({ type: "DECREMENT_PAGE_NO" });
              router.push("/about");
            }}
          >
            ←
          </Button>
        </div>
      )}

      <div className="fixed top-1/3 right-12">
        <Button
          variant="outlined"
          sx={{ borderRadius: 10 }}
          onClick={() => {
            dispatch({ type: "INCREMENT_PAGE_NO" });
            router.push("/");
          }}
        >
          →
        </Button>
      </div>
    </>
  );
};
