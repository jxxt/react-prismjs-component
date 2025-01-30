<h1 align="center">ReactJs + PrismJs</h1>
<p align="center">PrismJs Component Library to render Syntax Highlighting for Code Snippets in ReactJs</p>

<p align="center">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/react-prismjs-component">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/react-prismjs-component">
    <img alt="NPM License" src="https://img.shields.io/npm/l/react-prismjs-component">
</p>

## Features

* 🔍 **Syntax Highlighting**: Real-time code highlighting using PrismJS
* 🎨 **Multiple Themes**: Supports 7 built-in themes (dark and light both themes)
* 📝 **Language Support**: Out-of-the-box support for 25+ programming languages
* 📋 **Copy to Clipboard**: Built-in code copying functionality
* 🔢 **Line Numbers**: Integrated line numbering support
* 🖼️ **Custom Icons**: Ability to customize file icons for different languages
* ⚡ **Dynamic Loading**: Lazy loads language and theme files for better performance
* 🎯 **Error Handling**: Built-in error boundaries for theme and language loadingfeedback

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Props for CodeSnippet](#props-for-codesnippet)
- [Supported Themes](#supported-themes)
- [Supported Languages](#supported-languages)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Installation

```bash
npm i react-prismjs-component
```

## Usage

Here's a quick example of how to use the library:

```jsx
import CodeSnippet from "react-prismjs-component";

function App() {
    const sampleCode = `console.log('Hello World');`;

    return (
        <div>
            <CodeSnippet
                code={sampleCode}
                language="javascript"
                theme="okaidia"
                codeIcon="/path/to/icon.svg"
                width="1000px"
            />
        </div>
    );
}

export default App;
```

## Props for CodeSnippet

| Prop Name  | Type   | Default   | Description                                       |
| ---------- | ------ | --------- | ------------------------------------------------- |
| `code`     | string | Required  | The code snippet to display.                      |
| `language` | string | `markup`  | The programming language for syntax highlighting. |
| `theme`    | string | `default` | The theme to use for syntax highlighting.         |
| `codeIcon` | string | `null`    | Path to a custom icon for the code file.          |
| `width`    | string | `800px`   | Width of the CodeSnippet component.               |

## Supported Themes

The following themes are supported:

-   `okaidia`
-   `tomorrow`
-   `dark`
-   `default`
-   `twilight`
-   `coy`
-   `solarizedlight`

To apply a theme, pass its name to the `theme` prop.

## Supported Languages

The following languages are supported out of the box:

<table>
<tr>
    <td><code>JavaScript</code></td>
    <td><code>Python</code></td>
    <td><code>Java</code></td>
    <td><code>CSS</code></td>
    <td><code>HTML</code></td>
    <td><code>TypeScript</code></td>
    <td><code>JSX</code></td>
</tr>
<tr>
    <td><code>C++</code></td>
    <td><code>C#</code></td>
    <td><code>PHP</code></td>
    <td><code>Ruby</code></td>
    <td><code>Swift</code></td>
    <td><code>Rust</code></td>
    <td><code>Go</code></td>
</tr>
<tr>
    <td><code>Scala</code></td>
    <td><code>Kotlin</code></td>
    <td><code>SQL</code></td>
    <td><code>Bash</code></td>
    <td><code>PowerShell</code></td>
    <td><code>Docker</code></td>
    <td><code>YAML</code></td>
</tr>
<tr>
    <td><code>JSON</code></td>
    <td><code>Markdown</code></td>
    <td><code>Dart</code></td>
    <td><code>GraphQL</code></td>
    <td><code>Lua</code></td>
    <td><code>Perl</code></td>
    <td><code>R</code></td>
</tr>
</table>

Pass the language name (in lowercase) to the `language` prop.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Credits

- [PrismJs](https://prismjs.com/)
- [ReactJs](https://react.dev/)

## License

This library is licensed under the [MIT License](LICENSE).