import sharp from "sharp";
import fs from "fs-extra";
import path from "path";
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
export async function generateIcons(input, output) {
    try {
        await fs.ensureDir(output);
        // Generate Android icons
        for (const { name, size } of androidSizes) {
            const dir = path.join(output, `android/drawable-${name}`);
            await fs.ensureDir(dir);
            //  Generate the normal icon
            const outputPath = path.join(dir, "ic_launcher.png");
            await sharp(input).resize(size, size).toFile(outputPath);
            console.log(`✅ Android Icon: ${outputPath}`);
            //  Generate the round icon
            const roundOutputPath = path.join(dir, "ic_launcher_round.png");
            await sharp(input)
                .resize(size, size)
                .composite([{ input: Buffer.from(`<svg><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`), blend: "dest-in" }])
                .toFile(roundOutputPath);
            console.log(`✅ Android Round Icon: ${roundOutputPath}`);
        }
        // Generate iOS icons
        for (const { name, size } of iosSizes) {
            const dir = path.join(output, "ios");
            await fs.ensureDir(dir);
            const outputPath = path.join(dir, `${name}.png`);
            await sharp(input)
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
