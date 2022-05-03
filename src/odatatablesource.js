export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "pick up location",
      headerName: "Pick Up Location",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
           
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "dropofflocation",
      headerName: "Drop Off Location",
      width: 230,
      
    },
  
    {
      field: "selectedvehicle",
      headerName: "Selected Vehicle",
      width: 250,
    },
   {
    field: "status",
    headerName: "Status",
    width: 160,
    
    renderCell: (params) => {
  
      return (
        
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
   

   
   
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "active",
      
    },
    {
      id: 2,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "passive",
      
    },
    {
      id: 3,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "pending",
      
    },
    {
      id: 4,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "active",
     
    },
    {
      id: 5,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "passive",
     
    },
    {
      id: 6,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "active",
     
    },
    {
      id: 7,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "passive",
   
    },
    {
      id: 8,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "active",
     
    },
    {
      id: 9,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      status: "pending",
    
    },
    {
      id: 10,
      username: "Imadol",
      dropofflocation: "Mangalbazar",
     
      selectedvehicle: "xyz",
      
      status: "active",
     
    },
  ];