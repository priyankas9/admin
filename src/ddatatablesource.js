export const userColumns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "name",
      headerName: "Name ",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
           
            {params.row.username}
          </div>
        );
      },
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
      },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
        field: "l_no",
        headerName: "License Number",
        width: 200,
      },
      {
        field: "address",
        headerName: "Address",
        width: 150,
      },
      {
        field: "phone",
        headerName: "Phone  ",
        width: 150,
      },
  
    
   
   
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      email: "1snow@gmail.com",
      address:"Dhobighat",
      phone:"9863841201",
      age:"35",
    l_no:"123-3452742",
    },
    {
      id: 2,
      username: "Jamie Lannister",
     email: "2snow@gmail.com",
     address:"Dhobighat",
      phone:"9863841201",
      age:"35",
      l_no:"123-3452742",
    },
    {
      id: 3,
      username: "Lannister",
     email: "3snow@gmail.com",
       address:"Dhobighat",
      phone:"9863841201",
      age:"35",
      l_no:"123-3452742",
     
    },
    {
      id: 4,
      username: "Stark",
     email: "4snow@gmail.com",
      address:"Dhobighat",
      phone:"9863841201",
      age:"35",
      l_no:"123-3452742",
      
    },
    {
      id: 5,
      username: "Targaryen",
     email: "5snow@gmail.com",
      address:"Dhobighat",
    phone:"9863841201",
    age:"35",
    l_no:"123-3452742",
    },
    {
      id: 6,
      username: "Melisandre",
      email: "6snow@gmail.com",
     address:"Dhobighat",
    phone:"9863841201",
    age:"35",
    l_no:"123-3452742",
    },
    {
      id: 7,
      username: "Clifford",
     email: "7snow@gmail.com",
      address:"Dhobighat",
      phone:"9863841201",
      age:"35",
      l_no:"123-3452742",
    },
    {
      id: 8,
      username: "Frances",
     email: "8snow@gmail.com",
      address:"Dhobighat",
    phone:"9863841201",
    age:"35",
    l_no:"123-3452742",
    },
    {
      id: 9,
      username: "Roxie",
     email: "snow@gmail.com",
      address:"Dhobighat",
      phone:"9863841201",
      age:"35",
      l_no:"123-3452742",
      
    },
    {
      id: 10,
      username: "Roxie",
     email: "snow@gmail.com",
     address:"Dhobighat",
    phone:"9863841201",
    age:"35",
    l_no:"123-3452742",
    },
  ];