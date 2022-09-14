export const getNextPage = (() => {
  let page = 1;
  return () => {
    page += 1;
    return page;
  };
})();
