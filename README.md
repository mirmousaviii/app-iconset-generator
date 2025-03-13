# app-iconset-generator

[![npm version](https://img.shields.io/npm/v/app-iconset-generator.svg)](https://www.npmjs.com/package/app-iconset-generator)

A simple CLI tool to generate Android and iOS icons from a single image.


## 🚀 Installation
```sh
npm install -g app-iconset-generator
```

## 📦 Usage
```sh
app-iconset-generator -i <path-to-image> -o <output-directory>

# OR

app-iconset-generator --input <path-to-image> --output <output-directory>
```

# Options

| Option           | Description                          |
|-----------------|----------------------------------|
| `-i, --input`  | Input image file (required)     |
| `-o, --output` | Output directory (default: `icons`) |
| `-n, --no-round` | Disable generating round Android icons |


## 📌 Example

### Generate icons from an image
```sh
app-iconset-generator -i ./example/logo.png -o ./example
```

###  Without `-o`, saves to `icons/`
```sh
app-iconset-generator -i logo.png
```

## 🛠 Development

```sh
git clone https://github.com/mirmousaviii/app-iconset-generator.git
cd app-iconset-generator
npm install
npx tsc
npm link # to use the local CLI tool
npm unlink -g app-iconset-generator # to remove the local CLI tool
app-iconset-generator -i ./example/logo.png -o ./example
# Or test with `node`
node dist/index.js -i ./example/logo.png -o ./example # Test in local
```

## 🤝 Contributing

If you have any idea, feel free to open an issue and/or create a pull request.

# 📜 License

This project is licensed under the **MIT License**. 
