import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { Route } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Header />
        <Content />
      </Route>
      <Route exact path="/join" component={SignUp} />
    </div>
  );
}

export default App;
