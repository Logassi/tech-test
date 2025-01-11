import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, userName, password } = await request.json();

    // Validate the required fields
    //
    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing required data" },
        { status: 400 }
      );
    }

    const emailToLowercase = email.toLowerCase();

    const findUserEmail = await prisma.user.findUnique({
      where: { email: emailToLowercase },
    });

    if (findUserEmail) throw new Error("Email Already Signed up");

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    // Save the user to the database
    const user = await prisma.user.create({
      data: {
        email: emailToLowercase,
        userName,
        password: hashPassword,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.log("Error occurred:", error);

    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
