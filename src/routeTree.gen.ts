/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as ScenarioRouteImport } from "./routes/scenario/route";
import { Route as CreateDogovorRouteImport } from "./routes/create-dogovor/route";
import { Route as IndexRouteImport } from "./routes/index/route";
import { Route as ScenarioScenarioidScenariogroupScenariogroupRouteImport } from "./routes/scenario/$scenarioid/scenariogroup/$scenariogroup/route";

// Create/Update Routes

const ScenarioRouteRoute = ScenarioRouteImport.update({
  path: "/scenario",
  getParentRoute: () => rootRoute,
} as any);

const CreateDogovorRouteRoute = CreateDogovorRouteImport.update({
  path: "/create-dogovor",
  getParentRoute: () => rootRoute,
} as any);

const IndexRouteRoute = IndexRouteImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const ScenarioScenarioidScenariogroupScenariogroupRouteRoute =
  ScenarioScenarioidScenariogroupScenariogroupRouteImport.update({
    path: "/$scenarioid/scenariogroup/$scenariogroup",
    getParentRoute: () => ScenarioRouteRoute,
  } as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/create-dogovor": {
      id: "/create-dogovor";
      path: "/create-dogovor";
      fullPath: "/create-dogovor";
      preLoaderRoute: typeof CreateDogovorRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/scenario": {
      id: "/scenario";
      path: "/scenario";
      fullPath: "/scenario";
      preLoaderRoute: typeof ScenarioRouteImport;
      parentRoute: typeof rootRoute;
    };
    "/scenario/$scenarioid/scenariogroup/$scenariogroup": {
      id: "/scenario/$scenarioid/scenariogroup/$scenariogroup";
      path: "/$scenarioid/scenariogroup/$scenariogroup";
      fullPath: "/scenario/$scenarioid/scenariogroup/$scenariogroup";
      preLoaderRoute: typeof ScenarioScenarioidScenariogroupScenariogroupRouteImport;
      parentRoute: typeof ScenarioRouteImport;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRouteRoute,
  CreateDogovorRouteRoute,
  ScenarioRouteRoute: ScenarioRouteRoute.addChildren({
    ScenarioScenarioidScenariogroupScenariogroupRouteRoute,
  }),
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/create-dogovor",
        "/scenario"
      ]
    },
    "/": {
      "filePath": "index/route.tsx"
    },
    "/create-dogovor": {
      "filePath": "create-dogovor/route.tsx"
    },
    "/scenario": {
      "filePath": "scenario/route.tsx",
      "children": [
        "/scenario/$scenarioid/scenariogroup/$scenariogroup"
      ]
    },
    "/scenario/$scenarioid/scenariogroup/$scenariogroup": {
      "filePath": "scenario/$scenarioid/scenariogroup/$scenariogroup/route.tsx",
      "parent": "/scenario"
    }
  }
}
ROUTE_MANIFEST_END */
