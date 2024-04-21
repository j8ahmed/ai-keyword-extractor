# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


---

## Meta Data

Started On: 2024-04-21

### References:

- [ - GitHub Repo]()
- [Build a Keyword Extractor: React + OpenAI API + Chakra UI - YouTube](https://www.youtube.com/watch?v=jJNPPP2YEdM)
- [Build a Keyword Extractor: React + OpenAI API + Chakra UI - Traversy Media](https://www.traversymedia.com/blog/ai-keyword-extractor-with-react-openai)
- [Color Mode - ChakraUI Docs](https://v2.chakra-ui.com/docs/styled-system/color-mode)
- [useColorModeValue Hook - Color Mode - ChakraUI Docs](https://v2.chakra-ui.com/docs/styled-system/color-mode#usecolormodevalue)
- [Default Theme - ChakraUI Docs](https://v2.chakra-ui.com/docs/styled-system/theme)
- [Customize Theme - ChakraUI Docs](https://v2.chakra-ui.com/docs/styled-system/customize-theme)
- [OKLCH Color Picker & Converter](https://oklch.com/#70,0.1,189,100)
- [Get Color.js - Color Library](https://colorjs.io/get/)
- [HEX to HSL convert javascript [duplicate] - StackOverflow](https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript)
- [Smart Swatch - Small app for building theme colors](https://smart-swatch.netlify.app/#009F9F)
- [Themera - Chakra UI color scheme builder app](https://themera.vercel.app/)
- []()
- []()
- []()
- []()
