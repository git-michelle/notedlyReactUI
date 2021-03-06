import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "./home";
import Favorites from "./favorites";
import MyNotes from "./mynotes";
import NotePage from "./note";
import SignUp from "./signup";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NotePage} />
        <Route path="/signup" component={SignUp} />
      </Layout>
    </Router>
  );
};

export default Pages;
