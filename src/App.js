import React, { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import { indexRoutes } from "./Router";

const App = () => {
  const dispatch = useDispatch();
  const element = useRoutes(indexRoutes);
  const navigate = useNavigate();
  window.navigate = navigate;
  const location = useLocation();
  const { search, pathname } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  useEffect(() => {
    // dispatch(getCurrentUserRequest());
  }, [dispatch]);
  return <div className="App">{element}</div>;
};

export default App;
