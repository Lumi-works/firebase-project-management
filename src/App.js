import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// styles
import "./App.css";

//pages and components
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Projects from "./pages/projects/Projects";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import OnlineUsers from "./components/onlineUsers/OnlineUsers";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>

              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>

              <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Projects />}
              </Route>

              <Route path="/login">
                {!user && <Login />}
                {user && <Redirect to="/" />}
              </Route>

              <Route path="/signup">
                {!user && <Signup />}
                {user && <Redirect to="/" />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

/*
 * pages

 - dashboard (homepage)
 - login
 - sign up
 - create project
 - project (project details)

*/
