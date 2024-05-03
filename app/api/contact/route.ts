import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await req.body;
        console.log(body);
        return NextResponse.json({ message: "Request was a success!!!" }, { status: 200 });
    } catch (error) {
        console.error("Error parsing request body:", error);
        return NextResponse.json({ error: "Invalid JSON format in request body" }, { status: 400 });
    }
}
