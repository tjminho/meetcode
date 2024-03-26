import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google";
import { connectToDb } from "./util";
import { User } from "./models";

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({ 
  providers: [ 
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),

    KakaoProvider({ 
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),

    GitHub({ 
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    ],
    callbacks:{
      async signIn(user, account, profile) {
        console.log(user, account, profile);
        if(account.provider === "github"){
          connectToDb();
          try{

            //DB체크
            const user = await User.fineOne({ email: profile.email });

            //email이 없으면 DB에 생성
            if(!user) {
              const newUser = new User({
                name: profile.name,
                email: profile.email,
                image: profile.image,
              });
              await newUser.save();
            }

          }catch(err){
            console.log(err);
            return false;
          }
        }
        return true;
      }
    }
});