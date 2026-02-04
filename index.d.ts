import type { Plugin } from "vite";

export interface Options {
  /** Where your SvelteKit routes live. Defaults to 'src/routes' */
  routesDir?: string;
  /** Where to write the helper. Defaults to 'src/lib/generated/routes.ts' */
  outputFile?: string;
}

/**
 * Vite plugin to generate Symfony-style named routes for SvelteKit
 */
export function svelteNamedRoutes(options?: Options): Plugin;
