const initialState = {
  data: [
   
  ],
};

export const All_Reducers = (state = initialState, actions) => {
  switch (actions.type) {
    case 'Add':
      return { ...state,data: actions.payload };

    case 'Delete':
      return { ...state };

    default:
      return { ...state };
  }
};

export default All_Reducers;
