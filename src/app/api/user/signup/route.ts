import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../db"

export async function POST(req: NextRequest) {
    const body = await req.json();
    const User = await prisma.user.create({
        data: {
            Email: body.Email,
            FirstName: body.FirstName,
            LastName: body.LastName,
            UserName: body.UserName,
            Password: body.Password,
            ConfirmPassword: body.ConfirmPassword
        }
    })
        return NextResponse.json("error");
}