import "./widget.scss"
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CarRentalIcon from '@mui/icons-material/CarRental';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import { Link } from "react-router-dom";

const Widget = () => {
    
            return (
             <div className="widget">
            <div className="left">
                <span className="title">Users</span>
                <span className="link">
                <Link to="/users" style={{ color: "inherit", textDecoration:"none" }}>
                   See all user
                   </Link>
                    </span>
            </div>
            <div className="right">
            <PersonRoundedIcon/>
            </div>
            </div>
    )
}

export default Widget;