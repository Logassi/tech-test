import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { IUser } from "./stores/user.store";

const protectedRoutes = ["/dashboard", "/create-quiz", "/do-quiz"];

const guestRoutes = ["/login", "/register"];

export default async function middleware(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    const isProtected = protectedRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );

    const isGuestRoute = guestRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );

    const token = cookieStore.get("access_token")?.value || "";

    //TO REDIRECT user to login
    if (isProtected && !token) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    const user: IUser = jwtDecode(token);

    // Will Redirect, if user trying to access "/dashboard", but have not login
    if (isProtected && req.nextUrl.pathname.startsWith("/dashboard") && !user) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    // Will Redirect, if user trying to access "/register" or "/login", but user already login
    if (isGuestRoute && user) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    // if (isProtected && req.nextUrl.pathname.startsWith("/login") && user) {
    //   return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    // }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login/:path*", "/register/:path*"],
};
