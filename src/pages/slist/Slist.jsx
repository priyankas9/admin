import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./slist.scss";
import Sdatatable from "../../components/sdatatable/Sdatatable";
const Slist = () => {
return(
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
        <Navbar/>
   <Sdatatable/>
    </div>
    </div>
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
export default Slist;