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
import HookUseCallBack from "./pages/Hooks/HookUseCallBack";
import HookUseMemo from "./pages/Hooks/HookUseMemo";
import UseRef from "./pages/Hooks/UseRef";
import ParentComponent from "./pages/HOC/ParentComponent";
import { HomeTemplate } from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header/>  */}
        <Loading />
        <Switch>
          <HomeTemplate exact path="/home" Component={Home} />
          {/* <Route exact path="/home/" component={Home} /> */}
          <HomeTemplate exact path="/contact/" Component={Contact} />
         
         
          <AdminTemplate exact path="/login/" Component={Login} />
          <HomeTemplate exact path="/register/" Component={Register} />
          {/* <Route
            exac
            path="/lifecycle"
            render={(propsRoute) => {
              //Tham so chua cac props cua the route
              return (
                <div>
                  <h3>Component lifecycle</h3>
                  <LifeCycle {...propsRoute} />
                </div>
              );
            }}
          /> */}
          <HomeTemplate exact path="/usestatedemo" Component={UseStateHook} />
          <HomeTemplate exact path="/baitapchonxe" Component={BaiTapChonXe} />
          <HomeTemplate exact path="/useeffecthome" Component={UseEffectHome} />
          <HomeTemplate exact path="/reduxhook" Component={ReduxHookHome} />
          <HomeTemplate exact path="/usecallback" Component={HookUseCallBack} />
          <HomeTemplate exact path="/usememo" Component={HookUseMemo} />
          <HomeTemplate exact path="/useref" Component={UseRef} />
          <HomeTemplate exact path="/parentcomponent" Component={ParentComponent} />

          <HomeTemplate exact path="/detail/:id" Component={Details} />

          {/* Route mac dinh de duoi cung cua ung dung  */}
          <HomeTemplate exact path="/" Component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
