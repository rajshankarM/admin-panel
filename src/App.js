import Sidebar from "./companents/sidebar/Sidebar";
import Topbar from "./companents/topbar/Topbar";
import "./app.css";
import Home from "./companents/pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserList from "./companents/pages/userList/UserList";
import User from "./companents/pages/user/User";
import NewUser from "./companents/pages/newUser/NewUser";
import ProductList from "./companents/pages/productList/ProductList";
import Product from "./companents/pages/product/Product";
import NewProduct from "./companents/pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        {/* <div className="others">other pages</div> */}
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/users">
          <UserList/>
          </Route>
          <Route path="/user/:userId">
          <User/>
          </Route>
          <Route path="/newUser">
          <NewUser/>
          </Route>
          <Route path="/products">
          <ProductList/>
          </Route>
          <Route path="/product/:productId">
          <Product/>
          </Route>
          <Route path="/newproduct">
          <NewProduct/>
          </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
