import type { ActionArgs } from "@remix-run/node";
import { logout } from "~/services/AuthService";
import { requireUserId } from "~/services/UserService";

export async function action({ request }: ActionArgs) {
  try {
    return await logout(request);
  } catch (errors) {
    console.log(errors);
  }
}
export async function loader({ request }: ActionArgs) {
  return await requireUserId(request);
}

export default function Logout() {
  return <div></div>;
}
