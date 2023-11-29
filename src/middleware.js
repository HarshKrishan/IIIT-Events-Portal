import { NextResponse } from "next/server";


export function middleware(request) {
    if(request.nextUrl.pathname==='/api/getAllEvents' || request.nextUrl.pathname.startsWith('/api/auth/')){
        return;
    }
    const authtoken = request.cookies.get("__Secure-next-auth.session-token");

    if (authtoken || request.nextUrl.pathname === "/login") {
        console.log("cookie found")

      return NextResponse.next();
    }

    
  return NextResponse.redirect(new URL("/login", request.url));
}
export const config = {
  matcher: ["/dashboardAdmin", "/manageUsers","/api/*"],
};
