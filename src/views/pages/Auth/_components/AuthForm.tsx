function AuthForm({ children }:AuthForm) {
    return (
        <form onSubmit={(e) => e.preventDefault()} action="#" method="POST">
            {children}
        </form>
    )
}

export default AuthForm;

interface AuthForm {
    children: React.ReactNode;
}