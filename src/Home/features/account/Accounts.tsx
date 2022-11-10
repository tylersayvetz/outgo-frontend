import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useHomeData } from "../../../api";
import { AccountType } from "../../../types";
import { KeyContext } from "../../../lib/KeyContext";
import { formatter } from "../../../lib/util";
import styles from "./Accounts.module.scss";
import AccountSection from "./Components/AccountSection";
import SpendingPower from "./Components/SpendingPower";
import { ReactComponent as TransferSVG } from "../../../assets/transfer.svg";
import { theme } from "../../../theme";

export default function Accounts() {
    const key = useContext(KeyContext);
    const { data, error } = useHomeData(key);

    // Show loading state if data is not yet available
    if (!data) {
        return (
            <Box className={styles.Main}>
                <Typography>Loading</Typography>
            </Box>
        );
    }

    // Consider a filter instead of this find functinoality..
    // Get the accounts we want off the data
    const checkingAccount = data.accounts.find((account) => account.type === AccountType.CHECKING);
    const earlyIncomeAccount = data.accounts.find(
        (account) => account.type === AccountType.EARLY_INCOME
    );

    // check them for null
    if (!checkingAccount || !earlyIncomeAccount) {
        return (
            <Box className={styles.Main}>
                <Typography>Missing account data</Typography>
            </Box>
        );
    }

    const spendingPowerCents = checkingAccount.balanceCents + earlyIncomeAccount.balanceCents;

    return (
        <Box mb={5}>
            <SpendingPower spendingPowerCents={spendingPowerCents} />
            <AccountSection checking={checkingAccount} earlyIncome={earlyIncomeAccount} />

            <Button variant="outlined" color="primary" style={{ width: "100%" }}>
                <Box mr={"13px"} display="flex" alignItems="center">
                    <TransferSVG fill={theme.palette.type.primary} />
                </Box>
                <Typography variant="InteractiveSm">Transfer</Typography>
            </Button>
        </Box>
    );
}
