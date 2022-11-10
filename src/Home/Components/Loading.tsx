import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import styles from "./Loading.module.scss";

export default function Loading() {
    return (
        <Box className={styles.Main}>
            <CircularProgress size={20} style={{ marginRight: 10 }} />
            <Typography variant="BodyLgReg" color={theme.palette.type.tertiary}>
                Loading...
            </Typography>
        </Box>
    );
}
