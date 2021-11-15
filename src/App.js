import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import UpdateOrders from "./Pages/AdminPanel/ManageOrders/UpdateOrders/UpdateOrders";
import ArticleDetails from "./Pages/ArticleDetails/ArticleDetails";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/carDetails/:carId">
              <CarDetails />
            </PrivateRoute>
            <PrivateRoute path="/articleDetails/:articleId">
              <ArticleDetails />
            </PrivateRoute>
            <PrivateRoute path="/updateOrders/:id">
              <UpdateOrders />
            </PrivateRoute>
            <PrivateRoute path="/adminPanel">
              <AdminPanel />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
