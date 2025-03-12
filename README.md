# icon-generator

[![npm version](https://img.shields.io/npm/v/icon-generator.svg)](https://www.npmjs.com/package/icon-generator)

A simple CLI tool to generate Android and iOS icons from a single image.


## 🚀 Installation
```sh
npm install -g icon-generator
```

## 📦 Usage
```sh
icon-generator -i <path-to-image> -o <output-directory>

# OR

icon-generator --input <path-to-image> --output <output-directory>
```

# Options

| Option           | Description                          |
|-----------------|----------------------------------|
| `-i, --input`  | Input image file (required)     |
| `-o, --output` | Output directory (default: `icons`) |


## 📌 Example

### Generate icons from an image
```sh
icon-generator -i ./example/logo.png -o ./example
```

###  Without `-o`, saves to `icons/`
```sh
icon-generator -i logo.png
```

## 🛠 Development

```sh
git clone https://github.com/mirmousaviii/icon-generator.git
cd icon-generator
npm install
npx tsc
npm link # to use the local CLI tool
npm unlink -g icon-generator # to remove the local CLI tool
icon-generator -i ./example/logo.png -o ./example
# Or test with `node`
node dist/index.js -i ./example/logo.png -o ./example # Test in local
```

## 🤝 Contributing

If you have any idea, feel free to open an issue and/or create a pull request.

# 📜 License

This project is licensed under the **MIT License**. 
