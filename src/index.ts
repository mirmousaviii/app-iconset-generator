#!/usr/bin/env node

import { program } from "commander";
import { generateIcons } from "./generator";

program
    .version("1.0.0")
    .description("CLI tool to generate app icons for Android and iOS")
    .requiredOption("-i, --input <file>", "Input image file (required)")
    .option("-o, --output <folder>", "Output directory", "icons")
    .action((options) => {
        generateIcons(options.input, options.output);
    });

program.parse(process.argv);
