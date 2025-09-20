export default function routes() {
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

  createRouter([
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
  ]);

  function createRouter(routes: RouteRecord[]) {
    console.log("Router initialized with routes:", routes);
  }
}
