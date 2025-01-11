import { useState, useEffect } from "react";

import Prism from "prismjs";

import "../imports/plugins/line-numbers/prism-line-numbers";
import "../imports/plugins/line-numbers/prism-line-numbers.css";

import clipboardIcon from "../assets/clipboard.svg";
import tickIcon from "../assets/tick.svg";

import styles from "../styles/CodeSnippet.module.css";

// THEMES
const themes = {
    okaidia: () => import("../styles/themes/prism-okaidia.css"),
    tomorrow: () => import("../styles/themes/prism-tomorrow.css"),
    dark: () => import("../styles/themes/prism-dark.css"),
    default: () => import("../styles/themes/prism.css"),
    twilight: () => import("../styles/themes/prism-twilight.css"),
    coy: () => import("../styles/themes/prism-coy.css"),
    solarizedlight: () => import("../styles/themes/prism-solarizedlight.css"),
};

// LANGUAGES
const languages = {
    javascript: () => import("../imports/components/prism-javascript"),
    python: () => import("../imports/components/prism-python"),
    java: () => import("../imports/components/prism-java"),
    css: () => import("../imports/components/prism-css"),
    markup: () => import("../imports/components/prism-markup"),
    typescript: () => import("../imports/components/prism-typescript"),
    jsx: () => import("../imports/components/prism-jsx"),
    cpp: () => import("../imports/components/prism-cpp"),
    csharp: () => import("../imports/components/prism-csharp"),
    php: () => import("../imports/components/prism-php"),
    ruby: () => import("../imports/components/prism-ruby"),
    swift: () => import("../imports/components/prism-swift"),
    rust: () => import("../imports/components/prism-rust"),
    go: () => import("../imports/components/prism-go"),
    scala: () => import("../imports/components/prism-scala"),
    kotlin: () => import("../imports/components/prism-kotlin"),
    sql: () => import("../imports/components/prism-sql"),
    bash: () => import("../imports/components/prism-bash"),
    powershell: () => import("../imports/components/prism-powershell"),
    docker: () => import("../imports/components/prism-docker"),
    yaml: () => import("../imports/components/prism-yaml"),
    json: () => import("../imports/components/prism-json"),
    markdown: () => import("../imports/components/prism-markdown"),
    dart: () => import("../imports/components/prism-dart"),
    graphql: () => import("../imports/components/prism-graphql"),
    lua: () => import("../imports/components/prism-lua"),
    perl: () => import("../imports/components/prism-perl"),
    r: () => import("../imports/components/prism-r"),
    matlab: () => import("../imports/components/prism-matlab"),
    haskell: () => import("../imports/components/prism-haskell"),
};

const CodeSnippet = ({ code, language, theme, codeIcon }) => {
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
