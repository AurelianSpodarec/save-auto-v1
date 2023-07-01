import { useEffect, useState, useMemo } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { configPages } from "config/configPages";
import useAuth from "context/AuthContext/useAuth";
import useForm from 'hooks/useForm';

import Input from "atoms/Input/Input";
import Button from "atoms/Button/Button";

import { AuthCard, AuthForm, AuthSection } from "./_components";

interface AuthErrors {
    email: "",
    password: "",
    non_field_errors: ""
}
// http://localhost:3000/app/auth/login?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzNjIwOTExLCJpYXQiOjE2ODgwNjg5MTEsImp0aSI6IjRjYzZiY2U3NjM5ZjQ2NTE4NjdlY2QzMTczOWY5MDgzIiwidXNlcl9pZCI6NX0.o-aw1dcKDvfMmbkzbEjG-G8skI_OIATyELQGgvWHwN4

function Login() {
    const { login, getTokenFromLocalStorage } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState<AuthErrors>({
        email: "",
        password: "",
        non_field_errors: ""
    });
    
    const form = useForm(null, {
        email: "",
        password: ""
    })

    const token = useMemo(() => getTokenFromLocalStorage(), [getTokenFromLocalStorage])
    
    async function handleLogin() {
        const res = await login({
            email: form.values.email, 
            password: form.values.password
        })
        
        setError(res)
    }
    
    useEffect(() => {
        if(!error && token ) {
            navigate("/app")
        }
    }, [error, token])

    return (
        <AuthCard title="Sign in to your account">

            <AuthForm>
                {error?.non_field_errors && <div className="text-red-500 mb-4">{error?.non_field_errors}</div>}

                <AuthSection className="space-y-6">
                    <div>
                        <Input 
                            label="Email"
                            onChange={(e:any) => form.handleChange(e)} 
                            value={form.values.email} 
                            placeholder="Your email"
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email" 
                            required 
                        />
                        {error?.email && <div className="mt-2 text-xs text-red-500">{error?.email}</div>}
                    </div>

                    <div>
                        <Input 
                            label="Password"
                            onChange={(e:any) => form.handleChange(e)} 
                            value={form.values.password} 
                            placeholder="Your password"
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password" 
                            required 
                        />
                        {error?.password && <div className="mt-2 text-xs text-red-500">{error?.password}</div>}
                    </div>
                </AuthSection>

                <Button onClick={() => handleLogin()} type="submit" block>Log In</Button>
            </AuthForm>
                
        </AuthCard>
    )
}

export default Login;
