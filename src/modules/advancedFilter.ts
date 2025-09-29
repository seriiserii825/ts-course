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

type Component = () => string;

type RouteRecordBase = {
  path: string;
};

type RouteRecordComponent = RouteRecordBase & {
  type: "component";
  component: Component;
  children?: RouteRecord[];
};
type RouteRecordRedirect = RouteRecordBase & {
  type: "redirect";
  redirect: string;
};

type RouteRecord = RouteRecordRedirect | RouteRecordComponent;

const routes: RouteRecord[] = [
  {
    type: "component",
    path: "/",
    component: () => "Home Page",
  },
  {
    type: "redirect",
    path: "/about",
    redirect: "/info",
  },
  {
    type: "component",
    path: "/products",
    component: () => "Products Page",
    children: [
      {
        type: "component",
        path: "electronics",
        component: () => "Electronics Page",
      },
    ],
  },
];

function advancedFilter<Obj extends object, Key extends keyof Obj, Val extends Obj[Key]>(
  prop: Key,
  value: Val
) {
  return (item: Obj): item is Extract<Obj, { [K in Key]: Val }> => item[prop] == value;
}

const USER_TYPES = {
  ADMIN: "admin",
  MANAGER: "manager",
  CLIENT: "client",
} as const;

const users_filtered = users.filter(advancedFilter("type", USER_TYPES.CLIENT));
const routes_filtered = routes.filter(advancedFilter("type", "component" as const));
