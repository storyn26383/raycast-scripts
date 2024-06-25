#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Open WhatsApp
// @raycast.mode silent

// Optional parameters:
// @raycast.icon icons/whatsapp.svg

// Documentation:
// @raycast.author sasaya
// @raycast.authorURL https://raycast.com/sasaya

import { findTab, selectTab } from './helpers.js'

findTab('WhatsApp').then(selectTab)
