import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        console.log("Middleware called with", req.nextauth)
        if (req.nextUrl.pathname === '/api/admin' && req.nextauth.token?.role !== 'admin') {
            return new NextResponse("You are not authorized to access this")
        }
    },
    {
        callbacks: {
            authorized: (params) => {
                console.log("Middleware authorized with", params)
                return !!params.token
            },
            //   authorized: ({ token }) => token?.role === "admin",
        },
    }
)

export const config = { matcher: ["/files", "/users"] }
// export const config = { matcher: ["/api/admin", "/files", "/users"] }