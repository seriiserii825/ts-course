export default {};
type TBaseUser = {
  id: number;
  name: string;
};
export type TAdminUser = TBaseUser & {
  type: "admin";
  accessLevel: number;
};

export type TManagerUser = TBaseUser & {
  type: "manager";
  accessLevel: number;
  roles: string[];
};

export type TClientUser = TBaseUser & {
  type: "client";
};

type TUser = TAdminUser | TManagerUser | TClientUser;

function loadUser(): TUser[] {
  return [
    { type: "manager", id: 1, name: "Alice", accessLevel: 5, roles: ["editor", "viewer"] },
    { type: "admin", id: 2, name: "Mark", accessLevel: 5 },
    { type: "client", id: 3, name: "Toby" },
    { type: "manager", id: 4, name: "Beatrice", accessLevel: 3, roles: ["editor"] },
  ];
}

const users = loadUser();

const user = users[0];

if (isManager(user)) {
  console.log(user.roles, "user.roles");
}

function isManager(user: TUser): user is TManagerUser {
  return user.type === "manager";
}

users.filter((user) => user.type === "manager").map((user) => user.roles);
