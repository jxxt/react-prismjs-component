import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "ReactPrismJSComponent",
            fileName: (format) => `react-prismjs-component.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "prismjs"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    prismjs: "Prism"
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name.endsWith(".css")) {
                        return "styles/[name][extname]";
                    }
                    if (assetInfo.name.endsWith(".svg")) {
                        return "assets/[name][extname]";
                    }
                    return "assets/[name][extname]";
                },
            },
        },
        cssCodeSplit: true,
    },
    plugins: [react()],
    css: {
        modules: {
            localsConvention: "camelCase",
            generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
    },
});