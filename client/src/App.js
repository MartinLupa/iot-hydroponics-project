import { createTheme, ThemeProvider } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { PublicRouter } from "./routers/PublicRouter";

const customTheme = createTheme({
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
    palette: {
      darkGreen: "#062315",
      cyprus: "#06373A",
      eden: "#1F5F5B",
      salem: "#159947",
      oceanGreen: "#49B265",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <GlobalStyles
          styles={(theme) => ({
            body: {
              margin: 0,
              padding: 0,
              width: "100%",
              height: "100vh",
              fontFamily: theme.typography.fontFamily,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            },
          })}
        />
        <PublicRouter theme={customTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
