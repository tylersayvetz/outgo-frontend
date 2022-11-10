import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { formatter } from "../../../../lib/util";
import { theme } from "../../../../theme";
import { Account, AccountType } from "../../../../types";
import styles from "./AccountCardInner.module.scss";
import { ReactComponent as ForwardIconSVG } from "../../../../assets/forward.svg";

export default function AccountCardInner(props: { data: Account }) {
    const spendingPowerString = formatter.format(props.data.balanceCents / 100);

    const textInactive = props.data.balanceCents === 0 && props.data.type === AccountType.CHECKING;

    const accountTypesMap = {
        [AccountType.CHECKING]: {
            name: "Checking",
            details: "Your Business Account"
        },
        [AccountType.EARLY_INCOME]: {
            name: "Early Income",
            details: "Balance from your Unpaid Approved Invoices"
        }
    };

    return (
        <Box display={"flex"} alignItems="center" justifyContent={"space-between"} height={"100%"}>
            <Box className={styles.Container}>
                <Typography
                    variant="BodyLgBold"
                    color={textInactive ? theme.palette.type.tertiary : theme.palette.type.primary}
                >
                    {spendingPowerString}
                </Typography>
                <Typography
                    variant="InteractiveSm"
                    color={textInactive ? theme.palette.type.tertiary : theme.palette.type.primary}
                >
                    {accountTypesMap[props.data.type].name}
                </Typography>
                <Typography
                    variant="BodySmReg"
                    color={textInactive ? theme.palette.type.disabled : theme.palette.type.tertiary}
                >
                    {accountTypesMap[props.data.type].details}
                </Typography>
            </Box>
            <Box>
                <ForwardIconSVG fill={theme.palette.type.primary} />
            </Box>
        </Box>
    );
}
