import { addPost, deletePost, getPosts, updatePost } from "@/lib/posts";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const posts = getPosts();
    return NextResponse.json({ message: "Ok", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
export const POST = async (req: Request, res: Response) => {
  const { title, desc } = await req.json();
  try {
    const post = { title, desc, date: new Date(), id: Date.now().toString() };
    addPost(post);
    return NextResponse.json({ message: "Ok", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
export const DELETE = async (req: Request, res: Response) => {
  const { id } = await req.json();
  try {
    const post = deletePost(id);
    return NextResponse.json({ post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

