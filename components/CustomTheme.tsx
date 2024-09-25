"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { green, purple } from "@mui/material/colors";

export default function CustomTheme({ ...Props }) {
  const theme1 = createTheme({
    // palette: {
    //   primary: {
    //     main: "#635bff",
    //   },
    //   secondary: green,
    //   action: {
    //     selectedOpacity: 0.1,
    //   },
    // },
    // typography: {
    //   fontFamily: "Cairo",
    // },
    // components: {
    //   MuiListItemButton: {
    //     styleOverrides: {
    //       root: ({ ownerState }) => ({
    //         ...(ownerState.selected === true && {}),
    //       }),
    //     },
    //   },
    // },
  });
  return <ThemeProvider theme={theme1}>{Props.children}</ThemeProvider>;
}
