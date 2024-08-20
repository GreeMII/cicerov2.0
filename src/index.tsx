import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import {router} from "./router";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);
