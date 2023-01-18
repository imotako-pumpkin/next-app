import { useState } from "react"

export const usePageSlider = () => {
  const [pageNo, setPageNo] = useState(1)

  return { pageNo, setPageNo }
}