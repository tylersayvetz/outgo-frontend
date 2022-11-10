import { Box, Typography } from "@mui/material";
import React from "react";
import { useHomeData } from "../../api";
import { theme } from "../../theme";
import { AccountType } from "../../types";
import InfoIcon from "../../assets/info-circle.svg";

export default function SpendingPower() {
    const { data, error } = useHomeData(0);

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    if (!data) {
        return <Typography>Loading or error...</Typography>;
    }

    // Get the accounts we want off the data
    const checkingAccount = data.accounts.find((account) => account.type === AccountType.CHECKING);
    const earlyIncomeAccount = data.accounts.find(
        (account) => account.type === AccountType.EARLY_INCOME
    );

    // check them for null
    if (data.accounts.length != 2 || !checkingAccount || !earlyIncomeAccount) {
        return <Typography>Wrong number of accounts</Typography>;
    }

    const spendingPowerString = formatter.format(
        (checkingAccount.balanceCents + earlyIncomeAccount.balanceCents) / 100
    );

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="titleSBold" color={theme.palette.type.primary}>
                {spendingPowerString}
            </Typography>
            <Box display={"flex"} flexDirection="row">
                <Typography variant="BodySmReg" color={theme.palette.type.primary}>
                    Your spending power
                </Typography>
                <Box paddingLeft={1}>
                    <img src={InfoIcon} height={14} width={14} />
                </Box>
            </Box>
        </Box>
    );
}
