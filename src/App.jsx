
import IndexPage from "./Pages/IndexPage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Layout";


function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<IndexPage></IndexPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>}/>
      </Route>
     
    </Routes>
   </Router>
  
  )
}

export default App
