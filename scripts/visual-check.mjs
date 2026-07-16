import { mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const screenshotDirectory = join(tmpdir(), "opencode", "site-fabrique-vivant");
const baseUrl = "http://127.0.0.1:4173";

await mkdir(screenshotDirectory, { recursive: true });

function run(command, args, options = {}) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, { ...options, stdio: "inherit" });
    child.once("error", reject);
    child.once("exit", (code) => {
      if (code === 0) resolvePromise();
      else reject(new Error(`${command} a quitté avec le code ${code}.`));
    });
  });
}

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await new Promise((resolvePromise) => setTimeout(resolvePromise, 200));
  }
  throw new Error("Le serveur d'aperçu ne répond pas.");
}

const server = spawn(process.execPath, ["scripts/serve.mjs"], {
  cwd: root,
  env: { ...process.env, NO_OPEN: "1" },
  stdio: "ignore"
});

const captures = [
  ["accueil-desktop.png", "1440,1100", "/"],
  ["accueil-mobile.png", "500,1000", "/"],
  ["atelier-desktop.png", "1440,1100", "/animations-nature-jardin/atelier-terre-vivante/"],
  ["accompagnement-desktop.png", "1440,3000", "/accompagnement-projets-nature/"],
  ["formations-desktop.png", "1440,3000", "/formations-professionnelles/"],
  ["contact-mobile.png", "500,1000", "/contact/"]
];

try {
  await waitForServer();
  for (const [filename, size, path] of captures) {
    await run(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      `--window-size=${size}`,
      `--screenshot=${join(screenshotDirectory, filename)}`,
      `${baseUrl}${path}`
    ]);
  }
  console.log(`Captures créées dans ${screenshotDirectory}`);
} finally {
  server.kill();
}
