import { getById } from "@/lib/posts";
import { NextResponse } from "next/server";

export const GET = (
  req: Request,
  res: Response,
  { params: { id } }: { params: { id: string } }
) => {
  const post = getById(id);
  try {
    return NextResponse.json({ message: "Ok", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
export const PUT = (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  console.log({ id });
};
export const DELETE = (
  req: Request,
  { params: { id } }: { params: { id: string } }
) => {
  console.log({ id });
};
