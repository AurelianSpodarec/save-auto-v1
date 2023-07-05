// ============================================================
// API User
// ============================================================
import FetchAutosite from "../fetch/FetchAutosite"
  

export async function getUser(): Promise<any> {
    return FetchAutosite(`user/user/`, "GET")
}

export async function getUserDetails(): Promise<any> {
    return FetchAutosite('user/detail/customer/', "GET")
}
