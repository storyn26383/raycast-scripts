#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Decode PM Data
// @raycast.mode fullOutput

// Optional parameters:
// @raycast.icon 🔓

// Documentation:
// @raycast.author sasaya
// @raycast.authorURL https://raycast.com/sasaya

import { inflate as ungzip } from 'pako'
import { execSync } from 'child_process'

function main() {
  console.log(format(decode(clean(exec('pbpaste')))))
}

function exec(command) {
  return execSync(command).toString()
}

function clean(string) {
  return string.trim().replace(/^"/, '').replace(/"$/, '').split('\\n').join('').split('\\r').join('')
}

function decode(encrypted) {
  return decodeURIComponent(gzdecode(toUint8Array(base64decode(encrypted))))
}

function base64decode(encoded) {
  return atob(encoded)
}

function toUint8Array(string) {
  return new Uint8Array(string.split('').map((c) => c.charCodeAt(0)))
}

function gzdecode(data) {
  return new TextDecoder().decode(ungzip(data))
}

function format(string) {
  return JSON.stringify(JSON.parse(string), null, 2)
}

main()
