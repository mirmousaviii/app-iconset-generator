#!/usr/bin/env node

import { program } from "commander";
import { generateIcons } from "./generator.js";
import packageJson from "../package.json" with { type: "json" };

program
    .name(packageJson.name)
    .version(packageJson.version)
    .description(packageJson.description)
    .requiredOption("-i, --input <file>", "Input image file (required)")
    .option("-o, --output <folder>", "Output directory", "icons")
    .action(async (options) => {
        try {
            await generateIcons(options.input, options.output);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error("❌ Error:", error.message);
            } else {
                console.error("❌ Unknown Error:", error);
            }
            process.exit(1);
        }
    });

program.parse(process.argv);
