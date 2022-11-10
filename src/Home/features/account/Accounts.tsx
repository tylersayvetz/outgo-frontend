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
import Loading from "../../Components/Loading";

export default function Accounts() {
    const key = useContext(KeyContext);
    const { data, error, isLoading } = useHomeData(key);

    // Show loading state if data is not yet available
    if (isLoading) {
        return <Loading />;
    }

    // Consider a filter instead of this find functinoality..
    // Get the accounts we want off the data

    // Filter accounts to only show accounts that are the correct types
    const validAccounts = data?.accounts.filter((account) => {
        return account.type === AccountType.CHECKING || account.type === AccountType.EARLY_INCOME;
    });

    // If (there are not exaclty 2 accounts and they are not the correct types), show an error
    const checkingAccount = validAccounts?.find((account) => account.type === AccountType.CHECKING);
    const earlyIncomeAccount = validAccounts?.find(
        (account) => account.type === AccountType.EARLY_INCOME
    );

    if (!checkingAccount || !earlyIncomeAccount || validAccounts?.length !== 2) {
        return (
            <Box className={styles.Main}>
                <Typography variant="BodyLgReg" color={theme.palette.type.tertiary}>
                    Missing or invalid account data
                </Typography>
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
