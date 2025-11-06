/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RUBINHO_CAMPEAO?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Build-time variables injected by Vite
declare const __COMMIT_SHA__: string
declare const __BUILD_TIMESTAMP__: string

