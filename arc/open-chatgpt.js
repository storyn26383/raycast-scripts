#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Open ChatGPT
// @raycast.mode silent

// Optional parameters:
// @raycast.icon icons/chatgpt.png

// Documentation:
// @raycast.author sasaya
// @raycast.authorURL https://raycast.com/sasaya

import { findTab, selectTab } from './helpers.js'

findTab('ChatGPT').then(selectTab)
