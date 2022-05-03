import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List"; 
import Feedback from "./pages/feedback/Feedback";
import Order from "./pages/order/Order";
import Dlist from "./pages/dlist/Dlist";
import Slist from "./pages/slist/Slist";
import Single from "./pages/single/Single";
import Dsingle from "./pages/dsingle/Dsingle";
import Ssingle from "./pages/ssingle/Ssingle";
import New from "./pages/new/New";
import Snew from "./pages/snew/Snew";
import Dnew from "./pages/dnew/Dnew";
import Edit from "./pages/edit/Edit";
import Dedit from "./pages/dedit/Dedit";
import Sedit from "./pages/sedit/Sedit";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { driverInputs, serviceInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";





function App() {

  const {darkMode } = useContext(DarkModeContext)
 
  return (
    <div className={ darkMode ? "app dark ":  "app "} >
       <BrowserRouter>
    <Routes>
     <Route path="/"> 
      <Route index element={<Home />} />
      <Route path="login" element={<Login/>} />
      <Route path="users"> 
     <Route index element={<List />} />
     <Route path=":userId" element={<Single/>} />
     <Route path="new" element={<New inputs = {userInputs} title="Add New User"/>} />
     <Route path="edit" element={<Edit inputs = {userInputs}  title=" Update User"/>} />
     
     </Route>
       <Route path="drivers"> 
       <Route index element={<Dlist/>} />
        <Route path=":driverId" element={<Dsingle/>} />
        <Route path="dnew" element={<Dnew inputs = {driverInputs}  title="Add New Drivers"/>} />
        <Route path="dedit" element={<Dedit inputs = {driverInputs}  title=" Update  Driver"/>} />
        </Route>
        <Route path="serviceproviders"> 
       <Route index element={<Slist/>} />
        <Route path=":serviceId" element={<Ssingle/>} />
        <Route path="snew" element={<Snew inputs = {serviceInputs}  title="Add New Service Provider"/>} />
        <Route path="sedit" element={<Sedit inputs = {serviceInputs}  title=" Update  Service Provider"/>} />
        
        
        </Route>
        
      </Route>

      <Route path="orders" element={<Order/> } > 
     </Route>
     <Route path="feedback" element={<Feedback /> } > 
     </Route>
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
