import { defineConfig } from "vitest/config";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Configuration
 */
const LIBRARY_NAME = "ts-library-template";

/**
 * Directory
 */
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => ({
	root: __dirname,
	cacheDir: `./node_modules/.vite/${LIBRARY_NAME}}`,
	test: {
		watch: false,
		globals: true,
		environment: "node",
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["default"],
		coverage: {
			reportsDirectory: `./coverage/${LIBRARY_NAME}}`,
			provider: "v8" as const,
		},
	},
}));
