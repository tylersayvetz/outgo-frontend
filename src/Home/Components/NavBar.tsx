import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import { theme } from "../../theme";

import { ReactComponent as BalanceSVGInactive } from "../../assets/balance-in.svg";
import { ReactComponent as InvoicesSVGInactive } from "../../assets/invoice-in.svg";
import { ReactComponent as UserSVGInactive } from "../../assets/user-in.svg";
import { ReactComponent as BalanceSVG } from "../../assets/balance.svg";
import { ReactComponent as InvoicesSVG } from "../../assets/invoice.svg";
import { ReactComponent as UserSVG } from "../../assets/user.svg";
import React from "react";

export function NavBar() {
    const [value, setValue] = React.useState(0);

    return (
        <Box>
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                className={theme.palette.backgroundColor.secondary}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    style={{ backgroundColor: theme.palette.backgroundColor.secondary }}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="Balance"
                        icon={value === 0 ? <BalanceSVG /> : <BalanceSVGInactive />}
                    />
                    <BottomNavigationAction
                        label="Invoices"
                        icon={value === 1 ? <InvoicesSVG /> : <InvoicesSVGInactive />}
                    />
                    <BottomNavigationAction
                        label="Profile"
                        icon={value == 2 ? <UserSVG /> : <UserSVGInactive />}
                    />
                </BottomNavigation>
            </Paper>
            <Box sx={{ height: 56 }} />
        </Box>
    );
}
