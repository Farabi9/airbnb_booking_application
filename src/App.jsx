
import IndexPage from "./Pages/IndexPage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";
import Register from "./Pages/Register";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000';


function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage></IndexPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      <Route path="/register" element={<Register/>}/>
      </Route>
     
    </Routes>
   </Router>
  
  )
}

export default App
