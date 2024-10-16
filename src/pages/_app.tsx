import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <AppCacheProvider>
        <ThemeProvider {...{ theme }}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AppCacheProvider>
    </React.Fragment>
  );
}
