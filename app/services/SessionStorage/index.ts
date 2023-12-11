import { createCookieSessionStorage } from "@remix-run/node";

const ONE_MONTH = 60 * 60 * 24 * 30;

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("Session secret not configured");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "e-cars-session",
    secrets: [sessionSecret],
    secure: process.env.NODE_ENV === "production",
    maxAge: ONE_MONTH,
    expires: new Date(Date.now() + ONE_MONTH * 1000),
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  },
});

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export { storage, getUserSession };
