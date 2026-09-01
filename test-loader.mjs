import { pathToFileURL, fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import { createRequire } from "node:module";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "..");
const requireFromRoot = createRequire(path.join(ROOT, "package.json"));
const TS_EXTS = [".ts", ".tsx", "/index.ts", "/index.tsx"];

function tryResolveWithTs(abs) {
  if (fs.existsSync(abs)) {
    const stat = fs.statSync(abs);
    if (!stat.isDirectory()) return pathToFileURL(abs).href;
  }
  for (const ext of TS_EXTS) {
    const candidate = abs + ext;
    if (fs.existsSync(candidate)) return pathToFileURL(candidate).href;
  }
  return null;
}

export function resolve(specifier, context, nextResolve) {
  // Handle @/ alias.
  if (specifier.startsWith("@/")) {
    const abs = path.join(ROOT, specifier.slice(2));
    const resolved = tryResolveWithTs(abs);
    if (resolved) return { url: resolved, shortCircuit: true };
  }

  // Handle relative imports without extension (e.g. "../gift-metadata-limits").
  if ((specifier.startsWith("./") || specifier.startsWith("../")) && !path.extname(specifier)) {
    const parentDir = context.parentURL
      ? path.dirname(fileURLToPath(context.parentURL))
      : ROOT;
    const abs = path.resolve(parentDir, specifier);
    const resolved = tryResolveWithTs(abs);
    if (resolved) return { url: resolved, shortCircuit: true };
  }

  // Handle bare imports (e.g. "ethers", "zod", "web-push")
  if (!specifier.startsWith(".") && !specifier.startsWith("/") && !specifier.startsWith("file:") && !specifier.startsWith("node:")) {
    try {
      const resolved = import.meta.resolve(specifier);
      return { url: resolved, shortCircuit: true };
    } catch {
      // pass to nextResolve
    }
  }

  return nextResolve(specifier, context);
}
