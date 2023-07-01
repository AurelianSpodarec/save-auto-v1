export interface AuthRegister {
    email: string;
    password1: string;
    password2: string;
}

export interface AuthLogin {
    email: string;
    password: string;
}

export interface AuthPasswordChange {
    new_password1: string;
    new_password2: string;
    uid: string;
    token: string;
}

export interface AuthPasswordReset {
    email: string;
}
