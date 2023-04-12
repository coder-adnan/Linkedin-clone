import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import "./App.css";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      <div className="app">
        <Header />
        {!user ? (
          <Login />
        ) : (
          <>
            <div className="app__body">
              <Sidebar />
              <Feed />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
