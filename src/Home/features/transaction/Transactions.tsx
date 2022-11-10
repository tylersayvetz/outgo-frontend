import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useHomeData } from "../../../api";
import { KeyContext } from "../../../lib/KeyContext";
import { theme } from "../../../theme";
import Error from "../../Components/Error";
import Loading from "../../Components/Loading";
import HScrollContainer from "./Components/HScrollContainer";
import styles from "./Transactions.module.scss";

export default function Transactions() {
    const key = useContext(KeyContext);
    const { data, error, isLoading } = useHomeData(key);

    let component;
    if (error) {
        component = <Error message="Missing or invalid transaction data" />;
    } else if (isLoading) {
        component = <Loading />;
    } else if (data) {
        if (data.recentTransactions.length === 0) {
            component = <HScrollContainer transactions={data.recentTransactions} />;
        } else {
            component = (
                <Typography variant="BodySmReg" color={theme.palette.type.tertiary}>
                    No transactions yet
                </Typography>
            );
        }
    }

    return (
        <Box mb={5}>
            <Box className={styles.HeadContainer}>
                <Box
                    mr={2}
                    style={{
                        width: "100%",
                        borderBottom: "2px solid",
                        borderColor: theme.palette.backgroundColor.tertiary
                    }}
                >
                    <Typography variant="InteractiveSm" color={theme.palette.type.primary}>
                        Transactions
                    </Typography>
                </Box>
                <Box display={"flex"}>
                    <Button variant="text">
                        <Typography variant="InteractiveSm" color={theme.palette.type.primary}>
                            View all
                        </Typography>
                    </Button>
                </Box>
            </Box>
            {component}
        </Box>
    );
}
