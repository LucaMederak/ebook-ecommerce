import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";

store;
import { store } from "@/store/store";
import { Provider as StoreProvider } from "react-redux";

//styles
import GlobalStyle from "@/theme/globalStyle";

//context
import { PageBlurProvider } from "@/context/PageBlur";
import { DarkModeProvider } from "@/context/DarkMode";
import { CartAlertProvider } from "@/context/CartAlert";

//layout
import Layout from "@/layout/Layout";

//graphql
import { ApolloProvider } from "@apollo/client";
import { client } from "../utils/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ebookcommerce</title>
      </Head>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <DarkModeProvider>
          <PageBlurProvider>
            <StoreProvider store={store}>
              <CartAlertProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </CartAlertProvider>
            </StoreProvider>
          </PageBlurProvider>
        </DarkModeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
