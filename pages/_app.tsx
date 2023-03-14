import { AppProps } from "next/app";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import "../styles.css";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#94a3b8", // main text color
    800: "#fff", //titles / white color
    700: "#172032", // secondary bg
    600: "#0f172a", //dark background color
  },
};

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "600",
      },
      sizes: {
        lg: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
    },
  },

  colors,
});
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
