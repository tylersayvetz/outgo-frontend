import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useHomeData } from "../../../../api";
import { theme } from "../../../../theme";
import { AccountType } from "../../../../types";
import { KeyContext } from "../../../../lib/KeyContext";
import { formatter } from "../../../../lib/util";
import styles from "./SpendingPower.module.scss";
import InfoIcon from "../../../../assets/info-circle.svg";

export default function SpendingPower(props: { spendingPowerCents: number }) {
    const spendingPowerString = formatter.format(props.spendingPowerCents / 100);
    return (
        <Box mb={4} className={styles.Main}>
            <Typography variant="titleSBold" color={theme.palette.type.primary}>
                {spendingPowerString}
            </Typography>
            <Box display={"flex"} flexDirection="row">
                <Typography variant="BodySmReg" color={theme.palette.type.primary}>
                    Your spending power
                </Typography>
                <Box paddingLeft={1} display="flex" flexDirection={"row"} alignItems="center">
                    <img src={InfoIcon} height={14} width={14} />
                </Box>
            </Box>
        </Box>
    );
}
