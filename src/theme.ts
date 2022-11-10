import { createTheme } from "@mui/material";
import React from "react";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthXs: {
                    paddingLeft: "8px",
                    paddingRight: "8px"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none"
                    }
                }
            }
        }
    },

    palette: {
        brand: {
            primary: "#114A32",
            secondary: "#C6882C",
            tertiary: "#FEEDC7"
        },
        backgroundColor: {
            white: "#FFFFFF",
            secondary: "#FBF8F3",
            tertiary: "#E5E3DE"
        },
        type: {
            primary: "#010700",
            secondary: "#3D3C3B",
            tertiary: "#656360",
            disabled: "#ADAAA6",
            white: "#FFFFFF"
        },
        object: {
            primary: "#010700",
            secondary: "#656360",
            tertiary: "#ADAAA6",
            white: "#FFFFFF"
        }
    },
    typography: {
        allVariants: {
            fontFamily: "Rubik, sans-serif"
        },
        h1: undefined,
        h2: undefined,
        h3: undefined,
        h4: undefined,
        h5: undefined,
        h6: undefined,
        subtitle1: undefined,
        subtitle2: undefined,
        body1: undefined,
        body2: undefined,
        titleSBold: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 700,
            fontSize: 40,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        titleSReg: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            fontSize: 40,
            lineHeight: "48px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        BodyXlBold: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "32px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        BodyXlReg: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: "32px",
            letterSpacing: "0em",
            textAlign: "left"
        },

        BodyLgBold: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 700,
            fontSize: 20,
            lineHeight: "26px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        BodyLgReg: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            fontSize: 20,

            lineHeight: "2px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        BodyMdBold: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 700,
            fontSize: 18,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        BodyMdReg: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        BodySmBold: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 700,
            fontSize: 16,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        BodySmReg: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        InteractiveLg: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        InteractiveLgUnderline: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            lineHeight: "28px",
            letterSpacing: "0em",
            textAlign: "left",
            textDecoration: "underline"
        },
        InteractiveMd: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        InteractiveMdUnderline: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: "24px",
            letterSpacing: "0em",
            textAlign: "left",
            textDecoration: "underline"
        },
        InteractiveSm: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left"
        },
        InteractiveSmUnderline: {
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            textDecoration: "underline"
        }
    }
});

/* ---------------------------------------------------------------------------------------------- */
/*                                       Module Augmentation                                      */
/* ---------------------------------------------------------------------------------------------- */
declare module "@mui/material/styles" {
    interface Theme {
        palette: {
            brand: {
                primary: React.CSSProperties["color"];
                secondary: React.CSSProperties["color"];
                tertiary: React.CSSProperties["color"];
            };
            backgroundColor: {
                white: React.CSSProperties["color"];
                secondary: React.CSSProperties["color"];
                tertiary: React.CSSProperties["color"];
            };
            type: {
                primary: React.CSSProperties["color"];
                secondary: React.CSSProperties["color"];
                tertiary: React.CSSProperties["color"];
                disabled: React.CSSProperties["color"];
                white: React.CSSProperties["color"];
            };
            object: {
                primary: React.CSSProperties["color"];
                secondary: React.CSSProperties["color"];
                tertiary: React.CSSProperties["color"];
                white: React.CSSProperties["color"];
            };
        };
    }

    interface Palette {
        brand: {
            primary: React.CSSProperties["color"];
            secondary: React.CSSProperties["color"];
            tertiary: React.CSSProperties["color"];
        };
        backgroundColor: {
            white: React.CSSProperties["color"];
            secondary: React.CSSProperties["color"];
            tertiary: React.CSSProperties["color"];
        };
        type: {
            primary: React.CSSProperties["color"];
            secondary: React.CSSProperties["color"];
            tertiary: React.CSSProperties["color"];
            disabled: React.CSSProperties["color"];
            white: React.CSSProperties["color"];
        };
        object: {
            primary: React.CSSProperties["color"];
            secondary: React.CSSProperties["color"];
            tertiary: React.CSSProperties["color"];
            white: React.CSSProperties["color"];
        };
    }

    interface PaletteOptions {
        brand: {
            primary: React.CSSProperties["color"];
            secondary: React.CSSProperties["color"];
            tertiary: React.CSSProperties["color"];
        };
        backgroundColor: {
            white: React.CSSProperties["color"];
            secondary: React.CSSProperties["color"];
            tertiary: React.CSSProperties["color"];
        };
        type: {
            primary: React.CSSProperties["color"];
            secondary: React.CSSProperties["color"];
            tertiary: React.CSSProperties["color"];
            disabled: React.CSSProperties["color"];
            white: React.CSSProperties["color"];
        };
        object: {
            primary: React.CSSProperties["color"];
            secondary: React.CSSProperties["color"];
            tertiary: React.CSSProperties["color"];
            white: React.CSSProperties["color"];
        };
    }

    /* -------------------------------------------- Type -------------------------------------------- */
    interface TypographyVariants {
        titleSBold: React.CSSProperties;
        titleSReg: React.CSSProperties;
        BodyXlBold: React.CSSProperties;
        BodyXlReg: React.CSSProperties;
        BodyLgBold: React.CSSProperties;
        BodyLgReg: React.CSSProperties;
        BodyMdBold: React.CSSProperties;
        BodyMdReg: React.CSSProperties;
        BodySmBold: React.CSSProperties;
        BodySmReg: React.CSSProperties;
        InteractiveLg: React.CSSProperties;
        InteractiveLgUnderline: React.CSSProperties;
        InteractiveMd: React.CSSProperties;
        InteractiveMdUnderline: React.CSSProperties;
        InteractiveSm: React.CSSProperties;
        InteractiveSmUnderline: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        titleSBold: React.CSSProperties;
        titleSReg: React.CSSProperties;
        BodyXlBold: React.CSSProperties;
        BodyXlReg: React.CSSProperties;
        BodyLgBold: React.CSSProperties;
        BodyLgReg: React.CSSProperties;
        BodyMdBold: React.CSSProperties;
        BodyMdReg: React.CSSProperties;
        BodySmBold: React.CSSProperties;
        BodySmReg: React.CSSProperties;
        InteractiveLg: React.CSSProperties;
        InteractiveLgUnderline: React.CSSProperties;
        InteractiveMd: React.CSSProperties;
        InteractiveMdUnderline: React.CSSProperties;
        InteractiveSm: React.CSSProperties;
        InteractiveSmUnderline: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        titleSBold: true;
        titleSReg: true;
        BodyXlBold: true;
        BodyXlReg: true;
        BodyLgBold: true;
        BodyLgReg: true;
        BodyMdBold: true;
        BodyMdReg: true;
        BodySmBold: true;
        BodySmReg: true;
        InteractiveLg: true;
        InteractiveLgUnderline: true;
        InteractiveMd: true;
        InteractiveMdUnderline: true;
        InteractiveSm: true;
        InteractiveSmUnderline: true;
        h1: false;
        h2: false;
        h3: false;
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        body1: false;
        body2: false;
    }
}
