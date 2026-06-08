import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

// C-3: claim-stuffed perfect-score / absolute performance claims -> defensible "near-perfect".
// KEEP: "98-100 PageSpeed scores" (realistic range), "<100ms transaction speed" (latency target),
//       "zero-downtime deployments" (real engineering technique).
const PAIRS = [
  ['100% PageSpeed', 'near-perfect PageSpeed'],
  ['perfect Lighthouse scores', 'near-perfect Lighthouse scores'],
  ['100 Lighthouse scores', 'near-perfect Lighthouse scores'],
  ['<100ms load times', 'ultra-fast load times'],
  ['zero downtime', 'minimal downtime'],   // space-version only; "zero-downtime" (hyphen) untouched
  ['100/100', '98-100'],
];

const files = execSync('find src -type f \\( -name "*.ts" -o -name "*.tsx" \\)', { encoding: 'utf8' })
  .trim().split('\n');

let totalFiles = 0, totalRepl = 0; const perPair = {};
for (const f of files) {
  let src = readFileSync(f, 'utf8'); let out = src;
  for (const [from, to] of PAIRS) {
    const n = out.split(from).length - 1;
    if (n) { out = out.split(from).join(to); perPair[from] = (perPair[from] || 0) + n; totalRepl += n; }
  }
  if (out !== src) { writeFileSync(f, out, 'utf8'); totalFiles++; }
}
console.log(`Files changed: ${totalFiles}, total replacements: ${totalRepl}`);
for (const [k, v] of Object.entries(perPair)) console.log(`  ${v}x  "${k}"`);
// safety: confirm realistic ranges untouched
console.log('\n-- safety: "98-100 PageSpeed" still present (should be >0): ' +
  (execSync('grep -rIc "98-100 PageSpeed" src || true', { encoding: 'utf8' }).split('\n').filter(l => !l.endsWith(':0') && l.trim()).length) + ' files');
console.log('-- "zero-downtime" (hyphen, kept) still present: ' +
  (execSync('grep -rIl "zero-downtime" src || true', { encoding: 'utf8' }).trim().split('\n').filter(Boolean).length) + ' files');
