#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Open Instagram Messages
// @raycast.mode silent

// Optional parameters:
// @raycast.icon icons/instagram.ico

// Documentation:
// @raycast.author sasaya
// @raycast.authorURL https://raycast.com/sasaya

import { findTab, selectTab } from './helpers.js'

findTab('Instagram Messages').then(selectTab)
