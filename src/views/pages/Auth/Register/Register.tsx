import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

import { authRegister } from "services/apis/autosite/requests/auth";
import { AuthRegister } from 'src/interfaces/Auth';

import { AuthCard, AuthFooter, AuthForm, AuthSection } from "../_components";
import Input from "atoms/Input/Input";
import Button from "atoms/Button/Button";
import useForm from 'hooks/useForm';


function Register() {

    const form = useForm(null, {
        email: "register@gmail.com",
        password1: "test123",
        password2: "test123",
    })

    async function fetchRegister() {
        const res = await authRegister(form.values)
        console.log(res)
    }

    return (
       <>
            <AuthCard title="Create Your <span class='text-[#08A593]'>Account</span>">

                <AuthForm>
                    <AuthSection>
                        <div className="space-y-6 mb-6">
                            <Input 
                                label="Email"
                                value={form.values.email}
                                onChange={(e:any) => form.handleChange(e)} 
                                placeholder="Enter your email"
                                id="email"
                                name="email" 
                                type="email" 
                                autoComplete="email" 
                                required 
                            />
                            <Input 
                                label="Password"
                                value={form.values.password1}
                                onChange={(e:any) => form.handleChange(e)} 
                                placeholder="Enter your password"
                                id="password"
                                name="password" 
                                type="password" 
                                required 
                            />
                            <Input 
                                label="Confirm Password"
                                value={form.values.password2}
                                onChange={(e:any) => form.handleChange(e)} 
                                placeholder="Confirm your password"
                                id="confirmPassword"
                                name="confirmPassword" 
                                type="password" 
                                required 
                            />
                        </div>

                        <div className="flex mt-2">
                            <div className="flex h-6 items-center">
                                <input
                                    id="comments"
                                    aria-describedby="comments-description"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                            </div>

                            <div className="ml-3 text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">
                                    <p id="comments-description" className="font-['Poppins'] text-gray-500">
                                    Creating an account means you’re okay with our <Link to="/" className="text-[#1A73E8]">Terms of Service</Link>, <Link to="/" className="text-[#1A73E8]">Privacy Policy</Link>, and our default <Link to="/" className="text-[#1A73E8]">Notification Settings</Link>.           
                                    </p>
                                </label>
                            </div>
                        </div>
                
                    </AuthSection>

                    <Button type="submit" onClick={() => fetchRegister()} block>Create account</Button>
                </AuthForm>


                <AuthFooter>
                    Already have an account{' '}
                    <NavLink to="/app/auth/login" className="font-semibold leading-6 text-[#08A593]">
                        Log in
                    </NavLink>
                </AuthFooter>
            </AuthCard>

        </>
    )
}

export default Register;

