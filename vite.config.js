import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.js",
            name: "ReactPrismJSComponent",
            fileName: (format) => `react-prismjs-component.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"], // Remove prismjs from external
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith(".css")) {
                        return "styles/[name][extname]";
                    }
                    return "assets/[name][extname]";
                },
            },
        },
    },
    plugins: [react()],
    css: {
        modules: {
            localsConvention: "camelCase",
            generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
    },
});
