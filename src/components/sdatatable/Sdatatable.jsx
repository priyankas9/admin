import "./sdatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../sdatatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sdatatable = () => {
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
            <Link to="/serviceproviders/test" style={{ textDecoration: "none" }}>
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
        Service Providers
        </Link>
        <Link to="/serviceproviders/snew" className="link">
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

export default Sdatatable;