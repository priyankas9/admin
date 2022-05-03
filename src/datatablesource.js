export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
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
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone  ",
      width: 200,
    },

   
   
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      address:"Dhobighat",
      phone:"9863841201",
  
      email: "1snow@gmail.com",
     
    },
    {
      id: 2,
      username: "Jamie Lannister",
      address:"Dhobighat",
      phone:"9863841201",
      email: "2snow@gmail.com",
   
    },
    {
      id: 3,
      username: "Lannister",
      address:"Dhobighat",
      phone:"9863841201",
      email: "3snow@gmail.com",
    
     
    },
    {
      id: 4,
      username: "Stark",
      address:"Dhobighat",
      phone:"9863841201",
      email: "4snow@gmail.com",

      
    },
    {
      id: 5,
      username: "Targaryen",
      address:"Dhobighat",
      phone:"9863841201",
      email: "5snow@gmail.com",
   
      
    },
    {
      id: 6,
      username: "Melisandre",
      address:"Dhobighat",
      phone:"9863841201",
      email: "6snow@gmail.com",
   
     
    },
    {
      id: 7,
      username: "Clifford",
      address:"Dhobighat",
      phone:"9863841201",
      email: "7snow@gmail.com",
      
      
    },
    {
      id: 8,
      username: "Frances",
      address:"Dhobighat",
      phone:"9863841201",
      email: "8snow@gmail.com",
     
     
    },
    {
      id: 9,
      username: "Roxie",
      address:"Dhobighat",
      phone:"9863841201",
      email: "snow@gmail.com",
      
      
    },
    {
      id: 10,
      username: "Roxie",
      address:"Dhobighat",
      phone:"9863841201",
      email: "snow@gmail.com",
   
    },
  ];