import { Button } from "@mui/material";
import { FC } from "react";

import { usePageSlider } from "@/hooks/usePageSlider";

export const SliderButtons: FC = () => {
  const { pageNo, setPageNo } = usePageSlider();
  return (
    <>
      {pageNo > 1 && (
        <div className="fixed top-1/3 left-12">
          <Button
            variant="outlined"
            sx={{ borderRadius: 10 }}
            onClick={() => {
              setPageNo(pageNo - 1);
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
            setPageNo(pageNo + 1);
          }}
        >
          →
        </Button>
      </div>
    </>
  );
};
