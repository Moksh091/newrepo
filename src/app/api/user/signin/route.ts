import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../../db";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const User = await prisma.user.findFirst({
        where: {
            Email: body.Email,
        }        
    })
    if(User?.Password !== body.Password){
    return NextResponse.redirect("Error");
    }
    
     return NextResponse.json("Logged In")

}