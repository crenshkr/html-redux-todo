import { useState } from "react";
import "./App.css";
import Hamburger from "./assets/hamburger.svg";
import User from "./assets/user.svg";
import { useSelector, useDispatch } from "react-redux";

function App() {
  //const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");
  const todoList = useSelector((state) => state.todos);
  const users = useSelector((state) => state.users);
  // const username = useSelector((state) => state.users[0]);

  // const authenticatedUser = users.find(
  //   (user) => user.user === username && user.password === password
  // );

  const dispatch = useDispatch();

  const addTodo = (text) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const deleteTodo = (task) => {
    console.log(task);
    dispatch({ type: "DELETE_TODO", payload: task });
  };
  const handleLogin = () => {
    if (authenticatedUser) {
      console.log("success");
      dispatch({ type: "LOGIN_SUCCESS", payload: users.username });
    }
  };

  const signInScreen = (signIn) => {
    dispatch({ type: "SIGN_IN_SCREEN", payload: signIn });
  };

  return (
    <>
      <div className="w-screen h-screen bg-sky-500">
        <div>
          {/* Background */}
          {/* Header */}
          <div className="bg-indigo-800 py-2 flex justify-between">
            <div className="pl-2">
              <div className="text-center">
                <img className="w-10 h-10" src={Hamburger} alt="Hamburger" />
              </div>
            </div>
            <header>To Do</header>
            <div className="pr-2">
              <button onClick={signInScreen}>
                <img className="w-10 h-10" src={User} alt="User" />
              </button>
            </div>
          </div>
          {/* To-Do List */}
          <div className="p-2 lg:px-48 lg:pt-24">
            <div className="rounded bg-white">
              {/* Title */}
              <div className="p-2">
                <div className="text-4xl border-b-2 border-sky-900 text-sky-900">
                  <h1>To Do:</h1>
                </div>

                {/* List */}
                <div className="px-2 text-2xl text-sky-900">
                  {todoList.map((task, id) => (
                    <div key={id} className="pb-2">
                      {task}
                      <button onClick={() => deleteTodo(task)}>-</button>
                    </div>
                  ))}
                  <div>
                    <input
                      type="text"
                      placeholder="Add a new task"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        addTodo(newTodo);
                        setNewTodo("");
                        if (newTodo === "") return;
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
