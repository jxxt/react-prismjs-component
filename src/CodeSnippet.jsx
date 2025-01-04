import { useState, useEffect } from "react";
// Import Prism directly since we'll bundle it
import Prism from "prismjs";

// Import core CSS
import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// Bundle all themes
import "prismjs/themes/prism-okaidia.css";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/themes/prism-dark.css";
import "prismjs/themes/prism-twilight.css";
import "prismjs/themes/prism-coy.css";
import "prismjs/themes/prism-solarizedlight.css";

// Bundle all languages
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-php";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-go";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-perl";
import "prismjs/components/prism-r";
import "prismjs/components/prism-matlab";
import "prismjs/components/prism-haskell";

import clipboardIcon from "./assets/clipboard.svg";
import tickIcon from "./assets/tick.svg";
import styles from "./CodeSnippet.module.css";

const CodeSnippet = ({ code, language, theme = "default", codeIcon }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        // Apply theme
        document.querySelector("pre")?.classList.add(`theme-${theme}`);

        // Highlight code
        Prism.highlightAll();
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
