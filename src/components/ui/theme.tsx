"use client"
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#202a2f',
            contrastText: '#f7f7f7',
        },
        secondary: {
            main: '#ffb300',
            contrastText: '#202a2f',
        }
    },
    typography: {
        h1: {
            lineHeight: 1.2,
            fontSize: 60,
            fontWeight: 600
        },
        h2: {
            lineHeight: 1.2,
            fontSize: 44,
            fontWeight: 600
        },
        h3: {
            lineHeight: 1.2,
            fontSize: 38,
            fontWeight: 600
        },
        h4: {
            lineHeight: 1.2,
            fontSize: 32,
            fontWeight: 600
        },
        h5: {
            lineHeight: 1.2,
            fontSize: 26,
            fontWeight: 600
        },
        h6: {
            lineHeight: 1.2,
            fontSize: 20,
            fontWeight: 600
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 12
        },
        fontFamily: "'Inter', sans-serif"
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    body1: 'p',
                    body2: 'span',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused fieldset': {
                        borderColor: '#808080',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    // color: '#022946',
                    fontSize: 14
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    height: '0',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: '#022946',
                    fontSize: 14,
                    ':disabled': {
                        backgroundColor: '#00000013'
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    '::after': {
                        borderTop: 'thin solid #E6E6E8'
                    },
                    '::before': {
                        borderTop: 'thin solid #E6E6E8'
                    },
                }
            }
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: '35px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginRight: '.5em'
                }
            }
        }

    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 800,
            md: 1032,
            lg: 1200,
            xl: 1400,
        }
    }

});

const responsiveTheme = responsiveFontSizes(theme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
    factor: 1.5,
    variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'],
});

export default responsiveTheme;

