declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL?: string;
    VERCEL_URL?: string;
    VERCEL_ENV?: "production" | "preview" | "development";
    VERCEL_PROJECT_PRODUCTION_URL?: string;
  }
}
