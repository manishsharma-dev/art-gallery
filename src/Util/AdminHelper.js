import { redirect } from "react-router-dom";

export function getToken() {
  const token = localStorage.getItem("_t");
  return token || null;
}

export function checkAdminAuthLoader(){
    const token = getToken();
    if(!token){
        return redirect("/admin/login");
    }
    return null;
}

