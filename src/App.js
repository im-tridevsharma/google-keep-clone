import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./pages/Notes";
import Reminders from "./pages/Reminders";
import Archive from "./pages/Archive";
import Bin from "./pages/Bin";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App__content">
          <Sidebar />
          <section>
            <Switch>
              <Route path="/" exact component={Notes} />
              <Route path="/reminders" component={Reminders} />
              <Route path="/archive" component={Archive} />
              <Route path="/bin" component={Bin} />
            </Switch>
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
