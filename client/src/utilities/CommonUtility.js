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
