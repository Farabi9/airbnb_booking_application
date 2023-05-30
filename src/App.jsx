
import IndexPage from "./Pages/IndexPage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import Register from "./Pages/Register";
import Account from "./Pages/Account";
import axios from "axios";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;


function App() {
  
  return (
    <UserContextProvider>
    <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage></IndexPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/account/:subpage?" element={<Account/>}/>
      <Route path="/account/:subpage/:action" element={<Account/>}/>
      </Route>
    </Routes>
   </Router>
   </UserContextProvider>
  )
}

export default App;
