import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useHomeData } from "../../../../api";
import { theme } from "../../../../theme";
import { KeyContext } from "../../../../lib/KeyContext";
import AccountCard from "./AccountCard";
import style from "./AccountSection.module.scss";
import { Account } from "../../../../types";

export default function AccountSection(props: { checking: Account; earlyIncome: Account }) {
    const checkingEmpty = props.checking.balanceCents === 0;
    return (
        <Box className={style.Container} style={{ borderColor: theme.palette.object.tertiary }}>
            <AccountCard active={!checkingEmpty} data={props.checking} />
            <AccountCard active={checkingEmpty} data={props.earlyIncome} />
        </Box>
    );
}
