import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

import { useThreeContext } from "@/contexts/ThreeContext";

const route = ["about", "information"];

export const SliderButtons: FC = () => {
  const { dispatch, state } = useThreeContext();
  const router = useRouter();

  const { sliderNo } = state;
  return (
    <>
      {sliderNo > 1 && (
        <div className="fixed top-1/3 left-12">
          <Button
            variant="outlined"
            sx={{ borderRadius: 10 }}
            onClick={() => {
              dispatch({ type: "DECREMENT_PAGE_NO" });
              router.push(`/${route[sliderNo]}`);
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
            router.push(`/${route[sliderNo + 1]}`);
          }}
        >
          →
        </Button>
      </div>
    </>
  );
};
