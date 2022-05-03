import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./dlist.scss";
import Datatable from "../../components/ddatatable/Ddatatable";
const List = () => {
return(
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
        <Navbar/>
   <Datatable/>
    </div>
    </div>
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
export default List;