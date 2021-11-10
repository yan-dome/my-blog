import ins from "./require";

 export async function Getbanner() {
  return await ins.get("/api/banner");
    
 }
