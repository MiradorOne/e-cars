import React, { createContext } from "react";
import { Layout } from "~/components/layout";
import HomePage from "~/pages/HomePage";
import { json, type LoaderArgs } from "@remix-run/node";
import { getUser } from "~/services/UserService";
import { useLoaderData } from "@remix-run/react";
import { $Enums } from "@prisma/client";

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export const AuthUserContext = createContext<{
  id: string;
  email: string;
  fullName: string;
  role: $Enums.ROLE;
} | null>(null);

export default function Index() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <AuthUserContext.Provider value={user}>
      <Layout>
        <HomePage />
      </Layout>
    </AuthUserContext.Provider>
  );
}
