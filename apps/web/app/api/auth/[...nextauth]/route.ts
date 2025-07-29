import NextAuth from "next-auth"
import { NextResponse } from "next/server"
import { authConfig } from "../../../../lib/auth";


const  handler=NextAuth(authConfig)

export const GET=handler;
export const POST=handler ;
