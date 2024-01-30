import connectToDB from "@/dbConnect/dbConnect";
import Url from "@/Models/urls";
import generateCode from "@/utils/Random";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();

    const { url } = reqBody;
    const randomBytes = generateCode(10);
    const modifiedUrl = `${process.env.URL}/${randomBytes}`;
    const newUrl = new Url({
      url: url,
      modifiedUrl,
      uniqueCode: randomBytes,
      createdAt: Date.now(),
    });

    await newUrl.save();
    return NextResponse.json(
      { success: true, msg: "successfully url generated", url: modifiedUrl },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
  }
}
