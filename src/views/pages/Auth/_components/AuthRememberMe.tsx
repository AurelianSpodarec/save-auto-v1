import { NavLink } from "react-router-dom";
import { configPages } from "config/configPages";

function AuthRememberMe() {
    return (
        <div className="xs:flex items-center justify-between mt-6">
            <div className="mb-2 xs:mb-0 flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">Remember me</label>
            </div>

            <div className="text-sm leading-6">
                <NavLink to={configPages.DASHBOARD.path + configPages.AUTH.path + configPages.FORGOTTEN_PASSWORD.path} className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</NavLink>
            </div>
        </div>
    )
}

export default AuthRememberMe;
