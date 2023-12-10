import { NextResponse } from "next/server";

export const authConfig = {
    providers:[],
    pages:{
        signIn:"/login"
    },
    callbacks:{
        authorized({auth, request}:any){
            const isLoggedIn = auth?.user
            const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
            if(isOnDashboard){
                if(isLoggedIn) return true
                return false
            }
            else if(isLoggedIn){
                console.log("Loggiinnng")
                return NextResponse.redirect(new URL("/dashboard", request.url))
            }
            return true
        }
    }
}