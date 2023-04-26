import { loadEnv } from "vite";
import { defineConfig } from "astro/config";

// Load local environment variables
const { NODE_ENV } = loadEnv(import.meta.env.MODE, process.cwd(), "");
const isProduction = NODE_ENV === "production";

// Get deploy data and public base path
import { targets } from ".aunty/deploy.json";
const base = getBase(targets);

// Integrations
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte()],
  base: isProduction ? base : "/"
});

// Functions

function getBase(targets) {
  const contentFtpTarget = targets.find(t => t.profile === "contentftp");
  const { to } = contentFtpTarget;
  return to.replace(/\/www/, "");
}
