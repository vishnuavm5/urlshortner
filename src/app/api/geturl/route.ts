import { NextResponse, NextRequest } from "next/server";
import connectToDB from "@/dbConnect/dbConnect";
import Url from "@/Models/urls";

connectToDB();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const res = await Url.findOne({ uniqueCode: id });
    return NextResponse.json({ url: res.url, success: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
