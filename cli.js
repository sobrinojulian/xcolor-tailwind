#!/usr/bin/env node
'use strict';

const { exec } = require("child_process");
const hexToTailwind = require("hex-to-tailwind");
const clipboardy = require('clipboardy');

exec("xcolor", (error, stdout, stderr) => {
    const hex = stdout.trim()
    const tailwind = hexToTailwind(hex).tailwind
    clipboardy.writeSync(tailwind);
    console.log(`'${tailwind}' copied to clipboard!`)
});