import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import LifeCycle from "./pages/LifeCycle/LifeCycle";
import UseStateHook from "./pages/Hooks/UseStateHook";
import BaiTapChonXe from "./pages/Hooks/BaiTapChonXe";
import UseEffectHome from "./pages/Hooks/UseEffectHome";
import ReduxHookHome from "./pages/Hooks/ReduxHookHome";
import Details from "./pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/> 
      <Loading/>
        <Switch>
        <Route exact path="/home/" component={Home} />
        <Route exact path="/contact/" component={Contact} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/register/" component={Register} />
        <Route exac path="/lifecycle" render={(propsRoute)=>{
          //Tham so chua cac props cua the route
          return <div>
            <h3>Component lifecycle</h3>
            <LifeCycle {...propsRoute}/>
          </div>
        }}/>
        <Route exact path ="/usestatedemo"component={UseStateHook}/>
        <Route exact path ="/baitapchonxe"component={BaiTapChonXe}/>
        <Route exact path ="/useeffecthome"component={UseEffectHome}/>
        <Route exact path ="/reduxhook"component={ReduxHookHome}/>
        <Route exact path ="/detail/:id"component={Details}/>

        {/* Route mac dinh de duoi cung cua ung dung  */}
        <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
