import React from "react";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import RomanConverter from "./components/RomanConverter";

function App() {
    return (
        <Provider theme={defaultTheme}>
            <RomanConverter />
        </Provider>
    );
}

export default App;
