// ============================================================
// API User
// ============================================================
import FetchAutosite from "../fetch/FetchAutosite"
  

export async function getUser(): Promise<any> {
    return FetchAutosite(`user/user/`, "GET")
}
