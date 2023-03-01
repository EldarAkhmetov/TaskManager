export function createPages(pages, pagesCount, currentPage) {
  const pagesLimit = 6;
  if(pagesCount > pagesLimit) {
    if(currentPage > pagesLimit / 2) {
      for (let i = currentPage - (pagesLimit / 2 - 1); i <= currentPage + (pagesLimit / 2); i++) {
        pages.push(i);
        if(i === pagesCount) break;
      }
    }
    else {
      for (let i = 1; i <= pagesLimit; i++) {
        pages.push(i);
        if(i === pagesCount) break;
      }
    }
  }  else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
}