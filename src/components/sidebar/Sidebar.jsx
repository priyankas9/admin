import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonIcon from '@mui/icons-material/Person';
import CarRentalIcon from '@mui/icons-material/CarRental';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import "./sidebar.scss";
import { Link } from "react-router-dom";
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
    const {dispatch } = useContext(DarkModeContext)
    return (
        <div className="sidebar">
        <div className="top">
        <Link to="/" style={{  color: "inherit", textDecoration:"none"}}>
            <span className="logo">RHICLE</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{  color: "inherit", textDecoration:"none"}}>
                <li>
                    <DashboardRoundedIcon className='icon' />
                    <span>
                   
                        Dashboard
                      
                    </span>
                </li>
                </Link>
                <p className="title">Lists</p>
                <Link to="/users" style={{ color: "inherit", textDecoration:"none" }}>
                <li>
                <PersonIcon className='icon'/>
                    <span>
                   
                       Users
                     
                    </span>
                </li>
                </Link>
                <Link to="/serviceproviders" style={{ color: "inherit", textDecoration:"none" }}>
                <li>
               <CarRentalIcon className='icon'/>
                    <span>
                  
                        Service Providers
                       
                    </span>
                </li>
                </Link>
                <Link to="/drivers" style={{ color: "inherit", textDecoration:"none" }}>
                <li>
                
                <ChildCareOutlinedIcon  className='icon'/>
                    <span>
                   
                       Drivers
                   
                    </span>
                 
                </li>
                </Link>
                
                <p className="title">SERVICES</p>
                <Link to="/feedback" style={{ color: "inherit", textDecoration:"none" }}>
                <li>
               
                <ChatBubbleOutlineOutlinedIcon className='icon'/>
                    <span>
                       Feedback
                    </span>
                    
                </li>
                </Link>

                <Link to="/orders" style={{ color: "inherit", textDecoration:"none" }}>
                <li>
               
                <LocalShippingTwoToneIcon className='icon'/>
                    <span>
                      Orders
                    </span>
                    
                </li>
                </Link>
               
                <p className="title">User</p>
                
                <li>
                <ExitToAppIcon  className='icon'/>
                    <span>
                       Logout
                    </span>
                </li>
            </ul>
        </div>
        <div className="buttom">
            <div className="colorOption" 
            onClick = {()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" 
            onClick = {()=> dispatch({type:"DARK"})}></div>
           
        </div>

        </div>
    );
};
export default Sidebar;