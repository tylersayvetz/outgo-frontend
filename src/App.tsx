import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from "react-helmet";
import HomeScreen from "./Home/HomeScreen";
import { theme } from "./theme";

function App() {
    const queryClient = new QueryClient({ defaultOptions: {} });
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <div className="application">
                    <Helmet>
                        <style>{`body {background-color: ${theme.palette.backgroundColor.secondary}`}</style>
                    </Helmet>
                </div>
                <HomeScreen />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
