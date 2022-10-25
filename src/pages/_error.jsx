import Footer from "../components/footer";
import Header from "../components/header";
import Error from "../components/errorpage";

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Box my="100px">
        <Error />
      </Box>
      <Footer />
    </>
  );
}
