// Types for Vite environment variables used in this app.
// Add any VITE_ variables you read in code here so `import.meta.env` is typed.
declare global {
  interface ImportMetaEnv {
    readonly VITE_SITE_URL?: string;
    readonly VITE_FORMSPREE_ID?: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
