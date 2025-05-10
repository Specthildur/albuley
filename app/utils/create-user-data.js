import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { auth } from "@/app/utils/auth";

const prisma = new PrismaClient();

export default async function createUserData(id) {
  if (!id) {
    return null;
  }
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  try {
    await prisma.user_data.create({
      data: {
        id: session.user.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
