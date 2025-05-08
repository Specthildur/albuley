import { NextResponse } from "next/server";

const authRoutes = ["/sign-in", "/sign-up"];

export default async function authMiddleware(request) {
  const pathName = request.nextUrl.pathName;
  const isAuthRoute = authRoutes.includes(pathName);
}
