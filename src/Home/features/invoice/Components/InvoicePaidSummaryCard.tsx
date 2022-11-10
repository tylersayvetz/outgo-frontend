import { Box, Typography } from "@mui/material";
import React from "react";
import { formatter } from "../../../../lib/util";
import { theme } from "../../../../theme";
import { PaidSummary } from "../../../../types";
import styles from "./InvoiceSummaryCard.module.scss";
import InvoiceSummaryCardHeader from "./InvoiceSummaryCardHeader";

export default function InvoicePaidSummaryCard(props: { summary: PaidSummary }) {
    return (
        <Box className={styles.Card}>
            <InvoiceSummaryCardHeader
                title={"Paid"}
                invoiceNumber={props.summary.count}
                icon="cash"
            />
            <Box className={styles.CardContent}>
                <Box className={styles.CardLineItem}>
                    <Typography variant="BodySmReg" color={theme.palette.type.tertiary}>
                        This month
                    </Typography>
                    <Typography variant="BodySmReg" color={theme.palette.type.primary}>
                        {formatter.format(props.summary.totalPaidAmountMonthCents / 100)}
                    </Typography>
                </Box>
                <Box className={styles.CardLineItem}>
                    <Typography variant="BodySmReg" color={theme.palette.type.tertiary}>
                        {"Year to date"}
                    </Typography>
                    <Typography variant="BodySmReg" color={theme.palette.type.primary}>
                        {formatter.format(props.summary.totalPaidAmountYTDCents / 100)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
