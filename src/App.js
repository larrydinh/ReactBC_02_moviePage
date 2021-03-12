import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path="/home/" component={Home} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/register/" component={Register} />
        {/* Route mac dinh de duoi cung cua ung dung  */}
        <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
