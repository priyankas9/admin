import "./ssingle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";


const Ssingle = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          <Link to="/serviceproviders/Sedit" style={{color: "inherit", textDecoration: "none" }}>
            <div className="editButton">Edit</div>
            </Link>
            <Link to="/serviceproviders" style={{color: "inherit", textDecoration: "none" }}>
            <h1 className="title">Information</h1> </Link>
            <div className="item">
             
              <div className="details">
                <h1 className="itemTitle">Jane e</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          
           
          </div>
        </div>
        
   
    </div>
  );
};

export default Ssingle;