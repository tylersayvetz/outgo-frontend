import { Box, Typography } from "@mui/material";
import React from "react";
import { formatter } from "../../../../lib/util";
import { theme } from "../../../../theme";
import { AwaitingPaymentSummary } from "../../../../types";
import styles from "./InvoiceSummaryCard.module.scss";
import InvoiceSummaryCardHeader from "./InvoiceSummaryCardHeader";

export default function InvoiceAwaitingPaySummaryCard(props: { summary: AwaitingPaymentSummary }) {
    return (
        <Box className={styles.Card}>
            <InvoiceSummaryCardHeader
                icon="document"
                title={"Awaiting Payment"}
                invoiceNumber={props.summary.count}
            />
            <Box className={styles.CardContent}>
                <Box className={styles.CardLineItem}>
                    <Typography variant="BodySmReg" color={theme.palette.type.tertiary}>
                        {`Preparing ${props.summary.preparingCount} invoices`}
                    </Typography>
                </Box>
                <Box className={styles.CardLineItem}>
                    <Typography variant="BodySmReg" color={theme.palette.type.tertiary}>
                        {"Total invoiced"}
                    </Typography>
                    <Typography variant="BodySmReg" color={theme.palette.type.primary}>
                        {formatter.format((props.summary.totalReceivableAmountCents ?? 0) / 100)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
