import React from 'react';
import './input.css';
import {RouterProvider} from "@tanstack/react-router";
import {router} from "./router";
import {MantineProvider} from "@mantine/core"

function App() {
    return (
            <MantineProvider>
                <RouterProvider router={router} />
            </MantineProvider>
    );
}

export default App;