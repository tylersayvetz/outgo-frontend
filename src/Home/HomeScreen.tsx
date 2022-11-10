import { Box, Container, FormLabel, Input, InputLabel, TextField } from "@mui/material";
import React from "react";
import Accounts from "./features/account/Accounts";
import { KeyContext } from "../lib/KeyContext";
import Transactions from "./features/transaction/Transactions";
import Invoices from "./features/invoice/Invoices";

export default function HomeScreen() {
    const [key, setKey] = React.useState(0);

    return (
        <Container>
            <TextField
                id="keyField"
                label="Key"
                size="small"
                style={{ width: "50px", border: "1px solid black" }}
                onChange={(e) => setKey(parseInt(e.target.value))}
            />
            <KeyContext.Provider value={key}>
                <Accounts />
                <Transactions />
                <Invoices />
            </KeyContext.Provider>
        </Container>
    );
}
