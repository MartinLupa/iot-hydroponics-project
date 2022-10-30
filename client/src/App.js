import { Box, createTheme, ThemeProvider } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { LightSwitch } from "./components/LightSwitch";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  colors: {
    switch: {
      on: "#8CBBE9",
      off: "#ECECEC",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={(theme) => ({
            body: {
              width: "100%",
              fontFamily: theme.typography.fontFamily,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            },
          })}
        />
        <h1 align="center">IoT Hydroponics Project</h1>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <LightSwitch pinId={"1"} room={"ROOM 1"} />
          <LightSwitch pinId={"2"} room={"ROOM 2"} />
          <LightSwitch pinId={"3"} room={"ROOM 3"} />
          <LightSwitch pinId={"4"} room={"ROOM 4"} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
