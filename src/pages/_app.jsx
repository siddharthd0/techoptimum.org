import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Fonts from "../components/font";
import { Analytics } from "@vercel/analytics/react";

import Header from "../components/header";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
        <Header />
        <Component {...pageProps} />
        <Footer />
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp;
