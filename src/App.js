import "./App.css";
import ButtonAppBar from "./components/reusable/Appbar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tags from "./pages/Tags";
import Material from "./pages/Material";
import Color from "./pages/Color";
import Featured from "./pages/Featured";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="main">
            <div className="header">
              <h3>MYCOOLSHOP.COM</h3>
            </div>
            <ButtonAppBar />
            <Route exact path="/" component={Tags}></Route>
            <Route exact path="/allMaterials" component={Tags}></Route>
            <Route exact path="/allColors" component={Tags}></Route>
            <Route exact path="/cotton" component={Material}></Route>
            <Route exact path="/leather" component={Material}></Route>
            <Route exact path="/lycra" component={Material}></Route>
            <Route exact path="/plastic" component={Material}></Route>
            <Route exact path="/polyester" component={Material}></Route>
            <Route exact path="/black" component={Color}></Route>
            <Route exact path="/yellow" component={Color}></Route>
            <Route exact path="/red" component={Color}></Route>
            <Route exact path="/green" component={Color}></Route>
            <Route exact path="/blue" component={Color}></Route>
            <Route exact path="/featured" component={Featured}></Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
