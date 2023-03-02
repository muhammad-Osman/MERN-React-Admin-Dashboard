export const capitalizeRole = (role) => {
  if (role == "superadmin") {
    return "Super Admin";
  } else if (role == "admin") {
    return "Admin";
  } else if (role == "user") {
    return "User";
  } else {
    return role;
  }
};

export const customerTableColumns = [
  {
    field: "_id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "name",
    headerName: "NAME",
    flex: 0.5,
  },
  {
    field: "email",
    headerName: "EMAIL",
    flex: 1,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    flex: 0.5,
    renderCell: (params) => {
      return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    },
  },
  {
    field: "country",
    headerName: "COUNTRY",
    flex: 0.4
  },
  {
    field: "occupation",
    headerName: "Occupation",
    flex: 1
  },
  {
    field: "role",
    headerName: "Role",
    flex: 0.5
  }
];