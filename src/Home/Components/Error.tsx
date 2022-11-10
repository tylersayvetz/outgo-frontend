import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import styles from "./Error.module.scss";

export default function Error(props: { message?: string }) {
    return (
        <Box className={styles.Main}>
            <Typography
                variant="BodyLgReg"
                color={theme.palette.type.tertiary}
                style={{ textAlign: "center" }}
            >
                {props.message ?? "An error occured"}
            </Typography>
        </Box>
    );
}
