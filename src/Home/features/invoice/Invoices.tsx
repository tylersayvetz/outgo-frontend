import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useHomeData } from "../../../api";
import { KeyContext } from "../../../lib/KeyContext";
import styles from "./Invoices.module.scss";
import { ReactComponent as PlusSVG } from "../../../assets/plus.svg";
import { theme } from "../../../theme";
import InvoiceDraftSummaryCard from "./Components/InvoiceDraftSummaryCard";
import InvoiceAwaitingPaySummaryCard from "./Components/InvoiceAwaitingPaySummaryCard";
import InvoicePaidSummaryCard from "./Components/InvoicePaidSummaryCard";
import Error from "../../Components/Error";
import Loading from "../../Components/Loading";

export default function Invoices() {
    const key = useContext(KeyContext);
    const { data, error, isLoading } = useHomeData(key);

    let component;
    if (error) {
        component = <Error message="Missing or invalid invoice data" />;
    } else if (isLoading) {
        component = <Loading />;
    } else if (data) {
        component = (
            <Box className={styles.InvoiceContainer}>
                <InvoiceDraftSummaryCard summary={data.invoiceSummary.draftSummary} />
                <InvoiceAwaitingPaySummaryCard
                    summary={data.invoiceSummary.awaitingPaymentSummary}
                />
                <InvoicePaidSummaryCard summary={data.invoiceSummary.paidSummary} />
            </Box>
        );
    }

    return (
        <Box>
            <Box className={styles.TopBar}>
                <Typography variant="BodySmBold" color={theme.palette.type.primary}>
                    Invoices
                </Typography>
                <Button variant="outlined" style={{ borderRadius: 12 }}>
                    <PlusSVG style={{ marginRight: 10 }} />
                    <Typography variant="InteractiveSm" color={theme.palette.type.primary}>
                        New
                    </Typography>
                </Button>
            </Box>

            <Divider />
            {component}
        </Box>
    );
}
