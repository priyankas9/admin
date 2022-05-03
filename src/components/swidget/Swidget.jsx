import "./swidget.scss"


import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import { Link } from "react-router-dom";

const Swidget = () => {
    
            return (
             <div className="widget">
            <div className="left">
                <span className="title">Service Providers</span>
                <span className="link">
                <Link to="/serviceproviders" style={{ color: "inherit", textDecoration:"none" }}>
                   See all service providers
                   </Link>
                    </span>
            </div>
            <div className="right">
            <ChildCareOutlinedIcon/>
            </div>
            </div>
    )
}

export default Swidget;