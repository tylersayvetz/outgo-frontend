import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./AccountCard.module.scss";
import classnames from "classnames";
import { theme } from "../../../../theme";
import { Account } from "../../../../types";
import MoneyIcon from "../../../../assets/money-sign.svg";
import AccountCardInner from "./AccountCardInner";

export default function AccountCard(props: { active: boolean; data: Account }) {
    const border = `2px solid ${theme.palette.brand.primary}`;

    return (
        <Box className={styles.AccountCard} style={{ border: props.active ? border : "none" }}>
            {props.active && (
                <Box className={styles.OverText}>
                    <Box
                        mr={"5px"}
                        display="flex"
                        alignItems={"center"}
                        style={{ backgroundColor: theme.palette.backgroundColor.secondary }}
                    >
                        <img src={MoneyIcon} height={20} width={20} />
                    </Box>
                    <Box
                        px={"2px"}
                        style={{ backgroundColor: theme.palette.backgroundColor.secondary }}
                    >
                        <Typography variant="BodySmBold" color={theme.palette.brand.primary}>
                            Funding your transactions
                        </Typography>
                    </Box>
                </Box>
            )}
            <AccountCardInner data={props.data} />
        </Box>
    );
}
