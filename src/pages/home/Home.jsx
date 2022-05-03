import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import Widget from "../../components/widget/Widget";
import Dwidget from "../../components/dwidget/Dwidget";
import Swidget from "../../components/swidget/Swidget";
import "./home.scss";
const Home = () => {
return(
    <div className="home">
        <Sidebar/>
  <div className="homeContainer">
  <Navbar/>
 <div className="widgets">
 <Widget />
<Dwidget   />
 <Swidget  />
 </div>
 <div className="charts">
     <Featured/>
     <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
 </div>
 
  </div>
    </div>
)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
}
export default Home;