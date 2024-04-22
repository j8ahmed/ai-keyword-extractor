![Screenshot of app](./screenshots/screenshot.jpg)

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

## Setup

Install Chakra UI dependencies.

```bash
npm i \
@chakra-ui/react \
@emotion/react \
@emotion/styled \
framer-motion \

# Output:

```

Prompt:

```
Extract keywords from this text. Make the first letter of each word uppercase and separate with commas
```

Sample Text:

```
This is a 37+ hour in-depth course that will take you from the absolute beginning of JavaScript, learning about data types, functions and loops to learning DOM manipulation, asynchronous JS with promises, async/await and much more. You will even learn how to write unit tests for algorithms. We go into how JavaScript works under the hood including execution context, the call stack, event loop, etc. We learn about Webpack tooling and how to create a modern development environment. At the end, we build a Node.js/Express API with a custom Webpack frontend.
```

Output Keywords From Gemini AI:

```
JavaScript, DOM, Promises, Async/Await, Algorithms, Execution, Context, Call, Stack, Event, Loop, Webpack, Node.js, Express, API
```

### Using Google's Gemini AI instead of OpenAI's ChatGPT

Here is a sample request using curl. I will translate this into my react code.

```bash
#!/bin/bash

API_KEY="YOUR_API_KEY"

curl \
  -X POST https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${API_KEY} \
  -H 'Content-Type: application/json' \
  -d @<(echo '{
  "contents": [
    {
      "parts": [
        {
          "text": "\n\nExtract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\nThis is a 37+ hour in-depth course that will take you from the absolute beginning of JavaScript, learning about data types, functions and loops to learning DOM manipulation, asynchronous JS with promises, async/await and much more. You will even learn how to write unit tests for algorithms. We go into how JavaScript works under the hood including execution context, the call stack, event loop, etc. We learn about Webpack tooling and how to create a modern development environment. At the end, we build a Node.js/Express API with a custom Webpack frontend.\n\n\n\n"
        }
      ]
    }
  ],
  "generationConfig": {
    "temperature": 0.5,
    "topK": 1,
    "topP": 1,
    "maxOutputTokens": 2048,
    "stopSequences": []
  },
  "safetySettings": [
    {
      "category": "HARM_CATEGORY_HARASSMENT",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      "category": "HARM_CATEGORY_HATE_SPEECH",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    }
  ]
}')
```


### Random

David's Teas:

[Smores tea](https://www.davidstea.com/ca_en/shop/smores-chai/10638DT01VAR0042394.html)
Organic earl grey
vanilla grey

Fallout 2

- [Fallout 2 Restoration Project, updated](https://github.com/BGforgeNet/Fallout2_Restoration_Project)

Bad courses

- [Master the Coding Interview: Big Tech (FAANG) Interviews](https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/?couponCode=LETSLEARNNOWPP)
- [Zero to Mastery - Liz says it is unethical - maybe check it out?](https://zerotomastery.io/courses/)


---

## Meta Data

Started On: 2024-04-21

### References:

- [Repo - GitHub](https://github.com/j8ahmed/ai-keyword-extractor)
- [Original Project Repo - GitHub](https://github.com/bradtraversy/ai-keyword-extractor)
- [Build a Keyword Extractor: React + OpenAI API + Chakra UI - YouTube](https://www.youtube.com/watch?v=jJNPPP2YEdM)
- [Build a Keyword Extractor: React + OpenAI API + Chakra UI - Traversy Media](https://www.traversymedia.com/blog/ai-keyword-extractor-with-react-openai)
- [OpenAI Dev](https://platform.openai.com/usage)
- [Google Gemini AI API](https://aistudio.google.com/app/prompts/new_freeform)
- [Google AI Studio quickstart](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart)
- [Google AI Studio API Keys](https://aistudio.google.com/app/apikey)
- []()


- [Code Buddy Club Schedule - Toronto JS](https://github.com/torontojs/code-buddy-club/blob/main/Code%20Buddy%20Club%20Schedule.md)
- [Toronto JS Give a talk - application form](https://docs.google.com/forms/d/e/1FAIpQLSc_ZA0ElHLsMedjdQjZechw5H1RJNhG1DZxtFTsqhkdut3eFg/viewform)
- [Color Mode - ChakraUI Docs](https://v2.chakra-ui.com/docs/styled-system/color-mode)
- [useColorModeValue Hook - Color Mode - ChakraUI Docs](https://v2.chakra-ui.com/docs/styled-system/color-mode#usecolormodevalue)
- [Default Theme - ChakraUI Docs](https://v2.chakra-ui.com/docs/styled-system/theme)
- [Customize Theme - ChakraUI Docs](https://v2.chakra-ui.com/docs/styled-system/customize-theme)
- [OKLCH Color Picker & Converter](https://oklch.com/#70,0.1,189,100)
- [Get Color.js - Color Library](https://colorjs.io/get/)
- [HEX to HSL convert javascript [duplicate] - StackOverflow](https://stackoverflow.com/questions/46432335/hex-to-hsl-convert-javascript)
- [Smart Swatch - Small app for building theme colors](https://smart-swatch.netlify.app/#009F9F)
- [Themera - Chakra UI color scheme builder app](https://themera.vercel.app/)
- [Palette Generator + API for Tailwind CSS](https://www.tints.dev/brand/00A9A9)
- []()
- []()
- []()
