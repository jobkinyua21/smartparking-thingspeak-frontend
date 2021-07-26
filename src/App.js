import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import AboutPage from "./pages/AboutPage";
import Places from "./pages/Places";
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/parking-spaces" component={HomePage} />
        <Route path="/about-page" component={AboutPage} />
        <Route path="/places" component={Places} />
        <Route path="/form" component={BookingForm} />
      </Switch>
    </Router>
  );
}

export default App;
