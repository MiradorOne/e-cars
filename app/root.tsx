import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { json, LoaderArgs } from "@remix-run/node";
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
import { $Enums } from "@prisma/client";
import { getUser } from "~/services/UserService";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "E-Cars App",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    ENV: {
      TINY_MCE_API_KEY: process.env.TINY_MCE_API_KEY,
    },
    user: await getUser(request),
  });
}

export const RootContext = createContext({
  TINY_MCE_API_KEY: "",
});

export const AuthUserContext = createContext<{
  id: string;
  email: string;
  fullName: string;
  role: $Enums.ROLE;
} | null>(null);

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
          <AuthUserContext.Provider value={data.user}>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </AuthUserContext.Provider>
        </RootContext.Provider>
      </body>
    </html>
  );
}
