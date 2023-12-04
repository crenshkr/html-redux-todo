import { createStore } from "redux";

const initialStore = {
  todos: ["drink water", "read", "sleep"],
  isAuthenticated: false,
  signInScreen: false,
  homeScreen: true,
  users: [
    { username: "Khalil", password: "L" },
    { username: "Randy", password: "G" },
  ],
  password: null,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state.todos);
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      // const thingToDelete = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };

    default:
      return state;
  }
};

export const store = createStore(
  rootReducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
