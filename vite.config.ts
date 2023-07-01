import {defineConfig} from 'vite'
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react'
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

export default defineConfig({
    base: '/app',
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        port: 3000,
        watch: {
            usePolling: true
        }
    },
    resolve: {
        alias: {
            assets: `${path.resolve(__dirname, "./src/assets/")}`,
            config: `${path.resolve(__dirname, "./src/config/")}`,
            context: `${path.resolve(__dirname, "./src/context/")}`,
            database: `${path.resolve(__dirname, "./src/database/")}`,
            hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
            interfaces: `${path.resolve(__dirname, "./src/interfaces/")}`,
            services: `${path.resolve(__dirname, "./src/services/")}`,
            styles: `${path.resolve(__dirname, "./src/styles/")}`,
            utils: `${path.resolve(__dirname, "./src/utils/")}`,
            
            layout: `${path.resolve(__dirname, "./src/views/_layout/")}`,
            atoms: `${path.resolve(__dirname, "./src/views/atoms/")}`,
            molecules: `${path.resolve(__dirname, "./src/views/molecules/")}`,
            pages: `${path.resolve(__dirname, "./src/views/pages/")}`,
        }
    },
});
