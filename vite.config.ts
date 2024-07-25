import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true, // Add a types entry to package.json
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es'],
            name: 'AndasUILibrary',
            fileName: (format) => `andas-ui-library.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@mui/material'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI',
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
});
