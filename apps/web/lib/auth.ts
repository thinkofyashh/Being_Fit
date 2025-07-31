import { NextAuthOptions } from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import { prisma } from "../../../packages/db/src"
import bcrypt from "bcrypt";

type CredentialsProviderProps={
    email:string
    name:string,
    password:string
    mode: "signup" | "login"
}
export const authConfig:NextAuthOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{
                    label:"Email Address",
                    type:"email",
                    placeholder:"Enter Your Email"

                },name:{
                    label:"Name",
                    type:"text",
                    placeholder:"Enter Your Name"

                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your Password",
                  },
                  mode:{
                    label:"Mode",
                    type:"text",
                  }
            },async authorize(credentials){
                if(!credentials|| !credentials?.email || !credentials?.mode || !credentials?.password) return null
                const {email,name,password,mode}=credentials as CredentialsProviderProps;
                if(!email  || !password || !mode){
                    return null;
                }

                const existingUser=await prisma.user.findUnique({
                    where:{
                        email:email
                    },select:{
                        id:true,
                        email:true,
                        name:true,
                        password:true
                    }
                })

                if(mode=="login"){
                    if(!existingUser) return null;
                    
                        const isValid = await bcrypt.compare(
                            password,existingUser.password
                        )
                        if(isValid){
                            return {
                                id:existingUser.id.toString(),
                                name:existingUser.name,
                                email:existingUser.email
                            }
                        }else{
                            return null;
                        }
    
                    
                }
                if(mode=="signup"){

                    if(!credentials.name) return null;
                    try{
                        const hashedPassword=await bcrypt.hash(password,10);
                        const user=await prisma.user.create({
                            data:{
                                name:name,
                                email:email,
                                password:hashedPassword,
    
    
                            }
                        })
                        return {
                            id:user.id.toString(),
                            name:user.name,
                            email:user.email
    
                        }
                    }catch(e){
                        console.log(e);
                        return null;
                    }
                    

                }
                return null;

            }
        })

    ],secret:process.env.JWT_SECRET || "secret",
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.sub=user.id
            }
            return token
        },
        async session({token,session}:any){
            session.user.id=token.sub
            return session;
        }
    }


}



  



