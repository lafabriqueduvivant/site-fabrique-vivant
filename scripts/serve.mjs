import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { spawn } from "node:child_process";
import { buildSite } from "./build.mjs";
import { runChecks } from "./check.mjs";

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8"
};

const { output } = await buildSite();
await runChecks();

const port = Number(process.env.PORT || 4173);

async function resolveRequest(pathname) {
  const safePath = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  let candidate = join(output, safePath);

  try {
    const info = await stat(candidate);
    if (info.isDirectory()) candidate = join(candidate, "index.html");
    return candidate;
  } catch {
    if (!extname(candidate)) {
      try {
        const directoryIndex = join(candidate, "index.html");
        await stat(directoryIndex);
        return directoryIndex;
      } catch {
        return join(output, "404.html");
      }
    }
    return join(output, "404.html");
  }
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const file = await resolveRequest(url.pathname);
    const body = await readFile(file);
    const notFound = file.endsWith("404.html") && url.pathname !== "/404.html";
    response.writeHead(notFound ? 404 : 200, {
      "Content-Type": mimeTypes[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(body);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`Erreur d'aperçu : ${error.message}`);
  }
});

server.listen(port, "127.0.0.1", () => {
  const url = `http://127.0.0.1:${port}/`;
  console.log(`Aperçu ouvert sur ${url}`);
  console.log("Garder cette fenêtre ouverte. Ctrl+C arrête l'aperçu.");
  if (process.platform === "win32" && process.env.NO_OPEN !== "1") {
    const child = spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" });
    child.unref();
  }
});
