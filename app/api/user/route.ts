import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "yelele";
// 📌 POST request to handle signup
export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); //body mein string se json leliya

    // Basic validation
    if (!body.username || !body.password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await prisma.users.findUnique({
      where: { username: body.username },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);//hashing
    // Create new user
    const user = await prisma.users.create({
      data: {
        username: body.username,
        password: hashedPassword,
        money:10000
      },
    });

    return NextResponse.json({ message: "User signed up", userId: user.id });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Retrieve username from query parameters
    const username = req.nextUrl.searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    // Find the user by username
    const user = await prisma.users.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json({
      username: user.username,
      money: user.money,
      token,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user details" },
      { status: 500 }
    );
  }
}
