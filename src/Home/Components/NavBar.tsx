import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { theme } from "../../theme";

import { ReactComponent as BalanceSVG } from "../../assets/balance.svg";
import { ReactComponent as InvoicesSVG } from "../../assets/invoice.svg";
import { ReactComponent as UserSVG } from "../../assets/user.svg";
import React from "react";

export function NavBar() {
    const [value, setValue] = React.useState(0);

    return (
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
                <BottomNavigationAction label="Accounts" icon={<BalanceSVG />} />
                <BottomNavigationAction label="Invoices" icon={<InvoicesSVG />} />
                <BottomNavigationAction label="Profile" icon={<UserSVG />} />
            </BottomNavigation>
        </Paper>
    );
}
