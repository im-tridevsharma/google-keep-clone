import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./pages/Notes";
import Reminders from "./pages/Reminders";
import Archive from "./pages/Archive";
import Bin from "./pages/Bin";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleCollapsed = (value) => {
    setSidebarCollapsed(Boolean(value));
  };
  return (
    <div className="App">
      <Router>
        <Header onToggle={handleCollapsed} state={sidebarCollapsed} />
        <main className="App__content">
          <Sidebar collapse={sidebarCollapsed} />
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
