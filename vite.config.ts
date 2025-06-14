import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 3006,
        host: '0.0.0.0',
        proxy: {
            '/api': process.env.VITE_API_URL || 'http://localhost:18889',
        }
    },
});