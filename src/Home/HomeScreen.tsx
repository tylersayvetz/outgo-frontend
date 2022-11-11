import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    Container,
    FormLabel,
    Input,
    InputLabel,
    TextField
} from "@mui/material";
import React from "react";
import Accounts from "./features/account/Accounts";
import { KeyContext } from "../lib/KeyContext";
import Transactions from "./features/transaction/Transactions";
import Invoices from "./features/invoice/Invoices";
import { Controller, useForm } from "react-hook-form";

export default function HomeScreen() {
    const [key, setKey] = React.useState(0);

    const { control, handleSubmit, setError } = useForm({
        defaultValues: {
            key: 0
        }
    });

    const onSumbit = (data: any) => {
        console.log(parseInt(data.key));

        if (parseInt(data.key) > 7 || parseInt(data.key) < 0) {
            setError("key", {
                message: "Key must be between 0 and 7"
            });
            return;
        }

        setKey(parseInt(data.key));
    };

    return (
        <Container>
            <Box display={"flex"} flexDirection="row" alignItems="center" mb={4}>
                <Controller
                    name="key"
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            fullWidth
                            onChange={onChange}
                            value={value}
                            type="number"
                            label={"Key"}
                            error={!!error}
                            helperText={error?.message}
                            style={{ marginRight: 10 }}
                            size="small"
                        />
                    )}
                />
                <Box>
                    <Button variant="outlined" onClick={handleSubmit(onSumbit)} size="small">
                        Submit
                    </Button>
                </Box>
            </Box>
            <KeyContext.Provider value={key}>
                <Accounts />
                <Transactions />
                <Invoices />
            </KeyContext.Provider>
        </Container>
    );
}
