import { useState, useEffect } from "react";

import Prism from "prismjs";

import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import clipboardIcon from "./assets/clipboard.svg";
import tickIcon from "./assets/tick.svg";

import styles from "./CodeSnippet.module.css";

// THEMES
const themes = {
    okaidia: () => import("prismjs/themes/prism-okaidia.css"),
    tomorrow: () => import("prismjs/themes/prism-tomorrow.css"),
    dark: () => import("prismjs/themes/prism-dark.css"),
    default: () => import("prismjs/themes/prism.css"),
    twilight: () => import("prismjs/themes/prism-twilight.css"),
    coy: () => import("prismjs/themes/prism-coy.css"),
    solarizedlight: () => import("prismjs/themes/prism-solarizedlight.css"),
};

// LANGUAGES
const languages = {
    javascript: () => import("prismjs/components/prism-javascript"),
    python: () => import("prismjs/components/prism-python"),
    java: () => import("prismjs/components/prism-java"),
    css: () => import("prismjs/components/prism-css"),
    markup: () => import("prismjs/components/prism-markup"),
    typescript: () => import("prismjs/components/prism-typescript"),
    jsx: () => import("prismjs/components/prism-jsx"),
    cpp: () => import("prismjs/components/prism-cpp"),
    csharp: () => import("prismjs/components/prism-csharp"),
    php: () => import("prismjs/components/prism-php"),
    ruby: () => import("prismjs/components/prism-ruby"),
    swift: () => import("prismjs/components/prism-swift"),
    rust: () => import("prismjs/components/prism-rust"),
    go: () => import("prismjs/components/prism-go"),
    scala: () => import("prismjs/components/prism-scala"),
    kotlin: () => import("prismjs/components/prism-kotlin"),
    sql: () => import("prismjs/components/prism-sql"),
    bash: () => import("prismjs/components/prism-bash"),
    powershell: () => import("prismjs/components/prism-powershell"),
    docker: () => import("prismjs/components/prism-docker"),
    yaml: () => import("prismjs/components/prism-yaml"),
    json: () => import("prismjs/components/prism-json"),
    markdown: () => import("prismjs/components/prism-markdown"),
    dart: () => import("prismjs/components/prism-dart"),
    graphql: () => import("prismjs/components/prism-graphql"),
    lua: () => import("prismjs/components/prism-lua"),
    perl: () => import("prismjs/components/prism-perl"),
    r: () => import("prismjs/components/prism-r"),
    matlab: () => import("prismjs/components/prism-matlab"),
    haskell: () => import("prismjs/components/prism-haskell"),
};

const CodeSnippet = ({ code, language, theme = "default", codeIcon }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const [loadError, setLoadError] = useState(null);

    useEffect(() => {
        const loadDependencies = async () => {
            try {
                if (themes[theme]) {
                    await themes[theme]();
                }

                if (languages[language]) {
                    await languages[language]();
                }

                setLoadError(null);

                Prism.highlightAll();
            } catch (error) {
                console.error("Failed to load dependencies:", error);
                setLoadError(
                    `Failed to load ${
                        error.message.includes("theme") ? "theme" : "language"
                    }`
                );
            }
        };

        loadDependencies();
    }, [code, language, theme]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    if (loadError) {
        return <div className={styles.error}>Error: {loadError}</div>;
    }

    return (
        <div
            className={styles.codeSnippetContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.iconContainer}>
                {!isHovered ? (
                    <img
                        src={codeIcon}
                        alt={`${language} icon`}
                        className={styles.jsicon}
                    />
                ) : (
                    <button
                        onClick={handleCopy}
                        className={styles.copyButton}
                        title="Copy code"
                    >
                        <img
                            src={isCopied ? tickIcon : clipboardIcon}
                            alt={isCopied ? "Copied" : "Copy"}
                            className={styles.icon}
                        />
                    </button>
                )}
            </div>

            <pre className="line-numbers">
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
};

export default CodeSnippet;
