// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://6a2277c4952b573e439f4aa791ea3923@o4508973483491328.ingest.us.sentry.io/4508973486964736",
  integrations: [
    Sentry.mongooseIntegration(),
  ]
});