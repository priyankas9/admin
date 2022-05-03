import "./dwidget.scss"

import CarRentalIcon from '@mui/icons-material/CarRental';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import { Link } from "react-router-dom";

const Dwidget = () => {
    
            return (
             <div className="widget">
            <div className="left">
                <span className="title">Driver</span>
                <span className="link">
                <Link to="/drivers" style={{ color: "inherit", textDecoration:"none" }}>
                   See all drivers
                   </Link>
                    </span>
            </div>
            <div className="right">
            <CarRentalIcon/>
            </div>
            </div>
    )
}

export default Dwidget;