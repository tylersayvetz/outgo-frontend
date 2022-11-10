import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../../theme";
import { DraftSummary, InvoiceSummary } from "../../../../types";
import styles from "./InvoiceSummaryCard.module.scss";
import InvoiceSummaryCardHeader from "./InvoiceSummaryCardHeader";

export default function InvoiceDraftSummaryCard(props: { summary: DraftSummary }) {
    return (
        <Box className={styles.Card}>
            <InvoiceSummaryCardHeader
                title={"Draft"}
                invoiceNumber={props.summary.count}
                icon="draft"
            />
            <Box className={styles.CardContent}>
                <Box className={styles.CardLineItem}>
                    <Typography variant="BodySmReg" color={theme.palette.type.tertiary}>
                        {`Processing ${props.summary.processingDocumentsCount} documents`}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
