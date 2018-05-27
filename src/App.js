import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const photos = [
  { id: "Photo-01" },
  { id: "Photo-02" },
  { id: "Photo-03" },
];

photos.forEach(p => (p.Component = require(`./photos/${p.id}/App`).default));

const Links = () => (
  <ul className="photo-nav">
    {photos.map((p, i) => (
      <li key={p.id}>
        <Link to={`/photos/${p.id}`}>{p.id}</Link>
      </li>
    ))}
  </ul>
);

const Back = () => (
  <div style={{ marginBottom: 64 }}>
    <Link to="/">&larr;Back to photos</Link>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Links} />
          <Route path="/photos" component={Back} />
          {photos.map(({ id, Component }) => (
            <Route
              key={id}
              path={`/photos/${id}`}
              render={({ match }) => {
                return <Component {...match} />;
              }}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
