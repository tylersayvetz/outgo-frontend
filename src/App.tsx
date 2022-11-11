import React from "react";
import "./App.css";
import { BottomNavigation, BottomNavigationAction, Paper, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeScreen from "./Home/HomeScreen";
import { theme } from "./theme";
import { NavBar } from "./Home/Components/NavBar";

function App() {
    const queryClient = new QueryClient({ defaultOptions: {} });
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <div className="application">
                    <HelmetProvider>
                        <Helmet>
                            <style>{`body {background-color: ${theme.palette.backgroundColor.secondary}`}</style>
                        </Helmet>
                    </HelmetProvider>
                </div>
                <HomeScreen />
                <NavBar />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
