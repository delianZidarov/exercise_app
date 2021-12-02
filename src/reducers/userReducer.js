const initialState = {
  loggedIn: false,
  name: "Bob",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("got here", {
        ...state,
        loggedIn: true,
        name: action.payload,
      });
      return { ...state, loggedIn: true, name: action.payload };
    default:
      return state;
  }
};
export default userReducer;
