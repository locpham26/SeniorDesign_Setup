import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@styles";
// import "styles/app.less";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default MyApp;
