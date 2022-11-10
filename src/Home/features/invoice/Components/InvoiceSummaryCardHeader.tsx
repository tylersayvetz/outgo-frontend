import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactElement } from "react";
import { theme } from "../../../../theme";
import styles from "./InvoiceSummaryCard.module.scss";
import { ReactComponent as DraftSVG } from "../../../../assets/draft.svg";
import { ReactComponent as CashSVG } from "../../../../assets/cash.svg";
import { ReactComponent as DocumentSCVG } from "../../../../assets/document.svg";

import { ReactComponent as RightSVG } from "../../../../assets/chev-right.svg";

export default function InvoiceSummaryCardHeader(props: {
    title: string;
    invoiceNumber: number;
    icon: "document" | "cash" | "draft";
}) {
    const iconMap = {
        document: <DocumentSCVG style={{ marginRight: 10 }} />,
        cash: <CashSVG style={{ marginRight: 10 }} />,
        draft: <DraftSVG style={{ marginRight: 10 }} />
    };
    const Icon = (): ReactElement<any, any> => {
        switch (props.icon) {
            case "document":
                return <DocumentSCVG />;
            case "cash":
                return <CashSVG />;
            case "draft":
                return <DraftSVG />;
        }
    };

    return (
        <Box className={styles.Header}>
            <Box display={"flex"} flexDirection="row" alignItems="center">
                {iconMap[props.icon]}
                <Typography
                    variant="BodyLgReg"
                    color={theme.palette.type.primary}
                    style={{ marginRight: 10 }}
                >
                    {props.invoiceNumber}
                </Typography>
                <Typography variant="BodyLgReg" color={theme.palette.type.primary}>
                    {props.title}
                </Typography>
            </Box>
            <Box display={"flex"} flexDirection="row" alignItems="center">
                <RightSVG />
            </Box>
        </Box>
    );
}
