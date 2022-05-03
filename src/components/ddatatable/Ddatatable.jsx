import "./ddatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../ddatatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Ddatatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/drivers/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            

            
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">

      <div className="datatableTitle">
      <Link to="/" style={{  color: "inherit", textDecoration: "none" }}>
         Driver
         </Link>
        <Link to="/drivers/dnew" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        
      />
    </div>
  );
};

export default Ddatatable;