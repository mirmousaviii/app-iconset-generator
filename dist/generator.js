"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIcons = generateIcons;
const sharp_1 = __importDefault(require("sharp"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const androidSizes = [
    { name: "mdpi", size: 48 },
    { name: "hdpi", size: 72 },
    { name: "xhdpi", size: 96 },
    { name: "xxhdpi", size: 144 },
    { name: "xxxhdpi", size: 192 },
];
const iosSizes = [
    { name: "Icon-20", size: 20 },
    { name: "Icon-29", size: 29 },
    { name: "Icon-40", size: 40 },
    { name: "Icon-60", size: 60 },
    { name: "Icon-76", size: 76 },
    { name: "Icon-83.5", size: 83.5 },
    { name: "Icon-1024", size: 1024 },
];
async function generateIcons(input, output) {
    try {
        await fs_extra_1.default.ensureDir(output);
        // Generate Android icons
        for (const { name, size } of androidSizes) {
            const dir = path_1.default.join(output, `android/drawable-${name}`);
            await fs_extra_1.default.ensureDir(dir);
            const outputPath = path_1.default.join(dir, "ic_launcher.png");
            await (0, sharp_1.default)(input)
                .resize(Math.round(size), Math.round(size))
                .toFile(outputPath);
            console.log(`✅ Android Icon: ${outputPath}`);
        }
        // Generate iOS icons
        for (const { name, size } of iosSizes) {
            const dir = path_1.default.join(output, "ios");
            await fs_extra_1.default.ensureDir(dir);
            const outputPath = path_1.default.join(dir, `${name}.png`);
            await (0, sharp_1.default)(input)
                .resize(Math.round(size), Math.round(size))
                .toFile(outputPath);
            console.log(`✅ iOS Icon: ${outputPath}`);
        }
        console.log("🎉 All icons generated successfully!");
    }
    catch (error) {
        console.error("❌ Error generating icons:", error);
    }
}
