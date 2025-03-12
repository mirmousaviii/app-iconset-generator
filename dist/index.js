#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const generator_1 = require("./generator");
commander_1.program
    .version("1.0.0")
    .description("CLI tool to generate app icons for Android and iOS")
    .requiredOption("-i, --input <file>", "Input image file (required)")
    .option("-o, --output <folder>", "Output directory", "icons")
    .action((options) => {
    (0, generator_1.generateIcons)(options.input, options.output);
});
commander_1.program.parse(process.argv);
