export const filterBySale = (items, isFilterEnabled) => {
  return items.map((el) => {
    if (!el.discont_price) {
      el.showBySale = false;
    }
    return el;
  });
};

//=====
export const filterBySelectId = (items) => {
  const newState = [...items];
  return newState.sort((a, b) => a.id - b.id);
};

export const filterBySelectPrice = (items) => {
  const newState = [...items];
  return newState.sort((a, b) => a.current_price - b.current_price);
};

export const filterBySelectDescendingPrice = (items) => {
  const newState = [...items];
  return newState.sort((a, b) => b.current_price - a.current_price);
};

export const filterBySelectName = (items) => {
  const newState = [...items];
  return newState.sort((a, b) => a.title.localeCompare(b.title));
};

export const filterBySelectBackName = (items) => {
  const newState = [...items];
  return newState.sort((a, b) => b.title.localeCompare(a.title));
};

//====

export const filterRangerPrice = (items, min, max) => {
  return items.map((el) => ({
    ...el,
    showByPrices: el.current_price >= min && el.current_price <= max,
  }));
};
