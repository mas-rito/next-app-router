import { getToken } from "next-auth/jwt";
import {
  NextMiddleware,
  NextRequest,
  NextFetchEvent,
  NextResponse,
} from "next/server";

const onlyAdminPage = ["/admin", "/dashboard"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", req.url);
        return NextResponse.redirect(url);
      }
      if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
      return middleware(req, next);
    }
    return middleware(req, next);
  };
}