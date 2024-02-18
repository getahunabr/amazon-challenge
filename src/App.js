import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Type } from "./Utility/action.type";
import Routing from "./Router";
import { DataContext } from "./DataProvider/DataProvider";
import { auth } from "./FireBase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      }
    });
  }, []);

  return <Routing />;
}

export default App;
