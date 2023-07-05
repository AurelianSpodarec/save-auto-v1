import { Navigate, useRoutes } from "react-router-dom";
import { configPages } from "config/configPages";

// NOT ALLOWED
import Forbidden from "pages/Forbidden/Forbidden";
import NotFound from "pages/NotFound/NotFound";

// LAYOUTS
import LayoutAuth from "pages/_layout/LayoutAuth";
import LayoutDashboard from "pages/_layout/LayoutDashboard";

// DASHBOARD
import HomeIndex from "pages/Home/HomeIndex";

// Site Show
import SiteIndex from "pages/Site/SiteIndex/SiteIndex";
import SiteShowLayout from "pages/Site/SiteShow/SiteShowLayout";
    import SiteOverviewIndex from "pages/Site/SiteShow/_sections/Overview/SiteOverviewIndex";
    import SiteMembersIndex from "pages/Site/SiteShow/_sections/Members/SiteMembersIndex";
    import PersonaIndex from "pages/Site/SiteShow/_sections/Persona/PersonaIndex";
    import SiteApperanceIndex from "pages/Site/SiteShow/_sections/Apperance/SiteApperanceIndex";
    import SiteSEOIndex from "pages/Site/SiteShow/_sections/SEO/SiteSEO";
        import SiteSEOImage from "pages/Site/SiteShow/_sections/SEO/_sections/SEOImage";
        import SiteSEOMeta from "pages/Site/SiteShow/_sections/SEO/_sections/SEOMeta";
        import SiteSEOSitemap from "pages/Site/SiteShow/_sections/SEO/_sections/SEOSitemap";
        import SiteSEOSocial from "pages/Site/SiteShow/_sections/SEO/_sections/SEOSocial";
    import SitePostIndex from "pages/Site/SiteShow/_sections/Posts/PostIndex";
    import SiteSettingsIndex from "pages/Site/SiteShow/_sections/Settings/SettingsIndex";
    import SiteBillingIndex from "pages/Site/SiteShow/_sections/Billing/BillingIndex";
    import SitePublishingIndex from "pages/Site/SiteShow/_sections/Publishing/PublishingIndex";
    import SiteIntegregationsIndex from "pages/Site/SiteShow/_sections/Integregations/SiteIntegregations";

// ACCOUNT
import UserAccountIndex from "pages/UserAccount/UserAccountIndex";
import ProfileIndex from "pages/UserAccount/Profile/ProfileIndex";
import TeamsIndex from "pages/UserAccount/Teams/TeamsIndex";
import BillingIndex from "pages/UserAccount/Billing/BillingIndex";
import BillingInvoice from "pages/UserAccount/Billing/BillingInvoice";

// AUTH
import Login from "pages/Auth/Login";
import Register from "pages/Auth/Register/Register";
import ForgottenPassword from "pages/Auth/ForgottenPassword";
import RegisterConfirm from "pages/Auth/Register/RegisterConfirm";
import ResetPassword from "pages/Auth/ResetPassword/ResetPassword";
import ResetPasswordConfirm from "pages/Auth/ResetPassword/ResetPasswordConfirm";
import useAuth from "context/AuthContext/useAuth";

function CustomRoutes() {
    const { isAuthenticated } = useAuth()

    let routes = useRoutes([
        {
            path: configPages.DASHBOARD.path,
            element: isAuthenticated ? <LayoutDashboard /> : <Navigate to={configPages.DASHBOARD.path + configPages.AUTH.path + configPages.LOGIN.path} replace />,
            children: [
                {
                    path: "",
                    element: <Navigate to="sites" replace />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.HOME.path,
                    element: <HomeIndex />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.TEAMS.path,
                    element: <TeamsIndex />
                },
                // ====================================================
                // CustomRoutes: Site 
                // ====================================================
                {
                    path: configPages.DASHBOARD.path + configPages.SITES.path,
                    element: <SiteIndex />
                },
                {
                    path: configPages.DASHBOARD.path + `${configPages.SITES.path}/:id`,
                    element: <SiteShowLayout />,
                    children: [
                        {
                            path: "",
                            element: <SiteOverviewIndex />
                        },
                        {
                            path: "seo",
                            element: <SiteSEOIndex />,
                            children: [
                                {
                                    path: "",
                                    element: <Navigate to="meta" replace />
                                },
                                {
                                    path: "meta",
                                    element: <SiteSEOMeta />
                                },
                                {
                                    path: "social",
                                    element: <SiteSEOSocial />
                                },
                                {
                                    path: "image",
                                    element: <SiteSEOImage />
                                },
                                {
                                    path: "sitemap",
                                    element: <SiteSEOSitemap />
                                },
                            ]
                        },
                        {
                            path: "billing",
                            element: <SiteBillingIndex/>
                        },
                        // {
                        //     path: "members",
                        //     element: <SiteMembersIndex />
                        // },
                        // {
                        //     path: "integregations",
                        //     element: <SiteIntegregationsIndex />
                        // },
                        {
                            path: "apperance",
                            element: <SiteApperanceIndex />
                        },
                        // POST
                        {
                            path: "posts",
                            element: <SitePostIndex />,
                        },
                        // Other
                        // {
                        //     path: "publishing",
                        //     element: <SitePublishingIndex />
                        // },
                        // {
                        //     path: "persona",
                        //     element: <PersonaIndex />
                        // },
                        {
                            path: "settings",
                            element: <SiteSettingsIndex />
                        }
                    ]
                },
                // ====================================================
                // CustomRoutes: Self Service
                // ====================================================
                {
                    path: configPages.DASHBOARD.path + configPages.MY_ACCOUNT.path,
                    element: <UserAccountIndex />,
                    children: [
                        {
                            path: configPages.DASHBOARD.path + configPages.MY_ACCOUNT.path + configPages.PROFILE.path,
                            element: <ProfileIndex />
                        },
                        {
                            path: configPages.DASHBOARD.path + configPages.MY_ACCOUNT.path + configPages.BILLING.path,
                            element: <BillingIndex />,
                            children: [
                                {
                                    path: configPages.DASHBOARD.path + configPages.MY_ACCOUNT.path + configPages.BILLING.path + configPages.BILLING_INVOICE.path,
                                    element: <BillingInvoice />
                                }
                            ]
                        },
                    ]
                },
                // ====================================================
                // CustomRoutes: Something Went Wrong
                // ====================================================
                {
                    path: configPages.DASHBOARD.path + configPages.NOT_FOUND.path,
                    element: <NotFound />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.FORBIDDEN.path,
                    element: <Forbidden />
                },
            ]
        },
        // ====================================================
        // CustomRoutes: Authentication
        // ====================================================
        {
            path: configPages.DASHBOARD.path + configPages.AUTH.path,
            element:  isAuthenticated ? <Navigate to={configPages.DASHBOARD.path} replace /> : <LayoutAuth />,
            children :[
                {
                    path: "",
                    element: <Navigate to="app/auth/login" replace />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.AUTH.path + configPages.LOGIN.path,
                    element: <Login />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.AUTH.path + configPages.REGISTER.path,
                    element: <Register />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.AUTH.path + configPages.REGISTER_CONFIRM.path,
                    element: <RegisterConfirm />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.AUTH.path + configPages.FORGOTTEN_PASSWORD.path,
                    element: <ForgottenPassword />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.AUTH.path + configPages.RESET_PASSWORD.path,
                    element: <ResetPassword />
                },
                {
                    path: configPages.DASHBOARD.path + configPages.AUTH.path + configPages.RESET_PASSWORD.path + configPages.PASSWORD_CHANGE_CONFIRMATION,
                    element: <ResetPasswordConfirm />
                },
            ]
        },
    ]);

    return routes;
}

export default CustomRoutes;
