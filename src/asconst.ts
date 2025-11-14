// enum UserRoles {
//   Admin = "ADMIN",
//   Editor = "EDITOR",
//   Viewer = "VIEWER",
// }

const UserRoles = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

/* *************************
first of all have to know the type and then figure out how can a typeof operator created
const user={
iD:3,
name:"Boka"
}

user ["id"]=====3
typeof user ;

{
id:number,
name:string
}

UserRoles={
Admin:"Admin",
Editor:"Editor",
Viewer:"Viewer"    don't put here string because this is const
}

keyof typeof UserRoles
"Admin" | "Editor" | "Viewer"
"ADMIN" | "EDITOR" | "VIEWER"
UserRoles["Admin"]>>>>Admin
typeof UserRoles[keyof typeof UserRoles]


*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
