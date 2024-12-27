import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate the required fields
    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing required data" },
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 } // Unauthorized
      );
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const payload = {
      email,
      userName: user.userName,
    };

    const token = sign(payload, process.env.SECRET_API_KEY as string, {
      expiresIn: "15hr",
    });

    return NextResponse.json(
      {
        message: "Login successful",
        user: { email: user.email, userName: user.userName },
        access_token: token,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error occurred during login:", error);

    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
