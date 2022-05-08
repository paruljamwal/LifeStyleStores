const addItem = [];
// const init={addItem : []}
const addItems = (store = addItem, { type, payload }) => {
  switch (type) {
    case "ADDITEM":
    //   return {...store,addItem: payload};
    return [...store,payload]
   
    case "DELITEM":
      return (store = store.filter((e) => {
        return e.id !== payload.id;
      }));
 
    default:
      return store;
   
  }
};

export default addItem;
