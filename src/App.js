import React, { createContext, useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Order from './Component/Order/Order';
import Admin from './Component/Admin/Admin';
import Deals from './Component/Deals/Deals';
import LogIn from './Component/LogIn/LogIn';
import Private from "./Component/Private/Private";
import Review from "./Component/Review/Review";
import ManageBook from "./Component/ManageBook/ManageBook";
import AddBook from "./Component/AddBook/AddBook";
import EditBook from "./Component/EditBook/EditBook";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Private path="/order">
            <Order></Order>
          </Private>
          <Private path="/admin">
            <Admin></Admin>
          </Private>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <ManageBook></ManageBook>
          </Route>
          <Route path="/addbook">
            <AddBook></AddBook>
          </Route>
          <Route path="/edit">
            <EditBook></EditBook>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App;
