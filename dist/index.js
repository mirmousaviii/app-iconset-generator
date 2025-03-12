#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const generator_js_1 = require("./generator.js");
const package_json_1 = __importDefault(require("../package.json"));
commander_1.program
    .name(package_json_1.default.name)
    .version(package_json_1.default.version)
    .description(package_json_1.default.description)
    .requiredOption("-i, --input <file>", "Input image file (required)")
    .option("-o, --output <folder>", "Output directory", "icons")
    .action(async (options) => {
    try {
        await (0, generator_js_1.generateIcons)(options.input, options.output);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("❌ Error:", error.message);
        }
        else {
            console.error("❌ Unknown Error:", error);
        }
        process.exit(1);
    }
});
commander_1.program.parse(process.argv);
