#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Format JSON
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🧹

// Documentation:
// @raycast.author sasaya
// @raycast.authorURL https://raycast.com/sasaya

import { execSync } from 'child_process'

console.log(JSON.stringify(JSON.parse(execSync('pbpaste').toString()), null, 2))
