import { SessionProvider } from "next-auth/react";
import Layout from "@layouts/Layout";
import "@styles/globals.css";
import { Provider } from "react-redux";
import store from "src/store";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
