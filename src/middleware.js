import { NextResponse } from "next/server";


export function middleware(request) {
    if(request.nextUrl.pathname==='/api/getAllEvents' || request.nextUrl.pathname.startsWith('/api/auth/')){
        return;
    }
    const authtoken = request.cookies.get("next-auth.session-token");

    if (authtoken) {
        return;
    }

    
  return NextResponse.redirect(new URL("/login", request.url));
}
export const config = {
  matcher: ["/dashboardAdmin", "/manageUsers","/api/:path*"],
};
