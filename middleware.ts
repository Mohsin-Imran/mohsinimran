import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") ?? "").split(":")[0].toLowerCase()
  const forwarded = (request.headers.get("x-forwarded-proto") ?? "").split(",")[0].trim().toLowerCase()
  const proto = forwarded || request.nextUrl.protocol.replace(":", "")
  const onSite = hostname === "mohsinimran.online" || hostname === "www.mohsinimran.online"

  if (onSite && (hostname === "www.mohsinimran.online" || proto === "http")) {
    const destination = new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, "https://mohsinimran.online")
    return NextResponse.redirect(destination, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}
