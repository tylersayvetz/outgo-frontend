import { Box, Typography } from "@mui/material";
import React from "react";
import { formatter, timeAgo } from "../../../../lib/util";
import { theme } from "../../../../theme";
import { Transaction, TransactionType } from "../../../../types";
import styles from "./HScrollContainer.module.scss";
import { ReactComponent as ForwardIconSVG } from "../../../../assets/forward.svg";
import { DateTime } from "luxon";
import { ReactComponent as CreditCardSVG } from "../../../../assets/credit-card.svg";
import { ReactComponent as DepositSVG } from "../../../../assets/deposit.svg";
import { ReactComponent as TransferSVG } from "../../../../assets/transfer.svg";

export default function ScrollItem(props: {
    item: Transaction;
    isFirstTransaction: boolean;
    isLastTransaction: boolean;
}) {
    let borderRad = "";
    if (props.isFirstTransaction && props.isLastTransaction) {
        borderRad = "5px";
    } else if (props.isFirstTransaction) {
        borderRad = "5px 0px 0px 5px";
    } else if (props.isLastTransaction) {
        borderRad = "0px 5px 5px 0px";
    } else {
        borderRad = "0px 0px 0px 0px";
    }

    const amountString = formatter.format(props.item.amountCents / 100);

    const iconStyle = {
        paddingRight: "8px"
    };

    // Map of combinations for the card component.
    const transactionTypesMap = {
        [TransactionType.DEBIT]: {
            name: "Debit",
            icon: <CreditCardSVG style={iconStyle} />
        },
        [TransactionType.DEPOSIT]: {
            name: "Deposit",
            icon: <DepositSVG style={iconStyle} />
        },
        [TransactionType.ACH_TRANSFER]: {
            name: "ACH Transfer",
            icon: <TransferSVG style={iconStyle} fill={theme.palette.type.tertiary} />
        }
    };

    return (
        <div
            className={styles.Item}
            style={{
                borderColor: theme.palette.object.tertiary,
                borderRadius: borderRad
            }}
        >
            <Box className={styles.LineItem}>
                <Typography variant="BodySmBold" color={theme.palette.type.primary}>
                    {amountString}
                </Typography>
                <Box ml={1}>
                    <ForwardIconSVG fill={theme.palette.brand.secondary} />
                </Box>
            </Box>
            <Box className={styles.LineItem}>
                <Typography
                    variant="BodySmReg"
                    color={theme.palette.type.primary}
                    className={styles.Truncate}
                >
                    {props.item.summaryDetails.counterparty}
                </Typography>
            </Box>
            <Box className={styles.LineItem}>
                {transactionTypesMap[props.item.type].icon}
                <Typography variant="BodySmReg" color={theme.palette.type.tertiary}>
                    {transactionTypesMap[props.item.type].name}
                </Typography>
            </Box>
            <Box className={styles.LineItem}>
                <Typography variant="BodySmReg" color={theme.palette.type.tertiary}>
                    {`${timeAgo(DateTime.fromISO(props.item.transactedAt).toJSDate())} ago`}
                </Typography>
            </Box>
        </div>
    );
}
