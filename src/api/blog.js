import ins from "./require";

 export async function Getblog() {
  return await ins.get("/api/blog");
    
 }
 Getblog()