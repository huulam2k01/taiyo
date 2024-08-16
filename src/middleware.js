// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Bỏ qua các yêu cầu tới các tệp tĩnh
  if (
    pathname.startsWith("/_next/static/") ||
    pathname === "/manifest.webmanifest"
  ) {
    return NextResponse.next();
  }

  // Xử lý các yêu cầu khác
  const response = NextResponse.next();
  response.cookies.set("pathname", pathname);
  return response;
}

export const config = {
  matcher: "/:path*",
};
