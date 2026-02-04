# Svelte Named Routes

A vite plugin for SvelteKit that provides Symfony-style named routes. Stop hardcoding URLs like `/admin/users/settings/[id]` and start using type-safe names.

## Installation

```bash
npm install github:acaala/svelte-named-routes
```

## Setup

1. Register the plugin in your `vite.config.ts` file:

```typescript
import { defineConfig } from 'vite';
import svelte from 'vite-plugin-svelte';
import svelteNamedRoutes from 'svelte-named-routes';

export default defineConfig({
  plugins: [
    sveltekit(),
    svelteNamedRoutes(),
  ],
});
```

2. Define Route Names

In any `+page.ts` (or `+page.js`), export a `config` object with a `name`:

```typescript
export const config = {
  name: 'user_detail',
};
```

## Usage

The plugin automatically generates a helper file in `$lib/generated/routes.ts`. Import the `path` function to generate URLs:

```svelte
<script lang="ts">
  import { path } from '$lib/generated/routes';
</script>

<a href={path('home')}>Home</a>

<a href={path('user_detail', { id: 1 })}>View Profile</a>
```

## Configuration

You can customize the directory paths if needed:

```typescript
svelteNamedRoutes({
  routesDir: 'src/routes',
  generatedDir: 'src/lib/generated/routes.ts',
}),
```
