import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.js", // Entry point
            name: "ReactPrismJSComponent",
            fileName: (format) => `react-prismjs-component.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"], // Only exclude React and ReactDOM
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    plugins: [react()],
});
