import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import NewItem from "./components/NewItem";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex bg-reactBlue">
      <div className="items-center flex flex-col w-full pt-10">
        <Header />
        <Router>
          <Navigation />
          <Switch>
            <Route path="/new-item" component={NewItem} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
