import { Pclient } from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";


export const getCurrentAdmin = async ()=>{
    try {
        const user= await getCurrentUser();
    
        if (!user) {
          return null;
        }
    
        const currentadmin = await Pclient.admin.findUnique({
          where: {
            email: user.email as string
          }
        });
    
        if (!currentadmin) {
          return null;
        }
    
        return currentadmin;
      } catch (error: any) {
        return null;
      }
    }