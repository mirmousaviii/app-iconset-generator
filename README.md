# app-icon-maker

[![npm version](https://img.shields.io/npm/v/app-icon-maker.svg)](https://www.npmjs.com/package/app-icon-maker)

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


## 📌 Example

### Generate icons from an image
```sh
app-icon-maker -i ./example/logo.png -o ./example
```

###  Without `-o`, saves to `icons/`
```sh
app-icon-maker -i logo.png
```

## 🛠 Development

```sh
git clone https://github.com/yourusername/app-icon-maker.git
cd app-icon-maker
npm install
npx tsc
npm link # to use the local CLI tool
npm unlink -g app-icon-maker # to remove the local CLI tool
app-icon-maker -i ./example/logo.png -o ./example
# Or test with `node`
node dist/index.js -i ./example/logo.png -o ./example # Test in local
```

## 🤝 Contributing

If you have any idea, feel free to open an issue and/or create a pull request.

# 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
