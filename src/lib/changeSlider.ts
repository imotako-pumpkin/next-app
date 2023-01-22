export const changeSlider = (before: string, after: string) => {
  return ""
}

export const nextSlider = (before: string) => {
  let nextPageName = ""
  const beforePage = pages.find((x) => before === x.pageName)

  if (beforePage) {
    const nextPageNo = beforePage.pageNo + 1

    if (nextPageNo <= pages.length) {
      const nextPage = pages.find((x) => nextPageNo === x.pageNo)
      if (nextPage) {
        nextPageName = nextPage.pageName
      }
    } else {
      nextPageName = pages[0].pageName
    }
  }
  return nextPageName
}

const pages = [
  { pageName: "about", pageNo: 1 },
  { pageName: "infomation", pageNo: 2 }
]