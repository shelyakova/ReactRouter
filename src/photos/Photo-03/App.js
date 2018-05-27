import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);

const Home = props => {
  console.log(props);
  return <h1>Home</h1>;
};

const App = props => (
  <Router basename={props.path}>
    <div>
    <Links />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <img src="C:\Users\Даша\Desktop\Курсы\FrontEnd\DZ19-ReactRouter\src\photos\Photo-03\DSC_0468.JPG"></img>} />
    </div>
  </Router>
);

export default App;
