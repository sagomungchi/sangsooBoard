import React, { useState } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {signIn} from "./function/auth";
import AuthRoute from "./function/AuthRoute";
import './app.css'
import Home from "./component/Home";
import Profile from "./component/Profile";
import LoginForm from "./component/LoginForm";
import LogoutButton from "./function/LogoutButton";
function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ id, password }) => setUser(signIn({ id, password }));
  const logout = () => setUser(null);
  return (
    <Router>
      <header><Link to="/"><button>Simple Board <span>by LSS</span></button></Link></header>
      <header style={{textAlign:'right',
      marginTop:"-30px"
      }}>

        <Link to="/profile">
          <button>Profile</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/login"
            render={props => (
              <LoginForm
                authenticated={authenticated}
                login={login}
                {...props}
              />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
