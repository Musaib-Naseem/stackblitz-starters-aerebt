export const addData = (listData) => {
  return {
    type: 'Add',
    payload: listData,
  };
};

export const deleteData = (listData2) => {
  return {
    type: 'Delete',
    payload: listData2,
  };
};
