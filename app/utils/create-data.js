import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { auth } from "@/app/utils/auth";

const prisma = new PrismaClient();

export async function createUser(id) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    console.log(session);
    try {
        await prisma.user_data.create({
            data: {
                id: session.user.id,
            },
        });
    } catch (error) {}
}
