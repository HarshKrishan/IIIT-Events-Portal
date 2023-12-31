"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>IIITD Events Portal</title>
        <meta name="description" content="Events Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        
          <Provider store={store}>{children}</Provider>
        
      </body>
    </html>
  );
}
