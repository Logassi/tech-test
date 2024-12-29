import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { IUser } from "./stores/user.store";

const protectedRoutes = ["/dashboard", "/create-quiz", "/take-quiz"];
const guestRoutes = ["/register", "/", "/login"];

export default async function middleware(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const isProtected = protectedRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );
    const isGuestRouted = guestRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );

    const token = cookieStore.get("access_token")?.value || "";

    let user: IUser | null = null;
    // const user: IUser = jwtDecode(token);

    if (token) {
      try {
        user = jwtDecode<IUser>(token);
      } catch (error) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
      }
    }

    // Not login
    if (isProtected && !user) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    if (!isProtected && isGuestRouted && user) {
      // if (req.nextUrl.pathname === "/dashboard") {
      //   return NextResponse.next(); // Avoid redirection loop
      // }

      // if (req.nextUrl.pathname !== "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
      // }
    }
    // if (
    //   isProtected &&
    //   req.nextUrl.pathname.startsWith("/dashboard") &&
    //   !token
    // ) {
    //   return NextResponse.redirect(new URL("/", req.nextUrl));
    // }

    // if (
    //   isProtected &&
    //   req.nextUrl.pathname.startsWith("/create-quiz") &&
    //   !token
    // ) {
    //   return NextResponse.redirect(new URL("/register", req.nextUrl));
    // }

    // if (
    //   isProtected &&
    //   req.nextUrl.pathname.startsWith("/take-quiz") &&
    //   !token
    // ) {
    //   return NextResponse.redirect(new URL("/login", req.nextUrl));
    // }
    // if (isProtected && user) {
    //   return NextResponse.redirect(new URL("/", req.nextUrl));
    // }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/create-quiz/:path*",
    "/take-quiz/:path*",
    "/register/:path*",
    "/login/:path*",
  ],
};
