import "./order.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Odatatable from "../../components/odatatable/Odatatable";

const Order = () => {
return (
    <div className="order">
        <Sidebar/>
        <div className="orderContainer">
            <Navbar/>
           <Odatatable/>
        </div>
    </div>
)

}
export default Order;