//********************enum****************
// set of fixed string leteral ek jaygay rekhe
// type UserRoles = "Admin"|"Editor" | "Viewer"

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = " viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
