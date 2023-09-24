import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { createContext } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { json } from "@remix-run/node";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "E-Cars App",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader() {
  return json({
    ENV: {
      TINY_MCE_API_KEY: process.env.TINY_MCE_API_KEY,
    },
  });
}

export const RootContext = createContext({
  TINY_MCE_API_KEY: "",
});

export default function App() {
  const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <RootContext.Provider
          value={{
            TINY_MCE_API_KEY: data.ENV.TINY_MCE_API_KEY,
          }}
        >
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </RootContext.Provider>
      </body>
    </html>
  );
}
