import { execSync } from 'child_process'

console.log(JSON.stringify(JSON.parse(execSync('pbpaste').toString()), null, 2))
