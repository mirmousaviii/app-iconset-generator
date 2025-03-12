# app-icon-maker

[![npm version](https://img.shields.io/npm/v/app-icon-maker.svg)](https://www.npmjs.com/package/app-icon-maker)
[![npm downloads](https://img.shields.io/npm/dt/app-icon-maker.svg)](https://www.npmjs.com/package/app-icon-maker)

A simple CLI tool to generate Android and iOS icons from a single image.

## 🚀 Installation
```sh
npm install -g app-icon-maker
```

## 📦 Usage
```sh
app-icon-maker -i <path-to-image> -o <output-directory>

# OR

app-icon-maker --input <path-to-image> --output <output-directory>
```

# Options

| Option           | Description                          |
|-----------------|----------------------------------|
| `-i, --input`  | Input image file (required)     |
| `-o, --output` | Output directory (default: `icons`) |


# Example

#### Generate icons from an image
```sh
app-icon-maker -i ./example/logo.png -o ./example
```

####  Without `-o`, saves to `icons/`
```sh
app-icon-maker -i logo.png
```

# Development

```sh
git clone
cd app-icon-maker
npm install
npx tsc
node dist/index.js -i ./example/logo.png -o ./example
npm link # to use the CLI tool
npm unlink -g app-icon-maker # to remove the CLI tool
app-icon-maker -i ./example/logo.png -o ./example
```

# Contributing

If you have any idea, feel free to open an issue and/or create a pull request.
