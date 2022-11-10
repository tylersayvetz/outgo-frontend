import { Box, Typography } from "@mui/material";
import React from "react";
import { formatter, timeAgo } from "../../../../lib/util";
import { theme } from "../../../../theme";
import { Transaction, TransactionType } from "../../../../types";
import styles from "./HScrollContainer.module.scss";
import ScrollItem from "./ScrollItem";

export default function HScrollContainer(props: { transactions: Transaction[] }) {
    return (
        <div className={styles.Wrapper}>
            {props.transactions.map((child, i) => {
                return (
                    <ScrollItem
                        key={i}
                        isFirstTransaction={i === 0}
                        isLastTransaction={i === props.transactions.length - 1}
                        item={child}
                    />
                );
            })}
        </div>
    );
}
