const getItem = () => {
  const getItemsa = localStorage.getItem("items");
  if (getItemsa) {
    const getReturn = JSON.parse(getItemsa);
    return getReturn;
  }
  return [];
};

const setItems = (id) => {
  const storeItems = getItem();
//   if (storeItems.includes(id)) {
//     alert("This id Alrodey Stors");
//   } else {
    storeItems.push(id);
    const data = JSON.stringify(storeItems);
    localStorage.setItem("items", data);
//   }
};

export {setItems, getItem}
