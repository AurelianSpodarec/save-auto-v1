// ============================================================
// API Auth
// ============================================================
import FetchAutosite from "../fetch/FetchAutosite"
import { AuthLogin, AuthRegister } from "interfaces/Auth"
  

export async function authLogin(data:AuthLogin): Promise<any> {
    return FetchAutosite(`user/login/`, "POST", data)
}

export async function authLogout(): Promise<any> {
    return FetchAutosite(`user/logout/`, "POST")
}

export async function authRegister(data:AuthRegister): Promise<any> {
    return FetchAutosite(`user/registration/`, "POST", data)
}

export async function authPasswordReset(data:any): Promise<any> {
    return FetchAutosite(`user/password/reset/`, "POST", data)
}

export async function authPasswordResetConfirm(data:any): Promise<any> {
    return FetchAutosite(`user/password/reset/confirm`, "POST", data)
}

export async function authPasswordChange(data:AuthRegister): Promise<any> {
    return FetchAutosite(`user/password/change`, "POST", data)
}
