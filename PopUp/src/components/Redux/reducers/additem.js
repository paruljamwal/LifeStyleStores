const addItem = [];

const addItems = (store = addItem, { type, payload }) => {
  switch (type) {
    case "ADDITEM":
      return [...store, payload];
      break;
    case "DELITEM":
      return store = store.filter((e) => {
        return e.id !== payload.id;
      });
      break;
      default:
          return store
          break;
  }
};

export default addItem
