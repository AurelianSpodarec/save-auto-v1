import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthProvider from 'context/AuthContext/AuthProvider';
import DashboardProvider from 'context/DashboardContext/DashboardProvider';

import App from './views/App';

import './../src/styles/styles.scss';
import GuideProvider from 'pages/Site/SiteIndex/CreateSiteGuide/contextGuide';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
        
            <DashboardProvider>
            <GuideProvider>
                <App />
            </GuideProvider>
            </DashboardProvider>

    </AuthProvider>
    </QueryClientProvider>
    </BrowserRouter>
    </React.StrictMode>,
)
