import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";
import BootstrapProvider from "@bootstrap";
import { ThemeProvider, theme } from "@styled";
import { persistor, store } from "@global/store";
import { GlobalStyle } from "@assets/css/global.style";
import { PersistGate } from "redux-persist/integration/react";

// CSS import
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

// Fonts Import
import "@fontsource/raleway";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/300-italic.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/500.css";

// Customize Bootstrap
const themeBootstrap = {
  "$container-max-widths": {
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1200px",
  },
};

const FurnsAPP = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Furns :: React Next JS Furniture eCommerce Template</title>
        <meta
          name="description"
          content="React Next JS Furniture eCommerce Template by Hasthemes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <BootstrapProvider theme={themeBootstrap} reset={true}>
          <GlobalStyle />
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </BootstrapProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default FurnsAPP;
